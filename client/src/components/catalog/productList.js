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








  /* useEffect(() =>{
    const fetchData = async() => {
      try{
        const products = await getProducts()
        setProducts(products)
      } catch(error){
        console.error("Error fetching product data:", error)
      }
    }
    fetchData()
  }, []) */

    /* return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p>
              ${product.money.amount.toFixed(2)} {product.money.currency}
            </p>
          </li>
        ))}
      </ul>
    </div>
  ); */

}
export default Catalog;