import React from "react";
import yourusers from "./../../assets/illustration-your-users.svg";
import bgtop from "./../../assets/bg-section-top-desktop-2.svg";
import bgbottom from "./../../assets/bg-section-bottom-desktop-2.svg";
function YourUsers(props) {
  return (
    <div className="your-users-full">
      <img src={bgtop} alt="top" />
      <div className="your-users">
        <div className="description">
          <h2>Your Users</h2>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <img src={yourusers} alt="your users" />
      </div>
      <img src={bgbottom} alt="bottom" />
    </div>
  );
}

export default YourUsers;
