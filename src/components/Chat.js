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
  const query = messagesRef.orderBy("createdAt").limit(100);
  const [messages] = useCollectionData(query, { idField: "id" });

  useEffect(() => {
    const dummy = document.getElementById("dummy");
    dummy.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative">
      <div>
        <div className="max-w-3xl  transform translate-x-[-2px] translate-y-[-2px] fixed w-full px-4 sm:px-8 py-4 flex items-center bg-green-200 border-2 border-green-700 mb-8">
          <div>
            <img src="/back.svg" />
          </div>
          <div className="underline text-zinc-900  decoration-green-500 ml-3 font-sans font-medium text-2xl self-center">
            {" "}
            Laura
          </div>
        </div>

        <div className="overflow-y-auto pt-[84px]">
          {messages &&
            messages.map((msg) => <Message key={msg.id} message={msg} />)}
        </div>
      </div>
      <div className="mb-[50px]" id="dummy"></div>
    </div>
  );
}

export default Chat;
