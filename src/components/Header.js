import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Logout from "../modules/login/pages/Logout";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  item: {
    color: "black",
    textDecoration: "none",
  },
  navTitle: {
    display: "flex",
    marginRight: "auto",
  },
  navIconHolder: {},
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openLogout, setOpenLogout] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenLogout = () => {
    setOpenLogout(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.navTitle}>
            <Typography variant="h6" noWrap></Typography>
          </div>
          <div>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
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
              <MenuItem>
                <a href="profile" className={classes.item}>
                  Profile
                </a>
              </MenuItem>
              <MenuItem onClick={handleOpenLogout}>Logout</MenuItem>
            </Menu>
          </div>
          <Logout open={openLogout} handleClose={() => setOpenLogout(false)} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
