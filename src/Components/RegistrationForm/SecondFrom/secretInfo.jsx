

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Style from '../firstForm/personalinfo.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';




const selectStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 260,
    },
    selectEmpty: {
      marginTop: theme.spacing(3),
    },
  }));

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const SensitiveInf0 = ({submit,setValues,previousValue}) => {
   const SelectStyles=useStyles();
  const classes = useStyles();
  const cardExpression= "^4[0-9]{12}(?:[0-9]{3})?$";
  const password=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

  return (
    <Formik
      initialValues={previousValue}
      validationSchema={Yup.object({
      
          CreditCardNumber: Yup.string()
        /* eslint-disable no-useless-escape */
        .matches(cardExpression,"Enter valid number")
        .required("Required"),
        password: Yup.string()
        .matches(password,"password must have one lower , upper case character , special  symbol, number")
        .required("Required"),
        status:Yup.string()
        .required("Required")
      })}
      onSubmit={(values) => {
         console.log("Value", values);
        submit(2)

        setValues({...values,...previousValue});

      }}
    >
      <Form className={`${classes.root}  ${Style.mainContainer}`}   >
        <div className={Style.containerBox}>
          
          <div>
          <Field
            name="CreditCardNumber"
            as={TextField}
            helperText={<ErrorMessage name="CreditCardNumber" />}
            type="text"
            id="standard-basic"
            label="Card Number"
            variant="filled"
          />
          </div>
          <div>
            <Field
              name="password"
              as={TextField}
              helperText={<ErrorMessage name="password" />}
              type="password"
              id="standard-basic"
              label="Password"
              variant="filled"
            />

          </div>
          
          <FormControl variant="filled" className={SelectStyles.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        < Field as ={Select}
        style={{margin: '6px', padding: '20px'}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="status"
          
           required
        >
          
          <MenuItem value={"Buyer"}>Ten</MenuItem>
          <MenuItem value={"Seller"}>Twenty</MenuItem>
         
        </ Field>
      </FormControl>
         

 

          
         
          <button type="submit">Submit</button>
        </div>

      </Form>
     
    </Formik>
  );
};
