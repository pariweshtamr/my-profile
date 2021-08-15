import React from 'react';

import {Navigation} from './components/Navbar/Navigation';
import { Header } from './components/Header/Header';

import './App.css';
import { AboutSection } from './components/About/AboutSection';
import { Skills } from './components/Skills/Skills';


function App() {
  return (
    <div className="main">
      <section className="header-section">
      <Navigation />
        <Header />                  
      </section>
      <hr />
      <section className="about-section">
      <AboutSection />
      </section> 
      <hr />
      <section className="skills-section">
      <Skills />
      </section>
    </div>
  );
}

export default App;
