// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    let lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("dog")) {
      actions.handleDog()
    }
    if (lowerMessage.includes("hello") ||lowerMessage.includes("hi")||lowerMessage.includes("hey") ) {
      actions.handleHello();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
