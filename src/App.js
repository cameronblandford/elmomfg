import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="nav">
        <div className="nav-inner">
          <h1>Elmo Manufacturing Co., Inc.</h1>
          <h2>Manufactuerer of Safety Strap Cutters</h2>
        </div>

      </div>
      <div className="container">
        <div className="body">
          <img />
          <h3>How the Elmo Safety Cutter Works</h3>
          <p>As band is cut, shock absorber pads engage both ends of cut band while tension energy is absorbed automatically by the pads.</p>
          <ul>
            <li>Using the ELMO Safety Cutter is much less costly than even one single injury to a worker's skin or eyes.</li>
            <li>U.S. Government qualified "Safety Cutters-Doubled-Sided Retaining" (NSN #5110-11-771-3732, Spec GGG-C-835)</li>
            <li>Ergonomically engineered for easy handling and lower effort.</li>
            <li>Made of forged alloy steel, hardened and tempered for toughness and durability.</li>
            <li>Used in all plant areas and facilities handling palletized, rolled or banded material. Also used as a standard safety accessory of fork lift trucks.</li>
          </ul>
        </div>
        <div className="sidebar">
          <a href="/contact">Contact Us</a>
          <h2>Products</h2>
          <ul>
            <li>
              <a href="/model-e"><h2>Model E</h2></a>
              <p>Short handle safety strap cutter</p>
            </li>
            <li>
              <a href="/model-l"><h2>Model L</h2></a>
              <p>Long handle safety strap cutter</p>
            </li>
            <li>
              <a href="/model-i"><h2>Model I</h2></a>
              <p>Industrial grade safety strap cutter</p>
            </li>
            <li>
              <a href="/model-c"><h2>Model C</h2></a>
              <p>Designed for the toughest safety strap situations</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
