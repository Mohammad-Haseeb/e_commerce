import React,{useRef} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";

export default function ForgetDialog() {
  const [open, setOpen] = React.useState(false);
  const email = useRef()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  const handleSubmit=(e)=>{
          e.preventDefault();
          console.log(email.current.value);
    setOpen(false);

  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Forget Password
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Forget Password"}</DialogTitle>
        <form onSubmit={handleSubmit}>
                 <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField
                 
                  type="email"
                  inputRef={email}
                  label="Email"
                  style={{width:"90%"}}
                  variant="filled"
                  required
                />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
               <Button onClick={handleClose} color="primary" autoFocus>Close </Button>
          <Button  type="submit" color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
        </form>

      </Dialog>
    </div>
  );
}
