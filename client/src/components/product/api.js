import Product from "./Product";
/* 
const product1 = new Product(1, "CD", 15.99)
const product2 = new Product(2, "Headphones", 45.99)
const product3 = new Product(3, "Boom Box", 325.99)

function getProducts() {
  return [product1, product2, product3]
}
 */

function getProducts(){

  const products = [
    {id:0, name: "CD", price: 15.99},
    {id:1, name: "Headphones", price: 45.99},
    {id:2, name: "Boom Box", price: 325.99}
  ]


return products.map((product) => {
  return new Product(product);
})

}

export {getProducts}