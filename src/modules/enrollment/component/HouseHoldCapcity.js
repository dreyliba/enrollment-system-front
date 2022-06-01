import {
  Checkbox,
  FormControlLabel,
  Grid,
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

function HouseHoldCapcity() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          D. HOUSEHOLD CAPACITY AND ACCESS TO DISTANCE LEARNING
        </Typography>
        <Typography>
          {
            "D1. How many of your household members (including the enrollee) are studying in School Year 2021-2022? Please specify each."
          }
        </Typography>
      </Grid>
      <Grid xs={12} md={2}>
        <TextField variant="outlined" margin="dense" fullWidth label="Kinder" />
      </Grid>

      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 1"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 2"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 3"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 4"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 5"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 6"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField variant="outlined" margin="dense" fullWidth label="Grade7" />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 8"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 9"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 10"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 11"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 12"
        />
      </Grid>
      <Grid xs={12} md={2}>
        <TextField variant="outlined" margin="dense" fullWidth label="Other" />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {
            "D1. How many of your household members (including the enrollee) are studying in School Year 2021-2022? Please specify each."
          }
        </Typography>
        <Typography>
          D2. Who among the the household members can provide instructional
          support to the child's distance learning? Choose all the applies.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="parents/guardian"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="grand parents"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="others (tutors, house helper)"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="able to do independent thing"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid item xs={12} md={8}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="elder siblings"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="extended members of the family"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="none"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default HouseHoldCapcity;
