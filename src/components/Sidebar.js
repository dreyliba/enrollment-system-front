import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Http from "../modules/utils/Http";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  sidebarTitleHolder: {
    marginTop: 20,
  },
  sidebarTitle: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
  },
  nested: {
    marginLeft: theme.spacing(4),
  },
  active: {
    backgroundColor: "#3f51b5",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff",
    },
  },
}));

export default function Sidbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({});
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const isActive = (url) => {
    return location.pathname.includes(url);
  };

  useEffect(() => {
    if (location.pathname.includes("track")) {
      setOpen(true);
    }

    Http.get("/user").then((res) => {
      if (res.data.data) {
        setUser(res.data.data);
      }
    });
  }, [location.pathname]);

  const handleNavigate = (url) => {
    history.push(url);
  };

  const isAdmin = () => {
    return user.roles && user.roles.includes("Admin");
  };

  return (
    // Hold the TopBar

    <div className={classes.root}>
      <CssBaseline />
      {/* Holds the Sidebar */}

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.sidebarTitleHolder}>
          <Typography className={classes.sidebarTitle}>E-System</Typography>
        </div>
        <div className={classes.toolbar} />
        <Divider style={{ marginTop: -50 }} />
        <List>
          <ListItem
            button
            className={isActive("/dashboard") ? classes.active : ""}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => handleNavigate("/dashboard")}
              primary={"Dashboard"}
            />
          </ListItem>
          <ListItem
            button
            className={isActive("/enrollments") ? classes.active : ""}
          >
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => handleNavigate("/enrollments")}
              primary={"Enrollment"}
            />
          </ListItem>
          <ListItem
            button
            className={isActive("/reports") ? classes.active : ""}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => handleNavigate("/reports")}
              primary={"Reports"}
            />
          </ListItem>

          {isAdmin() && (
            <>
              <ListItem
                button
                className={isActive("/users") ? classes.active : ""}
              >
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText
                  onClick={() => handleNavigate("/users")}
                  primary={"Users"}
                />
              </ListItem>
              <ListItem
                button
                onClick={handleClick}
                className={isActive("/settings") ? classes.active : ""}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    className={`${
                      isActive("/settings/track") ? classes.active : ""
                    } ${classes.nested}`}
                  >
                    <ListItemIcon>
                      <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText
                      onClick={() => handleNavigate("/settings/track")}
                      primary="Track"
                    />
                  </ListItem>
                  <ListItem
                    button
                    className={`${
                      isActive("/settings/disability-categories")
                        ? classes.active
                        : ""
                    } ${classes.nested}`}
                  >
                    <ListItemIcon>
                      <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText
                      onClick={() =>
                        handleNavigate("/settings/disability-categories")
                      }
                      primary="Disability Categories"
                    />
                  </ListItem>
                </List>
              </Collapse>
            </>
          )}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
