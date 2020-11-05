import React from 'react';
import modelCImage from '../assets/modelC.jpeg'

const ModelC = () => {
  return <div>
          <h1>Model C</h1>
          <h2>Designed for the toughest strapping situations</h2>
          <img src={modelCImage} className="cover-photo" />
          <p>Double clamping grips hold the cut strap even when they want to come apart. Includes premium non-slip rubber grips and grade 8 connectors.</p>
          <p>Weight 2lbs., 12" long</p>
          <p><strong>Price USD 299.95</strong><br/>Plus shipping/handling &amps; sales tax.</p>
  </div>
}

export default ModelC;