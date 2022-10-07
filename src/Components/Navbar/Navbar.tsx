import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Navbar.scss';

function Navbar() {

  const [navbarSize, setNavbarSize] = useState("big");

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setNavbarSize("big");
    } else {
      setNavbarSize("small");
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div id={"Navbar-" + navbarSize}>
      <ul>
        <li>
          <a href="/" id="logo-text">GEO JOKERS</a>
        </li>
        <li>
          <AnchorLink href="#home" offset='0'>home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about" offset='0'>about</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#blog" offset='0'>blog</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#media" offset='0'>media</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact" offset='0'>contact</AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
