import {
  Checkbox,
  FormControlLabel,
  FormLabel,
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

function ParentGuardianInfo() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          C. PARENT/GUARDIAN INFORMATION
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Mother (last name, middel name, first name)"}</FormLabel>
        <TextField
          fullWidth
          label="Full Name"
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Mother (last name, middel name, first name)"}</FormLabel>
        <TextField
          fullWidth
          label="Full Name"
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Guardian (last name, middel name, first name)"}</FormLabel>
        <TextField
          fullWidth
          label="Guardian"
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>
          {"Contact number/s (cellphone/telephone)/Email Address"}
        </FormLabel>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>
          {"Contact number/s (cellphone/telephone)/Email Address"}
        </FormLabel>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>
          {"Contact number/s (cellphone/telephone)/Email Address"}
        </FormLabel>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Highes Education Attainment"}</FormLabel>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="No Formal Schooling"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Elementary Level"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Elementary Graduate"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="High School Level"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="High School Graduate"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="After High School Education (College / Post Grad) or Technical/Vocational"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Highes Education Attainment"}</FormLabel>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="No Formal Schooling"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Elementary Level"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Elementary Graduate"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="High School Level"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="High School Graduate"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="After High School Education (College / Post Grad) or Technical/Vocational"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Highes Education Attainment"}</FormLabel>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="No Formal Schooling"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Elementary Level"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Elementary Graduate"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="High School Level"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="High School Graduate"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="After High School Education (College / Post Grad) or Technical/Vocational"
          />
        </Grid>
      </Grid>
      <Grid style={{ marginTop: 10 }} xs={12}>
        <Typography>Is your family a benificiary of 4Ps?</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel control={<Checkbox color="primary" />} label="Yes" />
        <FormControlLabel control={<Checkbox color="primary" />} label="No" />
      </Grid>
    </Fragment>
  );
}

export default ParentGuardianInfo;
