import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
// import firestore from "firebase/compat/firestore";
import { db } from "../firebase.js";

function SendMessage() {
  const [formValue, setFormValue] = useState("");
  const messagesRef = db.collection("messages");

  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(e);
    setFormValue("");
  };

  return (
    <div className="flex content-center ">
      <div className="  sm:mx-auto mx-0 rounded-xl sm:w-2/3 w-full sm:max-w-3xl ">
        <form
          className="bg-green-100 shadow-md shadow-green-100 h-[100px] border-none rounded-xl  focus:border-green-600 focus:ring-green-600"
          onSubmit={sendMessage}
        >
          {/* <div ref={dummy}></div> */}
          <input
            type="text"
            className="bg-green-50 px-4 py-4 h-[100px] border-none rounded-xl w-5/6 focus:border-green-600 focus:rounded-xl focus:ring-green-600 "
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button
            className="pl-4 py-auto w-1/6 border-none opacity-80"
            type="submit"
            onClick={sendMessage}
          >
            <div className="flex justify-end pr-8">
              <img src="/send.svg" />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
