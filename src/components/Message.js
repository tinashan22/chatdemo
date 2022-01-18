import React from "react";
import { useState, useEffect } from "react";

function Message(props) {
  const { text, uid } = props.message;
  const imgSrc = `/${props.messageName}.jpeg`;
  const [color, setColor] = useState("green");

  console.log(imgSrc);

  let darkBgClass = `bg-${color}-600`;
  let lightBgClass = `bg-${color}-100`;
  let darkBorderClass = `border-${color}-600`;

  const [showLike, setShowLike] = useState("hidden");
  const [addLike, setAddLike] = useState("hidden");

  const handleMouseOver = () => {
    setShowLike("block");
  };

  const handleMouseOut = () => {
    setShowLike("hidden");
  };

  const handleDouleClick = () => {
    if (addLike === "hidden") {
      setAddLike("block");
    } else if (addLike === "block") {
      setAddLike("hidden");
    }
  };

  return (
    <div>
      {/* sender messages */}
      <div className="  flex flex-grow justify-end">
        <div className=" mr-4 sm:mr-8 right-0 flex items-center mb-6">
          <div
            className={`text-white font-sans text-lg   bg-green-600/90 rounded-[20px] px-4 py-2 mr-4`}
          >
            <div className={` text-white`}>{text} </div>
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
      <div className="  ml-4 sm:ml-8 right-0 flex items-center mb-6">
        <div className="mr-4">
          <img
            className="rounded-[50%]"
            style={{ height: "40px", width: "40px" }}
            src={imgSrc}
            alt="model with pink hair"
          />
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onDoubleClick={handleDouleClick}
          className="flex items-center"
        >
          <div
            className={`text-black font-sans text-md ${lightBgClass} border ${darkBorderClass} rounded-[20px] px-4 py-2 `}
          >
            {text}
          </div>
          <div className="w-[30px] h-[30px] ml-2 py-2  relative">
            <div className={`${showLike} z-1 absolute  opacity-80 `}>
              <img src="/like.svg" />{" "}
            </div>
            <div className={`${addLike} transition ease-in-out absolute z-15`}>
              <img src="/liked.svg" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
