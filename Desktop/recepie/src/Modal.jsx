import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MultipleSelect from "./drop";

 function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    // axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   }
    // });
  };

  const handleClose = () => {
    setOpen(false);
  };
//USER O POST KRNA HEY TO YAHA SE KREGA
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        KAM KARAU
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Post a Job in our website plz Enter ur details 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="middlename"
            label="middlename"
            type="name"
            fullWidth
            
          />
          <TextField
            autoFocus
            margin="dense"
            id="Job profile"
            label="Job profile"
            type="Job profile"
            fullWidth
          />
             <TextField
            autoFocus
            margin="dense"
            id="Job location"
            label="Job location"
            type="Job location"
            fullWidth
          />
          <MultipleSelect/>
         

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#8b0000 ">
            Cancel
          </Button>
          <Button onClick={handleClose} color="#8b0000 "> 
            Post
          </Button> 
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;