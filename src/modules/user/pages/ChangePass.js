import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import {
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
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
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const API = process.env.REACT_APP_API_URL;
function ChangePass({ handleOpen, handleClose, userId, userList }) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
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
      .post(`${API}/userUpdatePassword/${userId}`, formValues, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          handleClose(false);
          window.location.href = "/profile";
        }
      });
  };
  return (
    <div>
      <Dialog
        open={handleOpen}
        fullWidth
        maxWidth="sm"
        TransitionComponent={Transition}
        keepMounted
      >
        <Typography className={classes.titleHolder}>Update Password</Typography>
        <CardContent className={classes.contentHolder}>
          <Typography name="Email" type="email">
            {userList.email}
          </Typography>
          <TextField
            variant="outlined"
            name="password"
            type="password"
            label="New Password"
            fullWidth
            margin="dense"
            size="small"
            value={formValues.password}
            onChange={handleChange}
          />

          <TextField
            variant="outlined"
            name="confirm_password"
            type="password"
            label="Confirmed"
            fullWidth
            margin="dense"
            size="small"
            value={formValues.confirm_password}
            onChange={handleChange}
          />
        </CardContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Update
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ChangePass;
