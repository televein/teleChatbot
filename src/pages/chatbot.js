import React from "react";
import Pdf from "./pdf";
import Usermsg from "./usermsg";
import Botmsg from "./condition";
import Multires from "./multires";
import Btn from "./btn";

const ChatbotMessage = ({ user_message,bot_message,sentTime, pdLink,lenMul,btn}) => {
  let i;

  function renderbtn(){
    if(btn !== undefined){
      return <Btn msg={btn}/>
    }
  }
  function renderConversation(){
    if(pdLink !== undefined && (lenMul !== 1 || lenMul === undefined)){
      return     <Pdf pd={pdLink}/>
    }
  }
  function botMessage(){
    if(lenMul === 1 && pdLink !== undefined){
      const mulres = [];
    for(i=0;i<bot_message.length;i++){
      mulres.push(<Multires bot_message={bot_message[i]} pdLink={pdLink[i]} sentTime={sentTime}/>);
    }
    return([mulres]);
  }
  else if(lenMul === 1 && pdLink === undefined){
    const mulres = [];
    for(i=0;i<bot_message.length;i++){
      mulres.push(<Botmsg bot_message={bot_message[i]} sentTime={sentTime}/>);
    }
    return([mulres]);
  }
    else if(bot_message !== undefined){
      return <Botmsg bot_message={bot_message} sentTime={sentTime}/>
    }
  }
  function renderusermsg(){
    if(user_message !== undefined){
      return  <Usermsg user_message={user_message} sentTime={sentTime}/>
    }
  }
  return (
    <div>
      {renderusermsg()}
      {botMessage()}
      {renderbtn()}
      {renderConversation()}  
    </div>
  );
};

export default ChatbotMessage;