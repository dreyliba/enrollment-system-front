import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DepEDLogo from "../../assets/images/DepED_Logo.png";

const useStyles = makeStyles({
  content: {
    marginBottom: 10,
    paddingBottom: 20,
  },
  repub_txt: {
    fontFamily: "Old English Text MT",
    fontSize: 12,
    textAlign: "center",
  },
  department_txt: {
    fontFamily: "Old English Text MT",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 1.2,
  },
  other_txt: {
    fontFamily: "Copperplate Gothic Bold",
    fontWeight: "bold",
    listStyleType: "none",
    textAlign: "center",
    fontSize: 11,
    lineHeight: 1.2,
  },
  DepEDLogo: {
    height: 50,
    margin: "0 auto",
  },
  logoBox: {
    textAlign: "center",
  },
});
function PrintHeader() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.logoBox}>
        <img src={DepEDLogo} alt="DepED Logo" className={classes.DepEDLogo} />
      </div>
      <Typography className={classes.repub_txt}>
        Republic of the Philippines
      </Typography>
      <Typography className={classes.department_txt}>
        Department of Education
      </Typography>
      <Typography className={classes.other_txt}>
        <li>REGION VII - Eastern Visayas</li>
        <li>SCHOOLS DIVISION OF LEYTE PROVINCE</li>
        <li>HILONGOS NATIONAL VOCATIONAL SCHOOL</li>
        <li>HILONGOS, LEYTE</li>
      </Typography>
    </div>
  );
}

export default PrintHeader;
