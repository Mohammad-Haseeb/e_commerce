import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { RegisterPerson } from "../../../Logic/Main";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      padding: theme.spacing(8),
    },
  },
}));
export let Review = ({ submit, values }) => {
 


  const classes = useStyles();
  RegisterPerson.setName(values.firstName);
  RegisterPerson.setPhoneNumber(values.phoneNumber);
  RegisterPerson.setEmail(values.email);
  RegisterPerson.setCreditCardNumber(values.CreditCardNumber);
  RegisterPerson.setPassword(values.password);
  RegisterPerson.setUserType(values.status);

  console.log("Review ", values);
  return (
    <>
      <div className={classes.root}>
        <Paper elevation={10}>
          <p>Name : {values.firstName}</p>
          <p>Phone Number: {values.phoneNumber}</p>
          <p>Email : {values.email}</p>
          <p>Card Number : {values.CreditCardNumber}</p>
          <p>Password : {values.password}</p>
          <p>Statis : {}</p>
          <button onClick={(_) => submit(0)}>Previous</button>
         
            <button onClick={()=>{
              RegisterPerson.sendData()
            }}>Confirm</button>         
               </Paper>
      </div>
    </>
  );
};
