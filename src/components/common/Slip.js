import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PrintFooter from "./PrintFooter";
import PrintHeader from "./PrintHeader";
const useStyles = makeStyles({
  content: {
    maxWidth: 850,
    width: "100%",
    margin: "0 auto",
  },
  cert: {
    fontFamily: "Bodoni MT",
    fontSize: 20,
    letterSpacing: 3,
    textAlign: "center",
  },
  school_year: {
    textAlign: "center",
    fontFamily: "Arial",
  },
  date: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 12,
  },
  dateLine: {
    borderTop: "1px solid black",
    display: "block",
    textAlign: "center",
    width: 150,
  },
  introtxt: {
    paddingLeft: 50,
    marginTop: 10,
  },
  enrollingTeacher: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 16,
    marginBottom: 10,
  },
});

function Slip() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <PrintHeader />
      <Typography className={classes.cert}>
        CERTIFICATE OF ENROLLMENT
      </Typography>
      <Typography className={classes.school_year}>
        School Year: _______
      </Typography>
      <Typography className={classes.date}>Date: __________</Typography>
      <Typography>TO WHOM IT MAY CONCERN:</Typography>
      <Typography className={classes.introtxt}>
        THIS IS TO CERTIFY that __________________________________ is officially
        enrolled as a regular/an irregular _________________________ year
        student of this school.
      </Typography>
      <Typography className={classes.enrollingTeacher}>
        Enrolling Teacher: ______________
      </Typography>

      <PrintFooter />
    </div>
  );
}

export default Slip;
