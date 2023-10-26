import React from 'react'
/* import { getProducts } from './shop/components/product/api';
import Product from './shop/components/product/ui'; */
import './App.css';
import Catalog from './components/catalog/productList';

class App extends React.Component {
    render(){
      return(
      <div className='App'>
        <h1>Products List</h1>
        <Catalog />

      </div>
    )
    }
  }


export default App;
