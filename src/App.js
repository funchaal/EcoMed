import React from 'react'
import './App.css'
import Header from './components/Header.js'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Local from './components/pages/Local';
import Chating from './components/pages/Chating';

function App() {
  document.title = "EcoMed"
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <About/>
        <Local/>
        <Chating/>
      </main>
    </div>
  );
}

export default App;
