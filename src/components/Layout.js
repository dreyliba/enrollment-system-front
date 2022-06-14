import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import Http from "../modules/utils/Http";
import Header from "./Header";
import Sidebar from "./Sidebar";

const useStyles = makeStyles({
  mainContent: {
    padding: "10px 10px 0px 250px",
  },
});

function Layout({ children }) {
  const classes = useStyles();
  const [user, setUser] = React.useState({});

  useEffect(() => {
    Http.get("/user").then((res) => {
      if (res.data.data) {
        setUser(res.data.data);
      }
    });
  }, []);

  return (
    <div>
      <Header user={user} />
      <Sidebar user={user} />
      <section className={classes.mainContent}>{children}</section>
    </div>
  );
}

export default Layout;
