import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

function LogoutDialog({open, handleClose, logout, setLogged}) {

    const handleLogout = async () => {
    try {
        await logout();
        handleClose();
        setLogged(false);
        handleClose;
    } catch (error) {
        console.log(error);
        handleClose;
    }
};
  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="WhatsAppGpt"
        aria-describedby="Logout of WhatsAppGpt"
      >
        <DialogTitle className="items-center bg-black-200 text-secondary border-b-2 border-secondary">
          {`Logout of WhatsAppGpt`}
        </DialogTitle>
        <DialogContent className="bg-black-200 text-secondary border-b-2 border-secondary" >
          <div className="flex flex-col justify-around items-center text-secondary py-10 sm:gap-2 md:gap-10 ">
            <MeetingRoomIcon fontSize="large" />
            <p>Are you sure you would like to logout?</p>
         </div>
        </DialogContent>
        <DialogActions className="bg-black-200 flex justify-center items-center m-auto w-[100%]">
        
          <Button onClick={handleLogout} variant="contained" autoFocus sx={{ background: "#00B700", color: "white", "&:hover": {background: "transparent", color: "#00B700", border: "2px solid #00B700"}, margin: "0 auto"}}>
            Yes
          </Button>
          <Button onClick={handleClose} variant="outlined" autoFocus sx={{ background: "#00B700", color: "white", "&:hover": {background: "transparent", color: "#00B700", border: "2px solid #00B700"}, margin: "0 auto"}}>
            No
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default LogoutDialog