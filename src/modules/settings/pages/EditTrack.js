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

export default function EditTrack({
  handleOpen,
  handleClose,
  refetch,
  selectedTrackValues,
}) {
  const [formValues, setFormValues] = useState({
    code: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues((prev) => ({
        ...prev,
        code: selectedTrackValues.code,
        name: selectedTrackValues.name,
        description: selectedTrackValues.description,
      }));
    }
  }, [handleOpen, selectedTrackValues]);

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
      .post(`${API}/track/${selectedTrackValues.id}`, formData, {
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
        <DialogTitle>Edit Track</DialogTitle>
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
            onChange={(e) => handleChange("code", e.target.value)}
            value={formValues.code || ""}
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
            onChange={(e) => handleChange("name", e.target.value)}
            value={formValues.name || ""}
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
            onChange={(e) => handleChange("description", e.target.value)}
            value={formValues.description || ""}
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
