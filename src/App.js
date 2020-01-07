import React from 'react';
import './App.css';
import { Footer, NavBar, Hero, Experience } from 'components'
import 'assets/styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// https://zunaidaslam.com/about.html

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
