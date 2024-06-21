import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Learn from './pages/Learn';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
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

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Learn />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
