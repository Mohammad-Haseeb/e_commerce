import React from 'react';
import  Style from  './index.module.css'
import logo from './logo.jpg';
import emoji from './emoji.png';


export  let FirstMain=()=>{
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