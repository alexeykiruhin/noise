import React, {Component} from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

class Dialog extends Component {
    render() {
        let path = "/communication/" + this.props.id;
        return (
            <div className={css.dialog + ' ' + css.active}>
                <NavLink to={path} activeClassName={css.active}>{this.props.name}</NavLink>
            </div>
        );
    }
}

export default Dialog;
