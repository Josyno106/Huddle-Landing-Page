import React from "react";
import growtogether from "./../../assets/illustration-grow-together.svg";
import bgtop from "./../../assets/bg-section-top-desktop-1.svg";
import bgbottom from "./../../assets/bg-section-bottom-desktop-1.svg";

function GrowTogether(props) {
  return (
    <div className="grow-together-full">
      <img src={bgtop} alt="top" />
      <div className="grow-together">
        <div className="description">
          <h2>Grow Together</h2>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <img src={growtogether} alt="grow together" />
      </div>
      <img src={bgbottom} alt="bottom" />
    </div>
  );
}

export default GrowTogether;
