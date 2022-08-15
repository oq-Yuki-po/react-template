import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
