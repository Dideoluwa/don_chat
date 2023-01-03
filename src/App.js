import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "./components/config";
import ActionProvider from "./components/ActionProvider";
import MessageParser from "./components/MessageParser";

function App() {
  return (
    <div>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;
