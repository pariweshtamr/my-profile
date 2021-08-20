import React from 'react';

import { Header } from './components/Header/Header';
import { AboutSection } from './components/About/AboutSection';
import { Skills } from './components/Skills/Skills';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { MainLayout } from './components/Layout/MainLayout';

function App() {
  return (
    <Router>
      <Switch> 
    <div className="main">
      <MainLayout>      
      <Route exact path="/" children={<Header />}></Route>          
      <Route exact path="/about" children={<AboutSection />}></Route> 
      <Route exact path="/skills" children={<Skills />}></Route>
      <Route exact path="/projects" children={<Project />}></Route>
      <Route exact path="/contact" children={<Contact />}></Route>
      </MainLayout>   
    </div>
    <Route path="/" children={<Header />}></Route>
    </Switch>
    </Router>
  );
}

export default App;
