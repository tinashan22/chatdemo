import "./App.css";
import { useState } from "react";
import ChatPage from "./ChatPage";
import FriendListPage from "./FriendListPage";

function App() {
  const [chatActive, setChatActive] = useState(false);
  const [activeFriend, setActiveFriend] = useState("Laura");

  return (
    <div>
      {chatActive && (
        <ChatPage activeFriend={activeFriend} setChatActive={setChatActive} />
      )}

      {!chatActive && (
        <div
          onClick={() => {
            setChatActive(true);
          }}
        >
          <FriendListPage setActiveFriend={setActiveFriend} />
        </div>
      )}
    </div>
  );
}

export default App;
