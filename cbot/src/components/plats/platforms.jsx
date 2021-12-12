import React from "react";

import "./platforms.css";

const Plat = (props) => {
  const plats = [
    {
      text: "Binance",
      handler: props.actionProvider.GoToBinace,
      id: 1,
    },
    { 
      text: "Coinbase", 
      handler: props.actionProvider.GoToCoinbase, 
      id: 2 
    },
    { 
      text: "Kraken", 
      handler: props.actionProvider.GoToKraken, 
      id: 3 
    },
    { 
        text: "WazirX", 
        handler: props.actionProvider.GoToWazirX, 
        id: 4 
    },
  ];

  const buttonsMarkup = plats.map((plats) => (
    <button key={plats.id} onClick={plats.handler} className="plats-button">
      {plats.text}
    </button>
  ));

  return <div className="plats-container">{buttonsMarkup}</div>;
};

export default Plat;