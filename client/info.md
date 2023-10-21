1. Create a new local repository for the e-shop-front: 
   - in terminal : navigate to the project directory , in my case cd ... /.../../ REACT-beginner
   - git init (to initialize a new git repository)
   - mkdir e-shop-front ( to create a new directory/folder)
  - cd e-shop-front ( to navigate to the directory created)
  - git init ( to initialize a new git repository in the newly created directory )

2. Create a react app
  - npx create-react-app e-shop-front ( to create a react app)
  - code . (to open the directory in vscode)

3. Install Chrome React Dev Tools extension 
  - done

4. Install react extensions in vscode
  - done

5. Inside the source directory of your app create the folder "shop"
  - done 

6. In the shop folder create the directory "ui" - it will hold the ui layout components
  - done 

7. In the shop folder create "components" it will hold each component
  - done 

8. In the components folder create the "product" folder
  - done

9. In the product folder create the Product.js (which is a module that holds the class for Product-like objects) !!! this is NOT a react component!!!
  -done

10. In the Product class add constructor + properties: id, name, price, make sure you export the class
  - done : 
class Product {
  constructor(id,name,price){
    this.id = id
    this.name = name
    this.price = price
  }
}

export default Product

11. in the product folder create "api.js" which will hold and export a function named getProducts() ... this function will return an Array with 3 literally created Product objects (mimicking the logic that will later load this products from a real backed)
  - done 

12. in the product folder create "ui.js" which will hold a react functional component name "Product", this react component should have a parameter (in props) named - productObject, pay attention - although it has the same name as the class Product - this component is a visual component - meaning - it's there to render the product in the layout!
  - done

13. When the react Product component will initialize - it will get through "props.productObject" an object of type Product (from the product class), and will render the product data according to: h2 - name, p - price and a div for the entire component
  - done

14. In the main app component - load the products using getProducts() and render them using a loop/Array with Product react component
  