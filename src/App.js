
import './App.css';
import React, { Component } from "react";
import TitleSection from "./components/TitleSection";
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Container from './components/Container';
import { Element } from "react-scroll";
import Navbar from "./components/navbar";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <div className="App">
      <Container>
        <ThemeButton />
        <Navbar />
        
        <Element name="title" />
        <TitleSection />
        <Element name= "about" />
        <AboutSection />
        <Element name = "skills"/>
        <Skills />
      </Container>
    </div>
  );
}

export default App;
