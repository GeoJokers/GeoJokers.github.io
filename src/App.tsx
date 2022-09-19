import React from 'react';

import './App.scss';

import background from './background.png';
import logo from './logo.png';

function App() {
  return (
    <div className="App">

      <img src={background} className="App-background" alt="background" />

      <header className="App-header">

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>

        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.geojokers.com
        </a>

        <a
          className="App-link"
          href="mailto:info@geojokers.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@geojokers.com
        </a>

      </header>
      <footer>
        <p>
          © 2022 GeoJokers
        </p>
      </footer>
    </div>
  );
}

export default App;
