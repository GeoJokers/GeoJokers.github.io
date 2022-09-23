import './App.scss';

import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <div id="App">

      <Background />
      <Navbar />

      <section id="home">
        <Header />
      </section>

      <section id="about">
        <h2>about</h2>
      </section>

      <section id="blog">
        <h2>blog</h2>
      </section>

      <section id="media">
        <h2>media</h2>
      </section>

      <section id="contact">
        <h2>contact</h2>
      </section>

      <Footer />

    </div>
  );
}

export default App;
