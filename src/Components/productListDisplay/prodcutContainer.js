import React,{useContext} from 'react';
import {MyContext} from './../../GlobalContext/context';
import './prodcutContainerStyle.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';

export let  ProdcutContainer=({name,prize,ProdcutSpec,imageProduct})=>{
  const context = useContext(MyContext);

  console.log("ITEM SRC ", imageProduct);
    return (
        <>

<div class="wrapper">
  <div class="container">
    <div class="top">
      <img style={{width:"100%"}} src={imageProduct} alt="item"/>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="details">
          <h1>{name}</h1>
          <p>{prize } pkr</p>

        </div>
        <div class="buy"><Button onClick={()=>{
          let x=context[0];
          x.push({prize:prize,prodcutName:name })
          context[1](x);
          // context[1](...)
          console.log("CONTEXT : ",context[0])
        }}><h6 style={{textAlign:"center"}}>Add to Cart</h6><div style={{display:"flex",justifyContent:"center"}}>{<ShoppingBasketIcon/>}</div></Button></div>
      </div>
      <div class="right">
        <div class="done"><i class="material-icons">done</i></div>
        <div class="details">
          <h1>{name}</h1>
          <p>Added to your cart</p>
        </div>
        <div class="remove"><i class="material-icons">clear</i></div>
      </div>
    </div>
  </div>
  <div class="inside">
    <div class="icon"><i class="material-icons">info_outline</i></div>
    <div class="contents">
      <h3>Description</h3>
      <h4>{ProdcutSpec}</h4>
    </div>
  </div>
</div>
        </>
    )

}