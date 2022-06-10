import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
const useStyles = makeStyles({
  content: {
    marginLeft: 100,
    marginRight: 100,
  },
  header: {
    fontFamily: "Bodoni MT",
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 6,
  },
  schoolYear: {
    textAlign: "center",
    fontFamily: "Arial",
  },
  intro: {
    // marginLeft: 200,
  },
});

function PrintCompletionForm() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.header}>
          CERTIFICATE OF ENROLLMENT
        </Typography>
        <Typography className={classes.schoolYear}>School Year:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.intro}>
          TO WHOM IT MAY CONCERN:
        </Typography>
      </Grid>
    </Fragment>
  );
}

export default PrintCompletionForm;
