import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import firestore from "firebase/compat/firestore";
import { db } from "../firebase.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message.js";
import SendMessage from "./SendMessage.js";

// const firestore = firebase.firestore();

function Chat() {
  const messagesRef = db.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(50);
  const [messages] = useCollectionData(query, { idField: "id" });

  //   const [formValue, setFormValue] = useState("");
  //   const sendMessage = async (e) => {
  //     e.preventDefault();
  //     await messagesRef.add({
  //       text: formValue,
  //       createdAt: db.FieldValue.serverTimestamp(),
  //     });
  //     setFormValue("");
  //   };

  console.log(query);
  return (
    <div>
      <div>
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
      </div>
      <SendMessage />
      {/* <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          {" "}
          Send
        </button>
      </form> */}
    </div>
  );
}

export default Chat;
