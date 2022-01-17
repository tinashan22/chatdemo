import "./App.css";
import Chat from "./components/Chat";

const css = `
.window{
  height: calc(100vh - 4rem);
  
}`;

function App() {
  return (
    <div className="App sm:my-8 sm:mx-auto overflow-y-auto window max-w-3xl  rounded-3xl border border-green-700">
      <style>{css}</style>
      <Chat />
    </div>
  );
}

export default App;
