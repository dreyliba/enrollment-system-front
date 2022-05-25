import React, { useEffect, useState } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@material-ui/core";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const API = process.env.REACT_APP_API_URL;

export default function EditUser({
  handleOpen,
  handleClose,
  refetch,
  selectedUserValues,
}) {
  const [formValues, setFormValues] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues((prev) => ({
        ...prev,
        first_name: selectedUserValues.first_name,
        middle_name: selectedUserValues.middle_name,
        last_name: selectedUserValues.last_name,
        email: selectedUserValues.email,
      }));
    }
  }, [handleOpen, selectedUserValues]);

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("accessToken");

    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    axios
      .post(`${API}/user/${selectedUserValues.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          handleClose(false);
          refetch();
        }
      });
  };

  return (
    <div>
      <Dialog open={handleOpen} TransitionComponent={Transition}>
        <DialogTitle>Edit User</DialogTitle>
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
            onChange={(e) => handleChange("first_name", e.target.value)}
            value={formValues.first_name || ""}
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
            onChange={(e) => handleChange("middle_name", e.target.value)}
            value={formValues.middle_name || ""}
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
            onChange={(e) => handleChange("last_name", e.target.value)}
            value={formValues.last_name || ""}
          />
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            name="email"
            label="Email"
            color="primary"
            type="input"
            fullWidth
            onChange={(e) => handleChange("email", e.target.value)}
            value={formValues.email || ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Update
          </Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
