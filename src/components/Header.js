import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "../assets/css/main/user.css";
import "../assets/css/dashboard/dashboard.css";
import AlertLogout from "../../src/modules/event/pages/AlertLogout";
import Profile from "../modules/event/pages/Profile";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openLogout, setOpenLogout] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenLogout = () => {
    setOpenLogout(true);
  };
  const handleOpenProfile = () => {
    setOpenProfile(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <a id="dashboard" href="/dashboard">
              QR Base Attendance Tracking System
            </a>
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <a href="users" id="user">
                Users
              </a>
              <MenuItem onClick={handleOpenLogout}>Logout</MenuItem>
            </Menu>
          </div>
          <AlertLogout
            open={openLogout}
            handleClose={() => setOpenLogout(false)}
          />
          <Profile
            open={openProfile}
            handleClose={() => setOpenProfile(false)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
