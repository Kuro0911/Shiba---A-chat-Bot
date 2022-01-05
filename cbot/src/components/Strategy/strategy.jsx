import React from "react";

import "./strategy.css";

const Vcoin = (props) => {
    const vcoin = [
        {
            text: "Bitcoin",
            handler: props.actionProvider.getBtcStr,
            id: 1,
          },
          { 
            text: "Ethereum", 
            handler: props.actionProvider.getEthStr, 
            id: 2 
          },
          { 
            text: "BNB Coin", 
            handler: props.actionProvider.getBnbStr, 
            id: 3 
          },
          { 
              text: "DogeCoin", 
              handler: props.actionProvider.getDogeStr, 
              id: 4 
          },
    ];
  
    const buttonsMarkup = vcoin.map((vcoin) => (
      <button key={vcoin.id} onClick={vcoin.handler} className="Vcoins-button">
        {vcoin.text}
      </button>
    ));
  
    return <div className="Vcoin-container">{buttonsMarkup}</div>;
  };

export default Vcoin;