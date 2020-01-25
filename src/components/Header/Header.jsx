import React, {Component} from 'react';
import logo from './logo.png'
import css from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={css.header}>
                <img src={logo} alt="logo"/>
                <div className={css.info}>Information</div>
            </header>
        );
    }
}

export default Header;
