import React, {useState, useEffect} from 'react'
import { getProducts } from '../product/api'

function Catalog(){
  const [products, setProducts] = useState([])
  
  useEffect(() =>{
    const fetchData = async() => {
      try{
        const productsData = await getProducts()
        setProducts(productsData)
      } catch(error){
        console.error("Error fetching product data:", error)
      }
    }
    fetchData()
  }, [])

    return (
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
  );
}

export default Catalog;