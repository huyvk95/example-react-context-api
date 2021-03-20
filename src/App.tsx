import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComponent from './CounterComponent';
import {CounterProvide} from './CouterContext';

function App() {
  return (
    <div className="App">
      <CounterProvide>
        <CounterComponent />
      </CounterProvide>
    </div>
  );
}

export default App;
