import React from "react";
import logo from "./../../assets/logo.svg";

function NavBar(props) {
  return (
    <div className="nav">
      <img src={logo} alt="logo" />
      <button>Try it free</button>
    </div>
  );
}

export default NavBar;
