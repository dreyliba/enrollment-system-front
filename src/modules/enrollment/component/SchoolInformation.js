import {
  Checkbox,
  FormControl,
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

function SchoolInformation() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          A. GRADE LEVEL AND SCHOOL INFORMATION
        </Typography>
        <FormControl>
          <TextField
            select
            margin="dense"
            variant="outlined"
            label="School Year"
            SelectProps={{ native: true }}
          >
            <option>Select Option</option>
            <option>2021-2022</option>
            <option>2022-2023</option>
            <option>2023-2024</option>
          </TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="No LRN"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="With LRN"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Returning (Balik Aral)"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Grade Level to Enroll</FormLabel>
        <TextField
          fullWidth
          select
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        >
          <option>Select Option</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Last Grade Level Completed</FormLabel>
        <TextField
          fullWidth
          select
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        >
          <option>Select Option</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Last School Year Completed</FormLabel>
        <TextField
          fullWidth
          select
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        >
          <option>Select Option</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </TextField>
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Last School Attended"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="School ID"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          margin="dense"
          label="School Adress"
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>School Type</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Private"
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Public"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="School to enroll in"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="School ID"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          margin="dense"
          label="School Adress"
        />
      </Grid>
    </Fragment>
  );
}

export default SchoolInformation;
