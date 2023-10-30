import { useState } from 'react'

import Product from './product';
import {Routes,Route } from "react-router-dom";
import Productdetails from './product details';
import { Context } from './context';


function App() {
  const [product,setproduct]=useState([])
  const[details,setdetails]=useState([])
  

  return (
    <>
     <h1 className='text-center'> Product</h1>
     <Context.Provider value={{product,setproduct,details,setdetails}}>
     <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/details' element={<Productdetails/>}/>

      
     </Routes>
     </Context.Provider>
     </>


     


     
  )
}

export default App
