import React from 'react';
import modelCImage from '../assets/modelC.jpeg'
import Detail from '../components/ProductDetail'
const ModelC = () => {
  return <div>
          <Detail
            hed="Model C"
            dek="Designed for the toughest strapping situations"
            img={modelCImage}
            body={"Double clamping grips hold the cut strap even when they want to come apart. Includes premium non-slip rubber grips and grade 8 connectors."}
            price="229.95"
            weight="2lbs"
            length={'12"'}
          />
  </div>
}

export default ModelC;