import React, { Component } from 'react';
import logo from './logo.png'
import  css from './Header.module.css';

class App extends Component {
  render() {
    return(
      <header className={css.Header}>
        <img src={logo} className="logo" alt="logo" />
        <span>Phone number: +123456789</span>
      </header>
    );
  }
}

export default App
