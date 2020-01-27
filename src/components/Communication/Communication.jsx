import React, {Component} from 'react';
import css from './Communication.module.css';
import { NavLink } from 'react-router-dom';
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";

class Communication extends Component {
    render() {
        return (
            <div className={css.communication}>
                <Dialogs/>
                <Messages/>
            </div>
        );
    }
}

export default Communication;
