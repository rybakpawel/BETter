import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Styles/App.min.css';

import MainSite from './Sites/MainSite';

function App() {
  return (
    <Router>
      <MainSite />
    </Router>
  );
}

export default App;
