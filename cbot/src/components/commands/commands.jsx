import React from "react";

import "./commands.css";

const Commands = (props) => {
  const commands = [
    {
      text: "!start", 
      handler: props.actionProvider.WhereToStart, 
      id: 1 
    },
    { 
      text: "!Stats", 
      handler: props.actionProvider.GetStat, 
      id: 2 
    },
    { 
      text: "!price", 
      handler: props.actionProvider.GetPrice, 
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