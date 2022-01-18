import "./App.css";
import ChatPage from "./ChatPage";
import FriendListPage from "./FriendListPage";

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

function App() {
  var friendListName = "Laura";
  return (
    <div>
      {/* <FriendListPage /> */}

      <ChatPage friendListName={friendListName} />
    </div>
  );
}

export default App;
