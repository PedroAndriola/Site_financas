import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Saiba from './components/Saiba';
import Juros from './components/Juros';
import Recursos from './components/Recursos';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Saiba />
      <Juros />
      <Recursos />
      <Footer />
    </>
  );
}

export default App;
