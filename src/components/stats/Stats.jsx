import React from "react";
import communities from "./../../assets/icon-communities.svg";
import messages from "./../../assets/icon-messages.svg";

function Stats(props) {
  return (
    <div className="stats">
      <div className="communities">
        <img src={communities} alt="icon" />
        <h2>
          1.4K<span>+</span>
        </h2>
        <p> Communities Formed</p>
      </div>
      <div className="messages">
        <img src={messages} alt="icon" />
        <h2>
          2.7K<span>+</span>
        </h2>
        <p> Messages Sent</p>
      </div>
    </div>
  );
}

export default Stats;
