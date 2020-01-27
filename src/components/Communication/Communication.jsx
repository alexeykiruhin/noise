import React, {Component} from 'react';
import css from './Communication.module.css';
import { NavLink } from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

class Communication extends Component {
    constructor(props) {
        super(props);
        this.messages = props.communication.messages;
        this.names = props.communication.names;
        this.handleNewMsg = this.handleNewMsg.bind(this);
    }

    handleNewMsg() {
        let text =
            alert('hi');
    }

    render() {
        return (
            <div className={css.communication}>
                <Dialogs names={this.names}/>
                <Messages messages={this.messages}/>
                <div className={css.newMsg}>
                    <p>New msg</p>
                    <textarea> </textarea>
                    <br/>
                    <button onClick={this.handleNewMsg}>Send</button>
                </div>
            </div>
        );
    }
}

export default Communication;
