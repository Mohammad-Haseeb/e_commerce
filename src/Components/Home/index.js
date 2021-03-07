import React from 'react';
import  './index.css'
import logo from './logo.jpg';
import emoji from './emoji.png';


export  let FirstMain=()=>{
    return(
        <>
        <div className="Main">
           <div className="FirstMain">
               <h1>Dukan.pk</h1>
               <div>
               <p>We'll provide you everything under one umbrella</p>
                  <img src={emoji} alt="emoji" className="emoji" />
                </div>
           </div>
           <div className="SecondMain">
               <img src={logo}  alt="logo" />
           </div>

        </div>

        </>
    );
}