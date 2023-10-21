import React from 'react'

function Product({ productObject}) {
  /* console.log(productObject); */
  return(
    <div className='product'>
      <h2>{productObject.name}</h2>
      <p>Price: ${productObject.price}</p>
    </div>
  )
}

export default Product