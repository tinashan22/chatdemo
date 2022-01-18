import React from "react";

const css = `
@media only screen and (min-width: 640px){
  .window{
  height: calc(100vh - 112px);
  }
};

  .window{
    height:100vh;
    }
;`;

function FriendListPage({ setActiveFriend }) {
  return (
    <div>
      <div className="shadow-md sm:min-h-min min-h-screen shadow-green-100 sm:my-8 sm:mx-auto window sm:max-w-3xl max-w-full rounded-3xl border border-green-700">
        <style>{css}</style>
        <div className="max-w-3xl  transform translate-x-[-1px] translate-y-[-2px] w-full px-4 sm:px-8 py-4 flex justify-center bg-green-200 border-2 border-green-700">
          <div className="underline text-zinc-900  decoration-green-500 ml-3 font-sans font-medium text-2xl self-center">
            Chat Room
          </div>
        </div>
        {/* friend list */}

        <div className="flex-col transform translate-y-[-2px] ">
          {/* friend: Laura */}
          <div
            onClick={() => {
              setActiveFriend("Laura");
            }}
            className="flex items-center pl-6 py-4 bg-green-50 border-b border-green-600"
          >
            <div>
              <img
                className="rounded-[50%]"
                style={{ height: "40px", width: "40px" }}
                src="/Laura.jpeg"
                alt="Laura"
              />
            </div>
            <div className="text-black font-medium font-sans text-md ml-4">
              {" "}
              Laura
            </div>
          </div>
          {/* friend: Meg */}
          <div
            onClick={() => {
              setActiveFriend("Meg");
            }}
            className="flex items-center pl-6 py-4 bg-green-50 border-b border-green-600"
          >
            <div>
              <img
                className="rounded-[50%]"
                style={{ height: "40px", width: "40px" }}
                src="/Meg.jpeg"
                alt="Meg"
              />
            </div>
            <div className="text-black font-medium  font-sans text-md ml-4">
              {" "}
              Meg
            </div>
          </div>
          {/* friend: Tintin */}
          <div
            onClick={() => {
              setActiveFriend("Tintin");
            }}
            className="flex items-center pl-6 py-4 bg-green-50 border-b border-green-600"
          >
            <div>
              <img
                className="rounded-[50%]"
                style={{ height: "40px", width: "40px" }}
                src="/Tintin.png"
                alt="Tintin"
              />
            </div>
            <div className="text-black font-medium font-sans text-md ml-4">
              {" "}
              Tintin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendListPage;
