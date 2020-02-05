import React, {Component} from 'react';
import css from './Messages.module.css';
import Message from "./Message/Message";

class Messages extends Component {
    render() {
        const listMsg = this.props.messages.map(msg =>
            <Message message={msg} id={this.props.messages.indexOf(msg)} />
            );
        return (
            <div className={css.messages}>
                {listMsg}
            </div>
        );
    }
}

export default Messages;
