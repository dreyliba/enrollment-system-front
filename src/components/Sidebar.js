import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MailIcon from "@material-ui/icons/Mail";
import GroupIcon from "@material-ui/icons/Group";

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
}));

export default function Sidbar() {
  const classes = useStyles();

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
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                window.location.href = "/dashboard";
              }}
              primary={"Dashboard"}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                window.location.href = "/enrollment";
              }}
              primary={"Enrollment"}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                window.location.href = "/student";
              }}
              primary={"Student List"}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                window.location.href = "/report";
              }}
              primary={"Reports"}
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                window.location.href = "/userlist";
              }}
              primary={"Users"}
            />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
