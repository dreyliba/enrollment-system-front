import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import DepEDLogo from "../assets/images/DepED_Logo.png";
import HNVS_LOGO from "../assets/images/hnvs-logo.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  DepEDLogo: {
    borderRadius: "50%",
    height: 100,
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  repub_txt: {
    fontFamily: "Old English Text MT",
    fontSize: 18,
    textAlign: "center",
  },
  department_txt: {
    fontFamily: "Old English Text MT",
    fontSize: 28,
    textAlign: "center",
  },
  other_txt: {
    fontFamily: "Copperplate Gothic Bold",
    fontWeight: "bold",
    listStyleType: "none",
    textAlign: "center",
  },
  top_divider: {
    maxWidth: 800,
    height: 3,
    background: "black",
    marginTop: 0,
  },

  //botoom section

  bottom_divider: {
    marginTop: 300,
    maxWidth: 800,
    height: 3,
    background: "black",
  },
  hnvs_logo: {
    height: 100,
    marginLeft: 100,
  },
  hnvs_contact: {
    listStyleType: "none",
  },
});

function ReportDesign() {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12}>
        <img
          src={DepEDLogo}
          alt="DepED Logo"
          className={classes.DepEDLogo}
        ></img>
        <Typography className={classes.repub_txt}>
          Republic of the Philippines
        </Typography>
      </Grid>
      <Typography className={classes.department_txt}>
        Department of Education
      </Typography>
      <Typography className={classes.other_txt}>
        <li>REGION VII - Eastern Visayas</li>
        <li>SCHOOLS DIVISION OF LEYTE PROVINCE</li>
        <li>HILONGOS NATIONAL VOCATIONAL SCHOOL</li>
        <li>HILONGOS, LEYTE</li>
      </Typography>
      <hr className={classes.top_divider} />
      <hr className={classes.bottom_divider} />

      <Grid item xs={12} md={4}>
        <img
          src={HNVS_LOGO}
          alt="hnvs logo"
          className={classes.hnvs_logo}
        ></img>
        <Grid xs={12} md={12} className={classes.hnvs_contact}>
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Hilongos, Leyte" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="(053) 300-9121" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="hnvs.shs@yahoo.com" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default ReportDesign;
