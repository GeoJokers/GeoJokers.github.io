import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="mailto:info@geojokers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@geojokers.com
        </a>
      </header>
    </div>
  );
}

export default App;
