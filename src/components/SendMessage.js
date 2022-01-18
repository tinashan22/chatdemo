import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
// import firestore from "firebase/compat/firestore";
import { db } from "../firebase.js";

function SendMessage({ name }) {
  const [formValue, setFormValue] = useState("");
  const messagesRef = db.collection("messages");
  console.log(name);

  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      friendName: name,
    });
    // console.log(
    //   "find Laura",
    //   e.target.attributes.getNamedItem("data-friend").value
    // );
    setFormValue("");
  };

  return (
    <div className="flex content-center ">
      <div className="  sm:mx-auto mx-0 rounded-xl sm:w-2/3 w-full sm:max-w-3xl ">
        <form
          className="bg-green-100 shadow-md shadow-green-100 h-[100px] border-none rounded-xl  focus:border-green-600 focus:ring-green-600"
          onSubmit={sendMessage}
        >
          <div className="flex items-center justify-between">
            {/* input div */}
            <div className="sm:w-5/6 w-3/4">
              <input
                type="text"
                className="bg-green-50 px-4 py-4 h-[100px] border-none w-full rounded-xl focus:border-green-600 focus:rounded-xl  focus:ring-green-600"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
              />
            </div>
            {/* image button div */}
            <div className="hover:opacity-100 opacity-70">
              <img src="/image.svg" />
            </div>
            {/* submit button div */}
            <div className=" transform translate-y-[3px] mr-6">
              <button
                className=" hover:opacity-100 opacity-80"
                type="submit"
                data-friend="Laura"
                onClick={sendMessage}
              >
                <div className="flex">
                  <img src="/send.svg" />
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
