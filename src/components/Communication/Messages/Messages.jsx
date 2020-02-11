import React from 'react';
import css from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props) => {

    const listMsg = props.messages.map(msg =>
        <Message message={msg.message} id={msg.id}/>
    );
    return (
        <div className={css.messages}>
            {listMsg}
        </div>
    );
};

export default Messages;
