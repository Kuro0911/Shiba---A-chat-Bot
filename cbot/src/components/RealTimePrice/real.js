import React from "react";

import "./real.css";

const Real = (props) => {
  const real = [
    {
      text: "Bitcoin",
      handler: props.actionProvider.getBtc,
      id: 1,
    },
    { 
      text: "Ethereum", 
      handler: props.actionProvider.getEth, 
      id: 2 
    },
    { 
      text: "LiteCoin", 
      handler: props.actionProvider.getLite, 
      id: 3 
    },
    { 
        text: "DogeCoin", 
        handler: props.actionProvider.getDoge, 
        id: 4 
    },
  ];

  const buttonsMarkup = real.map((real) => (
    <button key={real.id} onClick={real.handler} className="real-button">
      {real.text}
    </button>
  ));

  return <div className="real-container">{buttonsMarkup}</div>;
};

export default Real;