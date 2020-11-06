import React from 'react';

const ProductDetail = ({hed, dek, img, body, price, weight, length}) => {
  return (
    <div>
      <h1>{hed}</h1>
      <h3>{dek}</h3>
      <img src={img} className="cover-photo" />
      <p>{body}</p>
      <p>Weighs {weight}, {length} long</p>
      <p><strong>Price USD {price}</strong></p>
      <p>(plus shipping/handling &amp; sales tax)</p>
    </div>
  )
}

export default ProductDetail