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

function App() {

  function Products() {
    return <h1>Hello Prodcuts</h1>;
  }
  

  
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<FirstMain/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/addproduct" element={<AddProductForm/>}/>
        <Route path="/login/products" element={<Products/>}/>

      </Routes>
   
     {/* <AddProductForm/> */}
    {/* <FirstMain/> */}
    {/* <RegistrationForm/> */}
    {/* <Login/>  */}
    </>
    

   
    
  );
}

export default App;


