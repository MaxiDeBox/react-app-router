import React from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/cars">Машины</a>
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
