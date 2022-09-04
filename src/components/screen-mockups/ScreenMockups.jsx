import React from "react";
import screens from "./../../assets/screen-mockups.svg";
function ScreenMockups(props) {
  return (
    <div className="mockup">
      <img src={screens} alt="mockups" />
    </div>
  );
}

export default ScreenMockups;
