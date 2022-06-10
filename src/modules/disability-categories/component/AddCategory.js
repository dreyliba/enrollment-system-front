import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@material-ui/core";
import Http from "../../utils/Http";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddCategory({ handleOpen, handleClose, refetch }) {
  const [formValues, setFormValues] = useState({
    name: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues({
        name: "",
      });
    }
  }, [handleOpen]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    Http.post(`/disability-categories`, formValues).then((res) => {
      if (res.data.data) {
        handleClose(false);
        refetch();
      }
    });
  };

  return (
    <div>
      <Dialog
        open={handleOpen}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="name"
            label="Name"
            color="primary"
            type="input"
            fullWidth
            value={formValues.name}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
