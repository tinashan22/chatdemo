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
    <div>
      <form onSubmit={sendMessage}>
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
