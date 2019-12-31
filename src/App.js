import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Footer, NavBar, Hero, Experience } from 'components'
import 'assets/styles/index.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
