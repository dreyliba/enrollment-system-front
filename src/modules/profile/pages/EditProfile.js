import React, { useEffect, useState } from "react";
import Slide from "@material-ui/core/Slide";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { styled } from "@material-ui/core/styles";
import {
  CardContent,
  makeStyles,
  TextField,
  Typography,
  DialogActions,
  Dialog,
  Button,
  IconButton,
} from "@material-ui/core";
import Profile from "../../../assets/images/Profile.jpg";
import axios from "axios";

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

const API = process.env.REACT_APP_API_URL;
function EditProfile({ handleOpen, handleClose, refetch, user }) {
  const classes = useStyles();
  const [imagePreview, setImagePreview] = useState("");
  const [formValues, setFormValues] = useState({
    profile_pic: "",
    last_name: "",
    first_name: "",
    middle_name: "",
    email: "",
  });

  useEffect(() => {
    if (handleOpen) {
      setImagePreview("");
      if (user.profile_pic) {
        setImagePreview(user.profile_pic);
      }
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

  const Input = styled("input")({
    display: "none",
  });

  const handleSubmit = () => {
    const token = localStorage.getItem("accessToken");

    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    axios
      .post(`${API}/updateUser/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          handleClose(false);
          refetch();
        }
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview("");
    }

    setFormValues((prev) => ({
      ...prev,
      profile_pic: file,
    }));
  };

  return (
    <div>
      <Dialog open={handleOpen} TransitionComponent={Transition} keepMounted>
        <Typography className={classes.titleHolder}>Edit Profile</Typography>
        <div className={classes.img_holder}>
          <img
            className={classes.profile_image}
            src={imagePreview ? imagePreview : Profile}
            alt="PROFILE"
          />
        </div>

        <div className={classes.cam_holder}>
          <label htmlFor="icon-button-file">
            <Input
              accept="img/*"
              id="icon-button-file"
              type="file"
              onChange={handleFileChange}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <AddAPhotoIcon />
            </IconButton>
          </label>
        </div>
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
