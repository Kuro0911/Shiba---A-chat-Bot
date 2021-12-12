import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "where to start",
      handler: props.actionProvider.handleBasicQuiz,
      id: 1,
    },
    { 
      text: "where to invest", 
      handler: props.actionProvider.handleInvestQuiz, 
      id: 2 
    },
    { 
      text: "Some Important Terms", 
      handler: props.actionProvider.handleThirdQuiz, 
      id: 3 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;