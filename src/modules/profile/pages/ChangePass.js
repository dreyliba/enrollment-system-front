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
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ChangePass({ handleOpen, handleClose, userId }) {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

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
    Http.post(`/userUpdatePassword/${userId}`, formValues, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.code === 200) {
          handleClose(false);
          window.location.href = "/profile";
        }
      })
      .catch((error) => {
        setError(error.response.data.errors);
      });
  };
  return (
    <div>
      <Dialog open={handleOpen} TransitionComponent={Transition} keepMounted>
        <Typography className={classes.titleHolder}>Change Password</Typography>
        <CardContent className={classes.contentHolder}>
          <TextField
            name="password"
            type="password"
            label="New Password"
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            value={formValues.password}
            onChange={handleChange}
          />
          {error.password && (
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="text-danger"
            >
              {error.password.map((err) => {
                return err;
              })}
            </Typography>
          )}
          <TextField
            name="confirmPassword"
            variant="outlined"
            type="password"
            label="Confirmed"
            fullWidth
            margin="dense"
            size="small"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword &&
            error.confirmPassword?.map((error) => {
              return (
                <small className="text-danger">
                  <br></br>
                  {error}
                </small>
              );
            })}
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
