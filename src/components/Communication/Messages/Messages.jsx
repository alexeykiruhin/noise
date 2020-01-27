import React, {Component} from 'react';
import css from './Messages.module.css';
import Message from "./Message/Message";

class Messages extends Component {
    constructor(props) {
        super(props);
        this.messages = props.messages;
    }
    render() {
        const listMsg = this.messages.map(msg => <Message message={msg} id={this.messages.indexOf(msg)} />);
        return (
            <div className={css.messages}>
                {listMsg}
            </div>
        );
    }
}

export default Messages;
