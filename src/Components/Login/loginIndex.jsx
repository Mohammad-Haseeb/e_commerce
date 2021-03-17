import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ForgetDialog from "../forgetPassword/forgetIndex"; 
import Style from "./login.module.css";
import {login} from './../../Logic/Main';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
}));


export let Login = () => {
  const classes = useStyles();
  const email = useRef();
  const password = useRef();
  let navigate = useNavigate();
  let handleSubmit = async  (e) => {
    e.preventDefault();
    login.setEmail(email.current.value);
    login.setPassword(password.current.value);
    let redirect=await login.reuslt;
    console.log("Redirect : ",redirect);
      if(redirect !==undefined){
     navigate(`/login/${await redirect}`)
      }
      else{
     navigate(`/login/`)

      }
      
    //    alert("Not found");
    //  }
    //  else{
    //    alert("Found");
    //  }
    // console.log(email.current.value);
    // console.log(password.current.value);
  };
  return (
    <>
      <h1 className={`${Style.h1} `}>Dukan.pk</h1>
      <div className={` ${classes.root}`}>
        <Paper elevation={9} className={`${Style.MainLoginConainer}`}>
          <h1 className={Style.loginHeading}>Login</h1>
          <form
             
            onSubmit={handleSubmit}
            autoComplete="on"
          >
            <div className={`${Style.formsStyling}`}>
              <div>
                <TextField
                  id="email"
                  inputRef={email}
                  type="email"
                  label="Email"
                  style={{width:"90%"}}

                  variant="filled"
                  required
                />
              </div>
              <div>
                {" "}
                <TextField
                  id="passwrod"
                  inputRef={password}
                  type="password"
                  label="Password"
                  style={{width:"90%"}}
                  variant="filled"
                  required
                />
              </div>
              <div style={{marginLeft:"35%"}}>
                <Button type="submit" variant="contained" color="primary">Confirm</Button>
              </div>
              <div style={{marginLeft:"25%"}}>
                 <ForgetDialog/>
              </div>
            </div>
            
          </form>


        </Paper>
      </div>
    </>
  );
};
