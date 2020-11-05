import React from 'react';
import toolsImage from '../assets/tools.jpg'

const Index = () => {
  return <div>
          <img src={toolsImage} className="cover-photo" />
          <h3>How the Elmo Safety Cutter Works:</h3>
          <p>
            As band is cut, shock absorber pads engage both ends of cut band while tension energy is
            absorbed automatically by the pads.
          </p>
          <ul>
            <li>
              Using the ELMO Safety Cutter is much less costly than even one single injury to a
              worker's skin or eyes.
            </li>
            <li>
              U.S. Government qualified "Safety Cutters-Doubled-Sided Retaining" (NSN
              #5110-11-771-3732, Spec GGG-C-835)
            </li>
            <li>Ergonomically engineered for easy handling and lower effort.</li>
            <li>Made of forged alloy steel, hardened and tempered for toughness and durability.</li>
            <li>
              Used in all plant areas and facilities handling palletized, rolled or banded material.
              Also used as a standard safety accessory of fork lift trucks.
            </li>
          </ul>
  </div>
}

export default Index;