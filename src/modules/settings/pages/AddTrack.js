import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@material-ui/core";
import { API } from "../../utils/helper";
import Http from "../../utils/Http";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddTrack({ handleOpen, handleClose, refetch }) {
  const [formValues, setFormValues] = useState({
    code: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues({
        code: "",
        name: "",
        description: "",
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
    API().then((ip) => {
      Http.post(`${ip}/addTrack`, formValues).then((res) => {
        if (res.data.code === 200) {
          handleClose(false);
          refetch();
        }
      });
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
        <DialogTitle>Add New Track</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="code"
            label="Code"
            color="primary"
            type="input"
            fullWidth
            value={formValues.code}
            onChange={handleChange}
          />
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
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="description"
            label="Description"
            color="primary"
            type="input"
            fullWidth
            value={formValues.description}
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
