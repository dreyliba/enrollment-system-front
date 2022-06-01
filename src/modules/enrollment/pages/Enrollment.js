import { Card, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import HouseHoldCapcity from "../component/HouseHoldCapcity";
import ParentGuardianInfo from "../component/ParentGuardianInfo";
import SchoolInformation from "../component/SchoolInformation";
import StudentInfomation from "../component/StudentInfomation";
const useStyles = makeStyles({
  parentContainer: {
    padding: 5,
  },
});

export default function Enrollment() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.parentContainer}>
        <Grid container spacing={1}>
          <SchoolInformation />
          <StudentInfomation />
          <ParentGuardianInfo />
          <HouseHoldCapcity />
        </Grid>
      </Card>
    </div>
  );
}
