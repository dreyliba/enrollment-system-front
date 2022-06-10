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
import Http from "../../utils/Http";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditCategory({
  handleOpen,
  handleClose,
  refetch,
  values,
}) {
  console.log(values);
  const [formValues, setFormValues] = useState({
    name: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues((prev) => ({
        ...prev,
        name: values.name,
      }));
    }
  }, [handleOpen, values]);

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    Http.put(`/disability-categories/${values.id}`, formValues).then((res) => {
      if (res.data.data) {
        handleClose(false);
        refetch();
      }
    });
  };

  return (
    <div>
      <Dialog open={handleOpen} TransitionComponent={Transition}>
        <DialogTitle>Edit Category</DialogTitle>
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
