import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Navbar.scss';

function Navbar() {
  return (
    <div className="App-navbar">
      <ul>
        <li>
          <a href="/" id="logo-text">GeoJokers</a>
        </li>
        <li>
          <AnchorLink href="#home" offset='150'>home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" offset='150'>about</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#blog" offset='150'>blog</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#media" offset='150'>media</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" offset='150'>contact</AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
