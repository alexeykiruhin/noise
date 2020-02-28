import React, {Component} from 'react';
import logo from './logo.png'
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        let login;
        if (this.props.resultCode === 1){
            login = <div className={css.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>;
        }
        return (
            <header className={css.header}>
                <NavLink to={'/profile'}>
                    <img src={logo} alt="logo"/>
                </NavLink>
                {login}
            </header>
        );
    }
}

export default Header;
