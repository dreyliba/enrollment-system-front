import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HnvsLogo from "../../assets/images/hnvs-logo.png";

const useStyles = makeStyles({
  content: {
    display: "flex",
    borderTop: "1px solid #000",
    paddingTop: 20,
  },
  text: {
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 1.2,

    "& svg": {
      marginRight: 10,
      fontSize: 14,
    },
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  imageBox: {
    display: "flex",
    alignItems: "center",
  },
});
function PrintFooter() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.imageBox}>
        <img className={classes.img} src={HnvsLogo} alt="hnvs-logo" />
      </div>
      <div>
        <Typography className={classes.text}>
          <LocationOnIcon /> Hilongos, Leyte
        </Typography>
        <Typography className={classes.text}>
          <PhoneIcon /> (053) 300-9121
        </Typography>
        <Typography className={classes.text}>
          <EmailIcon /> hnvs.shs@yahoo.com
        </Typography>
      </div>
    </div>
  );
}

export default PrintFooter;
