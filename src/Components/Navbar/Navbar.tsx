import './Navbar.scss';

function Navbar() {
  return (
    <div className="App-navbar">
      <ul>
        <li>
          <a href="/#home">home</a>
        </li>
        <li>
          <a href="/#about">about</a>
        </li>
        <li>
          <a href="/#blog">blog</a>
        </li>
        <li>
          <a href="/#media">media</a>
        </li>
        <li>
          <a href="/#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
