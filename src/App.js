import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Learn from './pages/Learn';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles.css';
import Potless from './components/project/Potless';
import Pennypal from './components/project/Pennypal';
import Beevarium from './components/project/Beevarium';
import TableBook from './components/project/TableBook';
import BlockChain from './components/project/BlockChain';

const App = () => {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modal]);

  const openModal = (modalName) => {
    setModal(modalName);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Learn />
      <Projects openModal={openModal} />
      <Contact />
      <Footer />
      {modal === 'Potless' && <Potless onClose={closeModal} />}
      {modal === 'Pennypal' && <Pennypal onClose={closeModal} />}
      {modal === 'Beevarium' && <Beevarium onClose={closeModal} />}
      {modal === 'TableBook' && <TableBook onClose={closeModal} />}
      {modal === 'BlockChain' && <BlockChain onClose={closeModal} />}
    </div>
  );
};

export default App;
