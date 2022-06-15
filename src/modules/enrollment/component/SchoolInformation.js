import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
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

function SchoolInformation({ tracks, strands }) {
  const classes = useStyles();
  const { formValues, handleChange } = useContext(EnrollmentContext);

  const handleFormChange = (name, value, isUpperCase = false) => {
    handleChange(name, value, isUpperCase);
  };

  const getStrandOptions = (id) => {
    return strands.filter((strand) => strand.track_id === parseInt(id));
  };

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          A. GRADE LEVEL AND SCHOOL INFORMATION
        </Typography>
        <SelectField
          fullWidth={false}
          name="school_year"
          label="*School Year"
          onChange={(e) => handleFormChange("school_year", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.school_year || ""}
          options={schoolYearOptions()}
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormGroup row>
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
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.lrn_status === "No LRN" ? true : false
                  }
                  onChange={() => handleFormChange("lrn_status", "No LRN")}
                />
              }
              label="No LRN"
            />
          </FormGroup>
          {formValues.errors.has("lrn_status") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.values.returning === "Yes"}
              onChange={(e) =>
                handleFormChange(
                  "returning",
                  formValues.values.returning === "Yes" ? "No" : "Yes"
                )
              }
            />
          }
          label="Returning (Balik Aral)"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>*Grade Level to Enroll</FormLabel>
        <SelectField
          name="grade_level_to_enroll"
          onChange={(e) =>
            handleFormChange("grade_level_to_enroll", e.target.value)
          }
          value={formValues.values.grade_level_to_enroll || ""}
          options={levelOptions().map((level) => ({
            id: level,
            label: `Grade ${level}`,
          }))}
          errors={formValues.errors}
          keyValuePair="id,label"
        />

        {parseInt(formValues.values.grade_level_to_enroll) > 10 && (
          <div>
            <SelectField
              name="track_id"
              label="Track"
              onChange={(e) => handleFormChange("track_id", e.target.value)}
              errors={formValues.errors}
              value={formValues.values.track_id || ""}
              options={tracks}
              keyValuePair="id,name"
            />

            {getStrandOptions(formValues.values.track_id).length > 0 && (
              <SelectField
                name="strand_id"
                label="Strand"
                onChange={(e) => handleFormChange("strand_id", e.target.value)}
                errors={formValues.errors}
                value={formValues.values.strand_id || ""}
                options={getStrandOptions(formValues.values.track_id)}
                keyValuePair="id,name"
              />
            )}
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Last Grade Level Completed</FormLabel>
        <SelectField
          name="last_grade_level_completed"
          onChange={(e) =>
            handleFormChange("last_grade_level_completed", e.target.value)
          }
          value={formValues.values.last_grade_level_completed || ""}
          options={[10, ...levelOptions()].map((level) => ({
            id: level,
            label: `Grade ${level}`,
          }))}
          errors={formValues.errors}
          keyValuePair="id,label"
        />
        {parseInt(formValues.values.last_grade_level_completed) > 10 && (
          <div>
            <SelectField
              name="last_year_track_id"
              label="Track"
              onChange={(e) =>
                handleFormChange("last_year_track_id", e.target.value)
              }
              errors={formValues.errors}
              value={formValues.values.last_year_track_id || ""}
              options={tracks}
              keyValuePair="id,name"
            />

            {getStrandOptions(formValues.values.last_year_track_id).length >
              0 && (
              <SelectField
                name="last_year_strand_id"
                label="Strand"
                onChange={(e) =>
                  handleFormChange("last_year_strand_id", e.target.value)
                }
                errors={formValues.errors}
                value={formValues.values.last_year_strand_id || ""}
                options={getStrandOptions(formValues.values.last_year_track_id)}
                keyValuePair="id,name"
              />
            )}
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormLabel>Last School Year Completed</FormLabel>
        <SelectField
          name="last_school_yr_completed"
          onChange={(e) =>
            handleFormChange("last_school_yr_completed", e.target.value)
          }
          value={formValues.values.last_school_yr_completed || ""}
          options={schoolYearOptions()}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <FormField
          name="last_school_attended_name"
          label="Last School Attended"
          onChange={(e) =>
            handleFormChange("last_school_attended_name", e.target.value, true)
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
          label="School Address"
          onChange={(e) =>
            handleFormChange(
              "last_school_attended_address",
              e.target.value,
              true
            )
          }
          value={formValues.values.last_school_attended_address || ""}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl error={formValues.errors.has("school_type")}>
          <FormLabel>*School Type</FormLabel>
          <FormGroup row>
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
          </FormGroup>
          {formValues.errors.has("school_type") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <FormField
          label="School to enroll in"
          name="school_to_enroll_name"
          onChange={(e) =>
            handleFormChange("school_to_enroll_name", e.target.value, true)
          }
          value={formValues.values.school_to_enroll_name || ""}
          errors={formValues.errors}
          disabled
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormField
          label="School ID"
          name="school_to_enroll_in_id"
          onChange={(e) =>
            handleFormChange("school_to_enroll_in_id", e.target.value, true)
          }
          value={formValues.values.school_to_enroll_in_id || ""}
          errors={formValues.errors}
          disabled
        />
      </Grid>
      <Grid item xs={12}>
        <FormField
          label="School Address"
          name="school_to_enroll_address"
          onChange={(e) =>
            handleFormChange("school_to_enroll_address", e.target.value, true)
          }
          value={formValues.values.school_to_enroll_address || ""}
          errors={formValues.errors}
          disabled
        />
      </Grid>
    </Fragment>
  );
}

export default SchoolInformation;
