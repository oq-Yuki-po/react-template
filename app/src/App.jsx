import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
