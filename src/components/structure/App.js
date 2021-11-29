import '../../resources/css/App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from '../../resources/data/Settings.json';
import Top from '../pages/Top';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

export default function App() {
  const documentRoot = Settings.documentRoot;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ documentRoot + '/' } element={ <Top pageid={ '1' } /> } />
        <Route path={ documentRoot + '/about' } element={ <About pageid={ '2' } /> } />
        <Route path={ documentRoot + '/products' } element={ <Products pageid={ '3' } /> } />
        <Route path={ documentRoot + '/contact' } element={ <Contact pageid={ '4' } /> } />
      </Routes>
    </BrowserRouter>
  );
}