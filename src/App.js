import React from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, Routes, NavLink, Switch, Redirect} from "react-router-dom";
import CarDetail from "./CarDetail/CarDetail";

function App() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) => isActive? 'wfm-active': ''}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              to="/about"
              style={{
                color: 'blue'
              }}>About</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: '/cars',
            }}>Cars</NavLink>
          </li>
        </ul>
      </nav>

      <hr/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:name" element={<CarDetail />} />
        <Route path='*' element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
