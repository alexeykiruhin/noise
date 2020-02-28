import React from 'react';
import logo from './logo.png'
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let login;
    if (props.resultCode === 1) {
        login = <NavLink to={'/login'}>Login</NavLink>;
    } else if (props.resultCode === 0) {
        login = props.login
    }

    return (
        <header className={css.header}>
            <NavLink to={'/profile'}>
                <img src={logo} alt="logo"/>
            </NavLink>
            <div className={css.loginBlock}>{login}</div>
        </header>
    );
};

export default Header;
