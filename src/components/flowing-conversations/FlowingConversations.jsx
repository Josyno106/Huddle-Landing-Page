import React from "react";
import conversation from "./../../assets/illustration-flowing-conversation.svg";

function FlowingConversations(props) {
  return (
    <div className="flowing-conversations">
      <img src={conversation} alt="conversation" />
      <div className="description">
        <h2>Flowing Conversations</h2>
        <p>
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </div>
  );
}

export default FlowingConversations;
