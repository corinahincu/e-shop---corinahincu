import React, {useState, useEffect} from 'react'
import {Product} from '../product/model'
import { getProducts } from '../product/api'

function Catalog(){
  const [products, setProducts] = useState([])
  
  useEffect(() =>{
    const fetchData = async() => {
      try{
        const products = await getProducts()
        setProducts(products)
      } catch(error){
        console.error("Error fetching product data:", error)
      }
    }
    fetchData()
  }, [])

  return(
    <div>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  )
}

export default Catalog;