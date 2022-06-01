import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const useStyles = makeStyles({
  mainContent: {
    padding: "10px 10px 0px 250px",
  },
});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Sidebar />
      <section className={classes.mainContent}>{children}</section>
    </div>
  );
}

export default Layout;
