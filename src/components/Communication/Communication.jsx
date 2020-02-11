import React from 'react';
import css from './Communication.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/communictaion_reducer";

const Communication = (props) => {

    let handleUpdateNewMsg = (e) => {
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text);
        props.dispatch(action);
    };

    let handleNewMsg = () => {
        let action = sendMessageActionCreator();
        props.dispatch(action);
    };

    return (
        <div className={css.communication}>
            <Dialogs names={props.communication.names}/>
            <Messages messages={props.communication.messages}/>
            <div className={css.newMsg}>
                <p>New msg</p>
                <textarea value={props.communication.newMessageText}
                          onChange={handleUpdateNewMsg}/>
                <br/>
                <button onClick={handleNewMsg}>Send</button>
            </div>
        </div>
    );
};

export default Communication;
