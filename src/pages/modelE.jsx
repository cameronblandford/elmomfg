import React from 'react';
import modelCImage from '../assets/modelE.jpg'
import Detail from '../components/ProductDetail'
const ModelC = () => {
  return <div>
          <Detail
            hed="Model C"
            dek="Short handle safety strap cutter"
            img={modelCImage}
            body={"Cuts plastic and steel straps safety, retaining both sides to prevent injury. One hand operation. Cuts through 1.25\" x .035\" bands."}
            price="84.95"
            weight="2lbs"
            length={'12"'}
          />
  </div>
}

export default ModelC;