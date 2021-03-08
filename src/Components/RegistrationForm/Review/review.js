import React from 'react';
export  let Review=({values})=>{
    console.log("Review ", values);
    return(
        <>
         <p>Name : {values.firstName}</p>
         <p>Phone Number: {values.phoneNumber}</p>
         <p>Email : {values.email}</p>
         <p>Card Number : {values.CreditCardNumber}</p>
          <p>Password : {values.password}</p>
          <p>Statis : Buyer</p>
        </>
    );
}