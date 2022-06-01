import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Fragment } from "react";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function StudentInfomation() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          B. STUDENT INFORMATION
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          placeholder="(if available upon enrollment)"
          margin="dense"
          label="PSA Birth Certificate Number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          placeholder="LRN"
          margin="dense"
          label="Learners Reference Number"
          variant="outlined"
        />
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={4}></Grid>
      </Hidden>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Last Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="First Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Middle Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Extension Name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          fullWidth
          margin="dense"
          type="date"
          label="Date of Birth"
          variant="outlined"
          SelectProps={{
            native: true,
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <FormControl>
          <TextField
            select
            margin="dense"
            variant="outlined"
            label="Gender"
            SelectProps={{ native: true }}
          >
            <option>Select Option</option>
            <option>Male</option>
            <option>Female</option>
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Belonging to the Indigenous People (IP) Community/Indigenous Cultural
          Community
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Yes" />
        <FormControlLabel control={<Checkbox color="primary" />} label="No" />
      </Grid>
      <Grid item xs={12}>
        <Typography>If yes please specify:</Typography>
        <TextField variant="outlined" margin="dense" />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          label="Mother Tongue"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          label="Religion"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>For Learners with Special Education Needs</Typography>
        <Typography style={{ fontSize: "14px" }}>
          {
            "For Learners have special education needs? (i.e. physical, social disablity, medical condition, giftedness, among others) "
          }
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Yes" />
        <FormControlLabel control={<Checkbox color="primary" />} label="No" />
      </Grid>
      <Grid item xs={12}>
        <Typography>If yes please specify:</Typography>
        <TextField variant="outlined" margin="dense" />
      </Grid>
    </Fragment>
  );
}

export default StudentInfomation;
