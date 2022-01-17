import React from "react";
import { useState, useEffect } from "react";

function Message(props) {
  const { text, uid } = props.message;
  const [color, setColor] = useState("green");

  return (
    <div>
      {/* sender messages */}
      <div className="  flex flex-grow justify-end">
        <div className=" mr-4 sm:mr-8 right-0 flex items-center mb-6">
          <div
            className={`text-white text-lg bg-${color}-600 rounded-[20px] px-6 py-2 mr-4`}
          >
            {text}
          </div>
          <div>
            <img
              className="rounded-[50%]"
              style={{ height: "40px", width: "40px" }}
              src="/lil-miquela.jpeg"
              alt="lil miquela"
            />
          </div>
        </div>
      </div>
      {/* receiver messages */}
      <div className="ml-4 sm:ml-8 right-0 flex items-center mb-6">
        <div className="mr-4">
          <img
            className="rounded-[50%]"
            style={{ height: "40px", width: "40px" }}
            src="/Laura.jpeg"
            alt="model with pink hair"
          />
        </div>
        <div
          className={`text-black text-lg bg-${color}-100 border border-${color}-600 rounded-[20px] px-6 py-2 `}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default Message;
