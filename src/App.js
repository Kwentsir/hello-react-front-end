import React from 'react';
import logo from './logo.svg';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { Greeting } from './features/greeting/Greeting';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
