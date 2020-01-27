import React, {Component} from 'react';
import css from './Messages.module.css';
import { NavLink } from 'react-router-dom';
import Message from "./Message/Message";

class Messages extends Component {
    render() {
        return (
            <div className={css.messages}>
                <Message message='Равным образом реализация намеченных'/>
                <Message message='Плановых заданий играет важную роль'/>
                <Message message='В формировании форм развития.'/>
                <Message message='С другой стороны реализация'/>
                <Message message='Намеченных плановых заданий требуют.'/>
            </div>
        );
    }
}

export default Messages;
