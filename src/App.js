import './App.css';
// import {FirstMain} from './Components/Home/index.js';
import RegistrationForm  from './Components/RegistrationForm/Main/index';
import {Register} from './Logic/Register';

function App() {

  

  let x=new Register("Seller", "Esha", "e98w7r987", 9877777, 98767686, 3243545676);
  
  console.log("Name : ", x.getName());
  console.log("Type : ", x.getuserType());

  return (
    <>
    {/* <FirstMain/> */}
    <RegistrationForm/>
    </>
    

   
    
  );
}

export default App;


