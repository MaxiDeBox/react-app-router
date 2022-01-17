import React, {useState} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, Routes, NavLink, Switch, Redirect} from "react-router-dom";
import CarDetail from "./CarDetail/CarDetail";

function App() {
  const [state, setState] = useState({
    isLogged: false
  });

  const loginHandle = () => {
    setState({
      isLogged: !state.isLogged
    });
  };

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

      <hr />
      <div style={{textAlign: 'center'}}>
        <h3>Is logged in: {state.isLogged ? 'TRUE' : 'FALSE'}</h3>
        <button onClick={loginHandle}>Login</button>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        { state.isLogged ? <Route path="/about" element={<About />} /> : null }
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:name" element={<CarDetail />} />
        <Route path='*' element={<h1>404 Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
