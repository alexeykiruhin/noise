import React, { Component } from 'react';
import logo from './logo.png';
import Header from './Header';
import Navbar from './Navbar';
import Profile from './Profile';
//import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Navbar />
        <Profile />
      </div>
    );
  }
}

export default App
