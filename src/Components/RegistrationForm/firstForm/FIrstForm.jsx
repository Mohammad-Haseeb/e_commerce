import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Style from './personalinfo.module.css';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const PersonaliNfo = ({submit,setValues,previousValue}) => {

  const classes = useStyles();
  
  return (
    <Formik
      initialValues={previousValue}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
        /* eslint-disable no-useless-escape */
        .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,"Enter valid number")
        .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values) => {
        // console.log("Value", values);
        submit(1)

        setValues(...values);

      }}
    >
      <Form className={`${classes.root}  ${Style.mainContainer}`}   >
        <div className={Style.containerBox}>
          <div>
            <Field
              name="firstName"
              as={TextField}
              helperText={<ErrorMessage name="firstName" />}
              type="text"
              id="standard-basic"
              label="Name"
              variant="filled"
            />
          </div>
          <div>
          <Field
            name="lastName"
            as={TextField}
            helperText={<ErrorMessage name="lastName" />}
            type="text"
            id="standard-basic"
            label="Standard"
            variant="filled"
          />
          </div>
          <div>
            <Field
              name="email"
              as={TextField}
              helperText={<ErrorMessage name="email" />}
              type="email"
              id="standard-basic"
              label="Standard"
              variant="filled"
            />
          </div>

          <button type="submit">Submit</button>
        </div>

      </Form>
     
    </Formik>
  );
};
