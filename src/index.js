import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import BodyPage2 from './page2/page2'
import BodyPage1 from './page1/pag1'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>} path='/'>
      <Route element={<BodyPage1/>} index />
      <Route path='/amallar' element={<BodyPage2/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


