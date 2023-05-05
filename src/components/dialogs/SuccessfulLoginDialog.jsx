import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VerifiedIcon from '@mui/icons-material/Verified';

function SuccessfulLoginDialog({open, handleClose, user}) {
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="WhatsAppGpt"
        aria-describedby="Welcome to WhatsAppGpt"
        user={user}
      >
        <DialogTitle className="flex flex-col justify-between py-10 px-10 bg-primary">
          {`Welcome to WhatsAppGpt, ${user}!`}
        </DialogTitle>
        <DialogContent>
            <VerifiedIcon className="secondary"/>
          <DialogContentText className="text-[20px] text-secondary">
            You have successfully signed up in!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default SuccessfulLoginDialog