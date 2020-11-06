import React from 'react';
import modelCImage from '../assets/modelL.jpeg'
import Detail from '../components/ProductDetail'
const ModelC = () => {
  return <div>
          <Detail
            hed="Model L"
            dek="Long handle safety strap cutter"
            img={modelCImage}
            body={"Similar to the Model E, but with longer handles and foam rubber grips. Grade 8 socket cap screws retain clamp assembly to body. Hardened axle bolt rigidly holds male and female handles together. For longer reach greater leverage - cuts through 1.25\" x .050\" bands."}
            price="134.95"
            weight="3.4lbs"
            length={'24.5"'}
          />
  </div>
}

export default ModelC;