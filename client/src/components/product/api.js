import {Product} from "./model";

async function getProducts(){

    try {
      const response = await fetch("http://127.0.0.1:3000")

      if(!response.ok){
        throw new Error(`Failed to fetch data from the server.Status: ${response.status}`)
      }

      const data = await response.json()

      return data.products.map((product) => new Product(product))

    } catch(error){
      console.error('Error fetching product data:', error)
      throw error
    }
}

export {getProducts}