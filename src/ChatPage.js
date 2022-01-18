import React from "react";
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";

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

function ChatPage({ friendListName }) {
  var friendName = friendListName;
  return (
    <div className="App relative sm:mt-8 shadow-md sm:overflow-y-auto shadow-green-100 sm:my-8 sm:mx-auto  window sm:max-w-3xl max-w-full rounded-3xl border-2 border-green-700">
      <style>{css}</style>

      <Chat name={friendName} />
      <div className=" fixed sm:mb-8 sm:left-0 w-full bottom-0">
        <SendMessage name={friendName} />
      </div>
    </div>
  );
}

export default ChatPage;
