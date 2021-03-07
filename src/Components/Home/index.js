import React from 'react';
import  Style from  './index.module.css'
import logo from './logo.jpg';
import emoji from './emoji.png';
import Button from '@material-ui/core/Button';



export  let FirstMain=()=>{
    return(
        <>
          <FirstComponent/>
          <div className={Style.RegisterButton}>
          <RegisterBtn/>
               </div>
        </>
    );
}

let FirstComponent=()=>{
    return(
        <>
        <div className={Style.Main}>
           <div className={Style.FirstMain}>
               <h1>Dukan.pk</h1>
               <div>
               <p>We'll provide you everything under one umbrella</p>
                  <img src={emoji} alt="emoji" className={Style.emoji} />
                </div>
           </div>
           <div className={Style.SecondMain}>
               <img src={logo}  alt="logo" />
           </div>

        </div>
        </>
    );
}

let  RegisterBtn=()=>{
   return(
       <>
        <Button variant="contained" className={Style.rbuton} 
         style={{ backgroundImage:
      'linear-gradient( 986deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'}}>
        Registration
    </Button>
       </>
   );
}