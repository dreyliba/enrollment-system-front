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
import React, { Fragment, useState } from "react";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function SchoolInformation() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    school_year: "",
    lrn_status: "",
    returning: "",
    grade_level_to_enroll: "",
    last_grade_level_completed: "",
    last_school_yr_completed: "",
    last_school_attended_name: "",
    last_school_attended_address: "",
    last_school_attended_id: "",
    school_type: "",
    school_to_enroll_name: "",
    school_to_enroll_address: "",
    school_to_enroll_in_id: "",
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            name="school_year"
            variant="outlined"
            label="School Year"
            onChange={(e) => handleChange("school_year", e.target.value)}
            value={formValues.name || ""}
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
          control={
            <Checkbox
              color="primary"
              checked={formValues.lrn_status === "No LRN" ? true : false}
              onChange={() => handleChange("lrn_status", "No LRN")}
            />
          }
          label="No LRN"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.lrn_status === "With LRN" ? true : false}
              onChange={() => handleChange("lrn_status", "With LRN")}
            />
          }
          label="With LRN"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={(e) => handleChange("returning", e.target.value)}
            />
          }
          value={formValues.returning || ""}
          label="Returning (Balik Aral)"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Grade Level to Enroll</FormLabel>
        <TextField
          fullWidth
          select
          name="grade_level_to_enroll"
          margin="dense"
          variant="outlined"
          onChange={(e) =>
            handleChange("grade_level_to_enroll", e.target.value)
          }
          value={formValues.grade_level_to_enroll || ""}
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
          name="last_grade_level_completed"
          margin="dense"
          variant="outlined"
          onChange={(e) =>
            handleChange("last_grade_level_completed", e.target.value)
          }
          value={formValues.last_grade_level_completed || ""}
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
          name="last_school_yr_completed"
          margin="dense"
          variant="outlined"
          onChange={(e) =>
            handleChange("last_school_yr_completed", e.target.value)
          }
          value={formValues.last_school_yr_completed || ""}
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
          name="last_school_attended_name"
          variant="outlined"
          label="Last School Attended"
          onChange={(e) =>
            handleChange("last_school_attended_name", e.target.value)
          }
          value={formValues.last_school_attended_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          name="last_school_attended_id"
          label="School ID"
          onChange={(e) =>
            handleChange("last_school_attended_id", e.target.value)
          }
          value={formValues.last_school_attended_id || ""}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          margin="dense"
          name="last_school_attended_address"
          label="School Adress"
          onChange={(e) =>
            handleChange("last_school_attended_address", e.target.value)
          }
          value={formValues.last_school_attended_address || ""}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>School Type</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.school_type === "Private" ? true : false}
              onChange={() => handleChange("school_type", "Private")}
            />
          }
          label="Private"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.school_type === "Public" ? true : false}
              onChange={() => handleChange("school_type", "Public")}
            />
          }
          label="Public"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="School to enroll in"
          name="school_to_enroll_name"
          onChange={(e) =>
            handleChange("school_to_enroll_name", e.target.value)
          }
          value={formValues.school_to_enroll_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="School ID"
          name="school_to_enroll_in_id"
          onChange={(e) =>
            handleChange("school_to_enroll_in_id", e.target.value)
          }
          value={formValues.school_to_enroll_in_id || ""}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="outlined"
          margin="dense"
          label="School Adress"
          name="school_to_enroll_address"
          onChange={(e) =>
            handleChange("school_to_enroll_address", e.target.value)
          }
          value={formValues.school_to_enroll_address || ""}
        />
      </Grid>
    </Fragment>
  );
}

export default SchoolInformation;
