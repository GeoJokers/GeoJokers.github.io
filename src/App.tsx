import { Trans } from 'react-i18next';

import './App.scss';

import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Blog from './Components/Blog';
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
        <h2><Trans i18nKey="about" /></h2>
      </section>

      <section id="blog">
        <h2><Trans i18nKey="blog" /></h2>
        <Blog />
      </section>

      <section id="media">
        <h2><Trans i18nKey="media" /></h2>
      </section>

      <section id="contact">
        <h2><Trans i18nKey="contact" /></h2>
      </section>

      <Footer />

    </div>
  );
}

export default App;
