import React, {Component} from 'react';
import css from './Message.module.css';

class Message extends Component {
    render() {
        return (
            <div className={css.message}>{this.props.message}</div>
        );
    }
}

export default Message;
