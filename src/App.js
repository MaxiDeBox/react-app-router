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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>
        </ul>
      </nav>

      <hr/>
      <Routes>
        <Route exact path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>

      {/*<About />*/}

      {/*<Cars />*/}
    </div>
  );
}

export default App;
