import { waitForPendingWrites } from "firebase/firestore";
import React from "react";
import Styles from "../App.css";

function Message(props) {
  const { text, uid } = props.message;
  return (
    <div>
      <div className="">{text}</div>
      <div>
        <img
          style={{ height: "36px", width: "36px" }}
          src="/lil-miquela.jpeg"
          alt="lil miquela"
        />
      </div>
      <div>{text}</div>
      <div>
        <img
          style={{ height: "36px", width: "36px" }}
          src="/person-2.jpeg"
          alt="model with pink hair"
        />
      </div>
    </div>
  );
}

export default Message;
