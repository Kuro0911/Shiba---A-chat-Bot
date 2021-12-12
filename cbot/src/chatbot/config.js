import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../components/BotAvatar/BotAvatar";
import MyAvatar from "../components/MyAvatar/MyAvatar";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import Commands from "../components/commands/commands";
import Plat from "../components/plats/platforms";

const config = {
  botName: "CryptoBot",
  initialMessages: [createChatBotMessage(`I am Shiba - The CryptoBot How may i help you?`), 
  createChatBotMessage(`To get started try typing !help`,
  {
    widget: "options",
  }),
  ],
  customComponents: {     
    header: () => <div style={{ backgroundColor: 'rgb(104,86,231)', opacity: "0.7",padding: "5px", borderRadius: "25px" , fontSize:"2.0rem",color:"white",fontFamily:"monospace"}}>Shiba</div>,
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <MyAvatar {...props} />,

  },
    widgets: [
      {
        widgetName: "commands",
        widgetFunc: (props) => <Commands {...props} />,
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
        widgetName: "BasicQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          questions: [
            {
              question: "how to buy Crypto",
              answer:
                "sell your mum",
              id: 1,
            },
            {
              question: "where to sell?",
              answer:
                "to me",
              id: 2,
            },
          ],
        },
      },
      {
        widgetName: "InvestQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          questions: [
            {
              question: "how to invest in Crypto?",
              answer:
                "pta nhi bhai",
              id: 1,
            },
            {
              question: "how to get into Crypto?",
              answer:
                "dont know",
              id: 2,
            },
          ],
        },
      },
      {
        widgetName: "ThirdQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          questions: [
            {
              question: "what is Blockchain?",
              answer:
                "Blockchain is a system that records the transaction information of cryptos.It is simply a digital ledger of transactions.\nCheating, hacking, or changing the system is difficult if not impossible.",
              id: 1,
            },
            {
              question: "what is address?",
              answer:
                "An address in the crypto world refers to a specific network destination where crypto is sent. It is intended to provide a highly secure and unique place for holding crypto assets.",
              id: 2,
            },
          ],
        },
      },
    ],
  };

  export default config;