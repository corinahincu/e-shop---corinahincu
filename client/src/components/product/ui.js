import React from 'react'


function Product({ productObject }) {
  const {
    name,
    image,
    money: { amount, currency },
  } = productObject;

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Amount: {amount}</p>
      <p>Currency: {currency}</p>
      <img src={image}  alt=''/>
    </div>
  );
}

export default Product