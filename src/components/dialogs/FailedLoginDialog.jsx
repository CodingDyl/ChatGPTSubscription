import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorIcon from '@mui/icons-material/Error';

function FailedLoginDialog({open, handleClose, message}) {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Error"
        aria-describedby="Error Signing In"
        message={message}
      >
        <DialogTitle className="items-center bg-black-200 text-secondary border-b-2 border-secondary">
          {`Something Went Wrong, please try again!`}
        </DialogTitle>
        <DialogContent className="bg-black-200 text-secondary border-b-2 border-secondary">
         <div className="flex flex-col justify-around items-center text-secondary py-10 sm:gap-2 md:gap-10 ">
            <ErrorIcon fontSize="large" />
            <p>{`${message}`}</p>
         </div>
        </DialogContent>
        <DialogActions className="bg-primary flex justify-center items-center m-auto w-[100%]">
          <Button onClick={handleClose} variant="outlined" autoFocus sx={{ background: "#00B700", color: "white", "&:hover": {background: "transparent", color: "#00B700", border: "2px solid #00B700"}}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default FailedLoginDialog