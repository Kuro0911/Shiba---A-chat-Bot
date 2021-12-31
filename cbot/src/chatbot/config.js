import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar/BotAvatar";
import MyAvatar from "../components/MyAvatar/MyAvatar";
import Options from "../components/Options/Options";
import Commands from "../components/commands/commands";
import Plat from "../components/plats/platforms";
import Faqs from "../components/faqs/faqs";
import Real from "../components/RealTimePrice/real";
import Source from "../components/SourceCode/source";


const config = {
  botName: "CryptoBot",
  initialMessages: [createChatBotMessage(`I am Shiba - The CryptoBot How may i help you?`),
  createChatBotMessage(`To get started try typing !help`),
  createChatBotMessage(`Here are some frequently asked Questions`,
    {
      widget: "Faqs",
    }),
  ],
  customComponents: {
    header: () => <div style={{ backgroundColor: 'rgb(104,86,231)', opacity: "0.7", padding: "5px", borderRadius: "25px", fontSize: "2.0rem", color: "white", fontFamily: "monospace" }}>Shiba</div>,
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <MyAvatar {...props} />,

  },
  widgets: [
    {
      widgetName: "commands",
      widgetFunc: (props) => <Commands {...props} />,
    },
    {
      widgetName: "real",
      widgetFunc: (props) => <Real {...props} />,
    },
    {
      widgetName: "plat",
      widgetFunc: (props) => <Plat {...props} />,
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "Faqs",
      widgetFunc: (props) => <Faqs {...props} />,
    },
    {
      widgetName: "source",
      widgetFunc: (props) => <Source {...props} />, 
    },
  ],
};

export default config;