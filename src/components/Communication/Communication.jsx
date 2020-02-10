import React, {Component} from 'react';
import css from './Communication.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/communictaion_reducer";

class Communication extends Component {
    constructor(props) {
        super(props);
        this.handleNewMsg = this.handleNewMsg.bind(this);
        this.handleUpdateNewMsg = this.handleUpdateNewMsg.bind(this);
    }

    handleUpdateNewMsg(e) {
        let text = e.target.value;
        let action = updateNewMessageActionCreator(text);
        this.props.dispatch(action);
    }

    handleNewMsg() {
        let action = sendMessageActionCreator();
        this.props.dispatch(action);
    }

    render() {
        return (
            <div className={css.communication}>
                <Dialogs names={this.props.communication.names}/>
                <Messages messages={this.props.communication.messages}/>
                <div className={css.newMsg}>
                    <p>New msg</p>
                    <textarea value={this.props.communication.newMessageText}
                              onChange={this.handleUpdateNewMsg} />
                    <br/>
                    <button onClick={this.handleNewMsg}>Send</button>
                </div>
            </div>
        );
    }
}

export default Communication;
