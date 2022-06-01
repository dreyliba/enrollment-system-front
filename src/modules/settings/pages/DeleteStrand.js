import React from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slide,
} from "@material-ui/core";

const useStyles = makeStyles({
  alerDelete: {
    textAlign: "center",
  },
  btnHandler: {
    textAlign: "center",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteStrand({
  handleOpen,
  handleClose,
  handleConfirmDelete,
}) {
  const classes = useStyles();
  return (
    <>
      <Dialog
        open={handleOpen}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.alerDelete}>
          <DialogTitle>Message</DialogTitle>
          <DialogTitle style={{ color: "red" }}>
            Are you sure you want to delete this strand?
          </DialogTitle>
        </div>
        <div>
          <DialogActions className={classes.btnHandler}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmDelete}
            >
              Yes
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              No
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}
