import React from 'react';
import Pdf from "./pdf";
import Botmsg from "./condition";

const MultiRes = ({bot_message,sentTime, pdLink}) => {
    function link(){
            return     <Pdf pd={pdLink}/>
    }
    function bot(){
        return <Botmsg bot_message={bot_message} sentTime={sentTime}/>
    }

    return(
        <div>
            {link()}
            {bot()}
        </div>
    );
};

export default MultiRes;