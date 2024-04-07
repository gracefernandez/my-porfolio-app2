import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';
import { Routes, Route } from 'react-router-dom';

function App() {

  const title = "My Portfolio";
  return (
    <div className="App">
      <title>{title}</title>
      <NavBar />      
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <AboutMe />
      <Footer /> 
    </div>
  );
}

export default App;
