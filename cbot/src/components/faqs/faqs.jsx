import React from "react";

import "./faqs.css";

const Faqs = (props) => {
  const faqs = [
    {
      text: "How do I start?", 
      handler: props.actionProvider.WhereToStart, 
      id: 1
      
    },
    { 
      text: "where does the money go?", 
      handler: props.actionProvider.MoneyGo, 
      id: 2 
    },
    { 
      text: "What is Cryptocurrency?",
      handler: props.actionProvider.WhatIsCrypto,
      id: 3,
    },
  ];

  const buttonsMarkup = faqs.map((faqs) => (
    <button key={faqs.id} onClick={faqs.handler} className="faqs-button">
      {faqs.text}
    </button>
  ));

  return <div className="faqs-container">{buttonsMarkup}</div>;
};

export default Faqs;