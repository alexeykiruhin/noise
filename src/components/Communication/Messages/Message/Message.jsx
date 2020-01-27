import React, {Component} from 'react';
import css from './Message.module.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.message = props.message;
    }
    render() {
        return (
            <div className={css.message}>{this.message}</div>
        );
    }
}

export default Message;
