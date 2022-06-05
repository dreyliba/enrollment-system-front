import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { API } from "../utils/helper";
import Http from "../utils/Http";
import ChangePass from "./pages/ChangePass";
import EditProfile from "./pages/EditProfile";

const usestyles = makeStyles({
  root: {
    width: "35%",
    marginTop: 30,
    margin: "0 auto",
  },
  title: {
    backgroundColor: "#4e73df",
    color: "#fff",
    padding: 14,
    borderRadius: 5,
  },
  profile_image: {
    marginTop: 10,
    width: 150,
    height: 150,
    borderRadius: "50%",
    boxShadow: "0 10px 20px -5px",
  },
  img_holder: {
    textAlign: "center",
  },
  admin_text: {
    variant: "h6",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  actionBtns: {
    justifyContent: "center",
  },
});

function Profile() {
  const classes = usestyles();
  const [openEditProfile, setOpenEditProfile] = useState(false);
  const [profileValue, setProfileValue] = useState({});
  const [openChangePass, setOpenChangePass] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    API().then((ip) => {
      Http.get(`${ip}/users`).then((res) => {
        if (res.data) {
          setUser(res.data);
        }
      });
    });
  };
  const handleOpenEditProfile = () => {
    setProfileValue();
    setOpenEditProfile(true);
  };

  const handleOpenChangePass = () => {
    setOpenChangePass(true);
  };

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <div className={classes.title}>
            <Typography variant="h6">Profile</Typography>
          </div>
          {/* <div className={classes.img_holder}>
            <img
              src={user.profile_pic}
              className={classes.profile_image}
              alt="Admin Picture"
            />
          </div> */}
          {/* <Typography className={classes.admin_text}>Admin</Typography> */}
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              {`${user.last_name}, ${user.first_name}` || ""}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              {user.email || ""}
            </Typography>
          </CardContent>
          <CardActions className={classes.actionBtns}>
            <Button
              style={{
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5,
              }}
              color="primary"
              variant="contained"
              onClick={handleOpenEditProfile}
            >
              Edit Profile
            </Button>
            <Button
              style={{
                marginTop: 5,
              }}
              color="secondary"
              variant="contained"
              onClick={handleOpenChangePass}
            >
              Change Password
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <EditProfile
        profileValue={profileValue}
        handleOpen={openEditProfile}
        handleClose={() => setOpenEditProfile(false)}
        refetch={fetchData}
        user={user}
      />
      <ChangePass
        handleOpen={openChangePass}
        handleClose={() => setOpenChangePass(false)}
        userId={user.id}
      />
    </div>
  );
}

export default Profile;
