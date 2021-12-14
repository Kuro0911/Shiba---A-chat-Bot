import React from "react";

import "./commands.css";

const Commands = (props) => {
  const commands = [
    {
      text: "!news",
      handler: props.actionProvider.GetNews,
      id: 1,
    },
    { 
      text: "!start", 
      handler: props.actionProvider.WhereToStart, 
      id: 2 
    },
    { 
      text: "!cryptoMine", 
      handler: props.actionProvider.GetMine, 
      id: 3 
    },
    { 
        text: "!platform", 
        handler: props.actionProvider.GetPlat, 
        id: 4 
    },
  ];

  const buttonsMarkup = commands.map((commands) => (
    <button key={commands.id} onClick={commands.handler} className="commands-button">
      {commands.text}
    </button>
  ));

  return <div className="commands-container">{buttonsMarkup}</div>;
};

export default Commands;