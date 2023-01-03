import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
const botName = "DOn";
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}. Ask me any question...`),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
