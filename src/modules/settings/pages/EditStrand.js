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
import { API } from "../../utils/helper";
import Http from "../../utils/Http";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditStrand({
  handleOpen,
  handleClose,
  refetch,
  selectedStrandValues,
}) {
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues((prev) => ({
        ...prev,
        name: selectedStrandValues.name,
        description: selectedStrandValues.description,
      }));
    }
  }, [handleOpen, selectedStrandValues]);

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    API().then((ip) => {
      Http.post(`${ip}/strand/${selectedStrandValues.id}`, formData).then(
        (res) => {
          if (res.data.code === 200) {
            handleClose(false);
            refetch();
          }
        }
      );
    });
  };

  return (
    <div>
      <Dialog open={handleOpen} TransitionComponent={Transition}>
        <DialogTitle>Edit Strand</DialogTitle>
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
