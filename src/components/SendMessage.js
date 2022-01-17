import React from "react";
import { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
// import firestore from "firebase/compat/firestore";
import { db } from "../firebase.js";

function SendMessage() {
  const [formValue, setFormValue] = useState("");
  const messagesRef = db.collection("messages");
  const dummy = useRef();
  const sendMessage = async (e) => {
    e.preventDefault();
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log(e);
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div ref={dummy}></div>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          {" "}
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
