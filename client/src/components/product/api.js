import {Product} from "./model";

async function getProducts(){

    try {
      const response = await fetch("http://localhost:3000/");

      if(!response.ok){
        throw new Error(`Failed to fetch data from the server.Status: ${response.status}`)
      }

      const data = await response.json()

      if (!data || !Array.isArray(data.products)) {
        console.log("Data received from the server:", data);
        throw new Error("API did not return an array of products.")
      }

      return data.products.map(product => {
        return new Product(product)
      })
      
    /*   return data.map((product) => 
        new Product(product)
      ) */

    } catch(error){
      console.error('Error fetching product data:', error)
      throw error
    }
}

export {getProducts}