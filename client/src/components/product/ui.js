import React from 'react'


function Product({ productObject }) {
  const {
    name,
    image,
    price,
  } = productObject;

  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>
        Price: ${price.amount.toFixed(2)} {price.currency}
      </p>
    </div>
  );
}

export default Product