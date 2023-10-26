import React from 'react'
import './App.css';
import Catalog from './components/catalog/productList';

class App extends React.Component {
    render(){
      return(
      <div className='App'>
        <Catalog />
      </div>
    )
    }
  }

export default App;
