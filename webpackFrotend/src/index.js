import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Detail from './components/Detail';
import Update from './components/Update';
import Feature from './Feature';
import Login from './Login';
import Sign from './components/Sign';
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
        <Route path="/Update/:id" element={<Update/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Sign" element={<Sign/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


