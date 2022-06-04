import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState, useContext } from "react";
import FormField from "../../../components/common/FormField";
import SelectField from "../../../components/common/SelectField";
import { levelOptions, schoolYearOptions } from "../../utils/helper";
import EnrollmentContext from "../context/EnrollmentContent";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function SchoolInformation() {
  const classes = useStyles();
  const { formValues, handleChange } = useContext(EnrollmentContext);

  const handleFormChange = (name, value) => {
    handleChange(name, value);
  };

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          A. GRADE LEVEL AND SCHOOL INFORMATION
        </Typography>
        <FormControl>
          <SelectField
            name="school_year"
            label="School Year"
            onChange={(e) => handleFormChange("school_year", e.target.value)}
            value={formValues.values.school_year || ""}
            options={schoolYearOptions()}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.values.lrn_status === "No LRN" ? true : false}
              onChange={() => handleFormChange("lrn_status", "No LRN")}
            />
          }
          label="No LRN"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={
                formValues.values.lrn_status === "With LRN" ? true : false
              }
              onChange={() => handleFormChange("lrn_status", "With LRN")}
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
              onChange={(e) => handleFormChange("returning", e.target.value)}
            />
          }
          value={formValues.values.returning || ""}
          label="Returning (Balik Aral)"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Grade Level to Enroll</FormLabel>
        <SelectField
          name="grade_level_to_enroll"
          onChange={(e) =>
            handleFormChange("grade_level_to_enroll", e.target.value)
          }
          value={formValues.values.grade_level_to_enroll || ""}
          options={levelOptions().map((level) => `Grade ${level}`)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Last Grade Level Completed</FormLabel>
        <SelectField
          name="last_grade_level_completed"
          onChange={(e) =>
            handleFormChange("last_grade_level_completed", e.target.value)
          }
          value={formValues.values.last_grade_level_completed || ""}
          options={levelOptions().map((level) => `Grade ${level}`)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Last School Year Completed</FormLabel>
        <SelectField
          name="last_school_yr_completed"
          onChange={(e) =>
            handleFormChange("last_school_yr_completed", e.target.value)
          }
          value={formValues.values.last_school_yr_completed || ""}
          options={levelOptions().map((level) => `Grade ${level}`)}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormField
          name="last_school_attended_name"
          label="Last School Attended"
          onChange={(e) =>
            handleFormChange("last_school_attended_name", e.target.value)
          }
          value={formValues.values.last_school_attended_name || ""}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormField
          name="last_school_attended_id"
          label="School ID"
          onChange={(e) =>
            handleFormChange("last_school_attended_id", e.target.value)
          }
          value={formValues.values.last_school_attended_id || ""}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          fullWidth
          name="last_school_attended_address"
          label="School Adress"
          onChange={(e) =>
            handleFormChange("last_school_attended_address", e.target.value)
          }
          value={formValues.values.last_school_attended_address || ""}
          errors={formValues.errors}
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
              checked={
                formValues.values.school_type === "Private" ? true : false
              }
              onChange={() => handleFormChange("school_type", "Private")}
            />
          }
          label="Private"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={
                formValues.values.school_type === "Public" ? true : false
              }
              onChange={() => handleFormChange("school_type", "Public")}
            />
          }
          label="Public"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormField
          label="School to enroll in"
          name="school_to_enroll_name"
          onChange={(e) =>
            handleFormChange("school_to_enroll_name", e.target.value)
          }
          value={formValues.values.school_to_enroll_name || ""}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormField
          label="School ID"
          name="school_to_enroll_in_id"
          onChange={(e) =>
            handleFormChange("school_to_enroll_in_id", e.target.value)
          }
          value={formValues.values.school_to_enroll_in_id || ""}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          label="School Adress"
          name="school_to_enroll_address"
          onChange={(e) =>
            handleFormChange("school_to_enroll_address", e.target.value)
          }
          value={formValues.values.school_to_enroll_address || ""}
          errors={formValues.errors}
        />
      </Grid>
    </Fragment>
  );
}

export default SchoolInformation;
