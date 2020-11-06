import React from 'react';
import modelCImage from '../assets/modelI.jpeg'
import Detail from '../components/ProductDetail'
const ModelC = () => {
  return <div>
          <Detail
            hed="Model I"
            dek="Industrial grade safety strap cutter"
            img={modelCImage}
            body={"Premium non-slip rubber grips enhance use protection. Grade 8 socket cap screws retain clamp to assembly to body. Hardened axle bolt rigidly holds male and female handles together. For longer reach or greater leverage - cuts through 1.25\" x .050\" bands."}
            price="199.95"
            weight="3.4lbs"
            length={'24.5"'}
          />
  </div>
}

export default ModelC;