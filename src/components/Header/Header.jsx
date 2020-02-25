import React, {Component} from 'react';
import logo from './logo.png'
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className={css.header}>
                <NavLink to="/profile">
                    <img src={logo} alt="logo"/>
                </NavLink>
                <div className={css.info}>Information</div>
            </header>
        );
    }
}

export default Header;
