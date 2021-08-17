import React from 'react';

import {Navigation} from './components/Navbar/Navigation';
import { Header } from './components/Header/Header';
import { AboutSection } from './components/About/AboutSection';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="main">
      <div className="nav-section">
      <Navigation />                
      </div>
      <section className="header-section">
      <Header />  
      </section>
      <hr />
      <section className="about-section" id="about">
      <AboutSection />
      </section> 
      <hr />
      <section className="skills-section" id="skills">
      <Skills />
      </section>
      <hr />
      <section className="project-section" id="projects">
        <Project />
      </section>
      <hr />
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
