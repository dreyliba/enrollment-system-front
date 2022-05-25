import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TextField } from "@material-ui/core";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const API = process.env.REACT_APP_API_URL;

export default function AddUser({ handleOpen, handleClose, refetch }) {
  const [formValues, setFormValues] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

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
    const token = localStorage.getItem("accessToken");
    axios
      .post(`${API}/addUser`, formValues, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          handleClose(false);
          // window.location.reload();
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
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="first_name"
            label="First Name"
            color="primary"
            type="input"
            fullWidth
            value={formValues.first_name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="middle_name"
            label="Middle Name"
            color="primary"
            type="input"
            fullWidth
            value={formValues.middle_name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="last_name"
            label="Last Name"
            color="primary"
            type="input"
            fullWidth
            value={formValues.last_name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="email"
            label="Email"
            color="primary"
            type="email"
            fullWidth
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="password"
            label="Password"
            color="primary"
            type="password"
            fullWidth
            value={formValues.password}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="confirm_password"
            label="Confirm Password"
            color="primary"
            type="password"
            fullWidth
            value={formValues.confirm_password}
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
