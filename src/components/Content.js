import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";
import Dashboard from "../modules/dashboard/pages/Dashboard";

const useStyles = makeStyles(() => ({
  // necessary for content to be below app bar
  root: {
    margin: "10px 0px 0px 240px",
  },
}));

export default function Content() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Card className={classes.root}>
        <CardContent>
          <Dashboard />
        </CardContent>
      </Card>
    </main>
  );
}
