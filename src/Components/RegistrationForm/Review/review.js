import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { RegisterPerson } from "../../../Logic/Main";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";



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
 

  let navigate = useNavigate();

  const classes = useStyles();
  RegisterPerson.setName(values.firstName);
  RegisterPerson.setPhoneNumber(values.phoneNumber);
  RegisterPerson.setEmail(values.email);
  RegisterPerson.setCreditCardNumber(values.CreditCardNumber);
  RegisterPerson.setPassword(values.password);
  RegisterPerson.setUserType(values.status);

  // console.log("Review ", values);
  return (
    <>
      <div className={classes.root}>
        <Paper elevation={10}>
          <p>Name : {values.firstName}</p>
          <p>Phone Number: {values.phoneNumber}</p>
          <p>Email : {values.email}</p>
          <p>Card Number : {values.CreditCardNumber}</p>
          <p>Password : {values.password}</p>
         
         
            <Button variant="contained" color="primary" style={{width:"100px"}}  onClick={()=>{
              RegisterPerson.sendData()
            navigate("/login")

            }}>Confirm</Button>         
               </Paper>
      </div>
    </>
  );
};
