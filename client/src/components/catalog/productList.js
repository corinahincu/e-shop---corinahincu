import React, {useState, useEffect} from 'react'
import { getProducts } from '../product/api'
import {Product} from '../product/ui'

function Catalog(){
  const [products, setProducts] = useState([])

  useEffect( () => {
    async function fetchData(){
      try {
        let response = await getProducts();
        console.log(response)
        setProducts(response);
        console.log(response);
      } catch (error) {
        console.log("Error: ", error);
      }
    } 
    fetchData()
  },[])
  
  return (
    <ul>
      {products && products.map(product => (
          <li key={product.id}>
            <Product key={product.id} productObject={product} />
          </li>
        ))}
    </ul>
  );

}
export default Catalog;