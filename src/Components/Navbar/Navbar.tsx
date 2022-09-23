import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Navbar.scss';

function Navbar(props: any) {

  const [navbarSize, setNavbarSize] = useState("big");

  useEffect(() => {
    const handleScroll = () => {
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY < 100) {
        setNavbarSize("big");
      } else {
        setNavbarSize("small");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id={"Navbar-" + navbarSize}>
      <ul>
        <li>
          <a href="/" id="logo-text"><h1>GEO JOKERS</h1></a>
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
