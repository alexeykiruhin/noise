import React, { Component } from 'react';
import  css from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return(
      <nav className={css.nav}>
        <div className={`${css.item} ${css.active}`}>
          <a>Profile</a>
        </div>
        <div className={css.item}>
          <a>Messages</a>
        </div>
        <div className={css.item}>
          <a>News</a>
        </div>
        <div className={css.item}>
          <a>Settings</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
