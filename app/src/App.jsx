import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import About from 'components/About/About';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import NoMatch from 'components/NoMatch';
import FeatureProducts from 'components/Products/Feature/FeatureProducts';
import NewProducts from 'components/Products/New/NewProducts';
import Products from 'components/Products/Products';
import Users from 'components/Users/Users';

function App() {
  return (
    <React.Fragment>
      <Header />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route path="new" element={<NewProducts />} />
            <Route path="feature" element={<FeatureProducts />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LocalizationProvider>
    </React.Fragment>
  );
}

export default App;
