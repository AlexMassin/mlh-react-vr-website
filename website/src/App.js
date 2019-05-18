import React from 'react';
import logo from './logo.svg';
import { Button } from 'semantic-ui-react'
import './App.css';
import VacationImageCard from './destinations';

function App() {
  return (
    <div className="App">
     <VacationImageCard/>
      <header className="App-header">
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
      </header>

    </div>
  );
}

export default App;
