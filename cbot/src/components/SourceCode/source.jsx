import React from "react";

import "./source.css";

const Source = (props) => {
  const source = [
    {
      text: "To look at my source code click M̲E̲",
      handler: props.actionProvider.GetSource,
      id: 1,
    },
  ];

  const buttonsMarkup = source.map((source) => (
    <button key={source.id} onClick={source.handler} className="source-button">
      {source.text}
    </button>
  ));

  return <div className="source-container">{buttonsMarkup}</div>;
};

export default Source;