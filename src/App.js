import React,{useState} from 'react';
import './App.css';
 import {FirstMain} from './Components/Home/index.js';
// import RegistrationForm  from './Components/RegistrationForm/Main/index';
// import {Register} from './Logic/Register';
 import {Login}  from './Components/Login/loginIndex.jsx';
 import {AddProductForm} from './Components/AddProduct/prodcutAdd.jsx' 
import {
 
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/productListDisplay/index';
import RegistrationForm from './Components/RegistrationForm/Main/index';
import {MyContext }  from './GlobalContext/context';
function App() {

  
  let CartState=useState([]);
  
  return (
    <>
    <MyContext.Provider value={CartState}>
    <Navbar/>
    
    <Routes>
        <Route path="/" element={<FirstMain/>} />
        <Route path="/registration" element={<RegistrationForm/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/login/addproduct" element={<AddProductForm/>}/>
        <Route path="/login/products" element={<ProductList/>}/>

      </Routes>
      </MyContext.Provider>
   
     {/* <AddProductForm/> */}
    {/* <FirstMain/> */}
    {/* <RegistrationForm/> */}
    {/* <Login/>  */}
    </>
    

   
    
  );
}

export default App;


