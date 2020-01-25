import React, { Component } from 'react';
import css from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return(
      <nav className={css.nav}>
        <div className={`${css.item} ${css.active}`}>
          <p>Profile</p>
        </div>
        <div className={css.item}>
          <p>Messages</p>
        </div>
        <div className={css.item}>
          <p>News</p>
        </div>
        <div className={css.item}>
          <p>Settings</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
