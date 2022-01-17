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

  return (
    <div>
      <div>
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
