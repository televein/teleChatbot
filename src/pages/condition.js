import React from "react";
import chatbotImage from "./images/chatbot-img.jpg";

const botmsg = ({ bot_message ,sentTime}) => {
  return (
   <div className="chatbot-message chatbot">
   <div className="chat-inp">
     <img src={chatbotImage} className="input-image" alt=""/>
     <p className="chatbot-text" senttime={sentTime}>
       <span dangerouslySetInnerHTML={{ __html: bot_message }} />
     </p>
   </div>
 </div>
  );
};

export default botmsg;
