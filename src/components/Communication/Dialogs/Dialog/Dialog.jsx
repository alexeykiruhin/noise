import React, {Component} from 'react';
import css from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.id = props.id;
    }
    render() {
        return (
            <div className={css.dialog + ' ' + css.active}>
                <NavLink to={"/communication/" + this.id} activeClassName={css.active}>{this.name}</NavLink>
            </div>
        );
    }
}

export default Dialog;
