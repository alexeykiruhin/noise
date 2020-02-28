import React, {Component} from 'react';
import logo from './logo.png'
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

class Header extends Component {

    render() {
        let login;
        if (this.props.resultCode === 1){
            login = <NavLink to={'/login'}>Login</NavLink>;
        } else if(this.props.resultCode === 0) {
            login = this.props.login
        }
        return (
            <header className={css.header}>
                <NavLink to={'/profile'}>
                    <img src={logo} alt="logo"/>
                </NavLink>
                <div className={css.loginBlock}>{login}</div>
            </header>
        );
    }
}

export default Header;
