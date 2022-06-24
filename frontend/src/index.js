import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Detail from './components/Detail';
import Feature from './Feature';
import Login from './Login';
import Sign from './components/Sign';

import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/feature" element={<Feature />}/>
        <Route path="/Article/:id" element={<Detail/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Sign" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
