import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-127577148-1');
  ReactGA.pageview('https://javabster.github.io/my-portfolio/');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
