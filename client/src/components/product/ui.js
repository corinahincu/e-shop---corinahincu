import React from 'react'

export function Product({ productObject }) {
  const {
    name,
    image,
    money,
  } = productObject;

  return (
    <div className="product">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <p>
        {money.amount.toFixed(2)} {money.currency}
      </p>
    </div>
  );
}
