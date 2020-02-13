import React from 'react';
import css from './Communication.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

const Communication = (props) => {

    let handleUpdateNewMsg = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    };

    let handleNewMsg = () => {
        props.sendMessage();
    };

    return (
        <div className={css.communication}>
            <Dialogs names={props.names}/>
            <Messages messages={props.messages}/>
            <div className={css.newMsg}>
                <p>New msg</p>
                <textarea value={props.newMessageText}
                          onChange={handleUpdateNewMsg}/>
                <br/>
                <button onClick={handleNewMsg}>Send</button>
            </div>
        </div>
    );
};

export default Communication;
