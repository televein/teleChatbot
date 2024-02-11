import React from "react";
import userImage from "./images/user.png";

const usermsg = ({ user_message ,sentTime}) => {
  return (
    <div className="chatbot-message user-message">
      <div className="chat-inp">
        <p className="chatbot-input" senttime={sentTime}>
          <span>{user_message}</span>
        </p>
        <img src={userImage} className="input-image" alt=""/>
      </div>
    </div>
  );
};

export default usermsg;