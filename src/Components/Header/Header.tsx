import './Header.scss';

import logo from './logo.png';

function Header() {
  return (
    <div id="Header">

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

    </div>
  );
}

export default Header;
