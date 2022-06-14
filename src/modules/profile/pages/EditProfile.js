import React, { useEffect, useState } from "react";
import Slide from "@material-ui/core/Slide";
import {
  CardContent,
  makeStyles,
  TextField,
  Typography,
  DialogActions,
  Dialog,
  Button,
} from "@material-ui/core";
import Http from "../../utils/Http";

const useStyles = makeStyles({
  titleHolder: {
    variant: "h6",
    margin: "14px 0px 0px 20px",
    fontSize: 20,
  },
  contentHolder: {
    width: "90%",
    margin: "0 auto",
  },
  profile_image: {
    marginTop: 10,
    width: 150,
    height: 150,
    borderRadius: "50%",
    boxShadow: "0 10px 15px -5px",
  },
  img_holder: {
    textAlign: "center",
  },
  cam_holder: {
    position: "absolute",
    top: "34%",
    left: "52%",
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditProfile({ handleOpen, handleClose, refetch, user }) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    profile_pic: "",
    last_name: "",
    first_name: "",
    middle_name: "",
    email: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setFormValues((prev) => ({
        ...prev,
        profile_pic: user.profile_pic,
        last_name: user.last_name,
        first_name: user.first_name,
        middle_name: user.middle_name,
        email: user.email,
      }));
    }
  }, [handleOpen, user]);

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

    Http.post(`/user/${user.id}/update`, formData).then((res) => {
      if (res.data) {
        handleClose(false);
        refetch();
      }
    });
  };

  return (
    <div>
      <Dialog open={handleOpen} TransitionComponent={Transition} keepMounted>
        <Typography className={classes.titleHolder}>Edit Profile</Typography>
        <CardContent className={classes.contentHolder}>
          <TextField
            variant="outlined"
            label="Last Name"
            fullWidth
            margin="dense"
            size="small"
            type="input"
            onChange={(e) => handleChange("last_name", e.target.value)}
            value={formValues.last_name || ""}
          />
          <TextField
            variant="outlined"
            label="First Name"
            fullWidth
            margin="dense"
            size="small"
            type="input"
            onChange={(e) => handleChange("first_name", e.target.value)}
            value={formValues.first_name || ""}
          />
          <TextField
            variant="outlined"
            label="Middle Name"
            fullWidth
            margin="dense"
            size="small"
            type="input"
            onChange={(e) => handleChange("middle_name", e.target.value)}
            value={formValues.middle_name || ""}
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            fullWidth
            margin="dense"
            size="small"
            onChange={(e) => handleChange("email", e.target.value)}
            value={formValues.email || ""}
          />
        </CardContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditProfile;
