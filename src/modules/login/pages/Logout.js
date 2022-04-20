import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Dialog, DialogActions, DialogTitle, Slide } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDelete({ open, handleClose }) {
  const [openLogout, setOpenLogout] = useState(false);

  const handleLogout = () => {
    setOpenLogout(true);
  };
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <>
      <Dialog open={open} TransitionComponent={Transition} keepMounted>
        <DialogTitle id="alert-dialog-slide-title">
          {"Are you sure you want to logout?"}
        </DialogTitle>
        <DialogActions>
          <Button color="secondary" open={openLogout} onClick={handleLogout} />
          <Button
            onClick={logOut}
            size="small"
            variant="contained"
            color="secondary"
          >
            Logout
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
