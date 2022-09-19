import './Header.scss';

import logo from './logo.png';

function Header() {
  return (
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
  );
}

export default Header;
