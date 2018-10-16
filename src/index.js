import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Homepage from './Components/Homepage';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-127577148-1');
    ReactGA.pageview('./Components/Homepage');
  }

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
