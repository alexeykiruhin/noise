import React, { Component } from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <nav className={css.nav}>
        <div className={css.item}>
          <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/communication" activeClassName={css.active}>Communication</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/news" activeClassName={css.active}>News</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/users" activeClassName={css.active}>Users</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
