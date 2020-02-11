import React from 'react';
import css from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {

    let path = "/communication/" + props.id;
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;
