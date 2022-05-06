import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work In Progress, please take a look at my LinkedIn Account
        </p>
        <p>
          Clic or Scan
        </p>
        <ArrowDownwardIcon fontSize='large' />
        <a href='https://www.linkedin.com/in/aroun-radjavelou/'>
          <img
            src='./linkedin.png'
            alt='QR Code' />
        </a>
      </header>
    </div>
  );
}

export default App;
