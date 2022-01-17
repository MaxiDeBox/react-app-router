import React from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, Routes, NavLink} from "react-router-dom";

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
        <Route exact path="/" element={<h1>Home Page</h1>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
