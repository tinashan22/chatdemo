import React, { useState } from "react";

function Message(props) {
  const { text } = props.message;
  const imgSrc = `/${props.activeFriend}.jpeg`;
  // const [color, setColor] = useState("green");
  // const tailwindColors = [
  //   "red",
  //   "orange",
  //   "amber",
  //   "yellow",
  //   "lime",
  //   "emerald",
  //   "sky",
  //   "blue",
  //   "indigo",
  //   "violet",
  //   "purple",
  //   "fuchsia",
  //   "rose",
  // ];

  // let colorNumber = Math.floor(Math.random() * tailwindColors.length);

  // console.log(tailwindColors[colorNumber]);

  // let darkBgClass = `bg-${color}-600`;
  // let lightBgClass = `bg-${color}-100`;
  // let darkBorderClass = `border-${color}-600`;

  // const handleColorChange = () => {
  //   setColor(tailwindColors[colorNumber]);
  //   console.log(color);
  // };

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
            className={`text-white font-sans text-md  bg-green-600/90 rounded-[20px] px-4 py-2 mr-4`}
          >
            <div className={` text-white`}>{text} </div>
          </div>
          <div>
            <img
              className="rounded-[50%] min-w-[40px]"
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
            className="rounded-[50%] min-w-[40px]"
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
            className={`text-black font-sans text-md bg-green-100 border border-green-600 rounded-[20px] px-4 py-2 `}
          >
            {text}
          </div>
          <div className="w-[30px] h-[30px] ml-2 py-2  relative">
            <div className={`${showLike} z-1 absolute  opacity-80 `}>
              <img alt="like button" src="/like.svg" />{" "}
            </div>
            <div className={`${addLike} transition ease-in-out absolute z-15`}>
              <img alt="liked button" src="/liked.svg" />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="w-[40px] h-[40px] z-50 absolute bottom-36"
        onClick={handleColorChange}
      >
        {" "}
        Change Color!
      </div> */}
    </div>
  );
}

export default Message;
