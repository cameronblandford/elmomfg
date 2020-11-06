import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import headerBg from "./assets/header-bg.jpg";
import Contact from './pages/Contact';
import Index from './pages/Index';
import ModelC from './pages/ModelC';
import ModelE from './pages/ModelE';
import ModelI from './pages/ModelI';
import ModelL from './pages/ModelL';

function App() {
  return (
    <div className="app">
      <div className="nav" style={{ backgroundImage: `url("${headerBg}")` }}>
        <div className="nav-inner">
          <h1>Elmo Manufacturing Co., Inc.</h1>
          <h2>Manufacturer of Safety Strap Cutters</h2>
        </div>
      </div>
      <div className="container">
        <div className="body">
          <Switch>
            <Route path="/" component={Index} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/model-c" component={ModelC} exact />
            <Route path="/model-e" component={ModelE} exact />
            <Route path="/model-i" component={ModelI} exact />
            <Route path="/model-l" component={ModelL} exact />
          </Switch>
        </div>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <h2>Products</h2>
          <ul>
            <li>
              <Link to="/model-e">
                <h2>Model E</h2>
              </Link>
              <p>Short handle safety strap cutter</p>
            </li>
            <li>
              <Link to="/model-l">
                <h2>Model L</h2>
              </Link>
              <p>Long handle safety strap cutter</p>
            </li>
            <li>
              <Link to="/model-i">
                <h2>Model I</h2>
              </Link>
              <p>Industrial grade safety strap cutter</p>
            </li>
            <li>
              <Link to="/model-c">
                <h2>Model C</h2>
              </Link>
              <p>Designed for the toughest safety strap situations</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
