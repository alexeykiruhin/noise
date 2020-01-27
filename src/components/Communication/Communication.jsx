import React, {Component} from 'react';
import css from './Communication.module.css';
import { NavLink } from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

class Communication extends Component {
    constructor(props) {
        super(props);
        this.messages = props.messages;
        this.names = props.names;
    }

    render() {
        return (
            <div className={css.communication}>
                <Dialogs names={this.names}/>
                <Messages messages={this.messages}/>
            </div>
        );
    }
}

export default Communication;
