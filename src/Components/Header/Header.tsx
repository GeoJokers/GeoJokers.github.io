import { Trans } from 'react-i18next';

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
      
      <p>"<Trans i18nKey="first-law" />"</p>
      <p className="author"><Trans i18nKey="first-law-author" /></p>

    </div>
  );
}

export default Header;
