import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import firestore from "firebase/compat/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message.js";

// const firestore = firebase.firestore();

function Chat({ name }) {
  const messagesRef = db.collection("messages");

  const q = messagesRef.where("friendName", "==", name);

  const messageQuery = messagesRef.orderBy("createdAt").limit(100);
  console.log("messages", q);
  const [messages] = useCollectionData(q, { idField: "id" });

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
            {name}
          </div>
        </div>

        <div className="overflow-y-auto pt-[84px]">
          {messages &&
            messages.map((msg) => (
              <Message messageName={name} key={msg.id} message={msg} />
            ))}
        </div>
      </div>
      <div className="mb-[50px]" id="dummy"></div>
    </div>
  );
}

export default Chat;
