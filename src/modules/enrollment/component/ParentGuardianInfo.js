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
import EnrollmentContext from "../context/EnrollmentContent";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function ParentGuardianInfo() {
  const classes = useStyles();

  const { formValues, handleChange } = useContext(EnrollmentContext);

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          C. PARENT/ GUARDIAN INFORMATION
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Father (Last Name, Middel Name, First Name)"}</FormLabel>
        <FormField
          label="Full Name"
          name="father"
          onChange={(e) => handleChange("father", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.father || ""}
        ></FormField>
        <div>
          <FormLabel>
            {"Contact number/s (cellphone/ telephone)/Email Address"}
          </FormLabel>
          <FormField
            name="father_contact"
            onChange={(e) => handleChange("father_contact", e.target.value)}
            errors={formValues.errors}
            value={formValues.values.father_contact || ""}
          ></FormField>
        </div>
        <div>
          <FormLabel>Heighest Educational Attainment</FormLabel>
        </div>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.father_heighest_edu_attainment ===
                  "No Formal Schooling"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "father_heighest_edu_attainment",
                    "No Formal Schooling"
                  )
                }
              />
            }
            label="No Formal Schooling"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.father_heighest_edu_attainment ===
                  "Elementary Level"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "father_heighest_edu_attainment",
                    "Elementary Level"
                  )
                }
              />
            }
            label="Elementary Level"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.father_heighest_edu_attainment ===
                  "Elementary Graduate"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "father_heighest_edu_attainment",
                    "Elementary Graduate"
                  )
                }
              />
            }
            label="Elementary Graduate"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.father_heighest_edu_attainment ===
                  "High School Level"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "father_heighest_edu_attainment",
                    "High School Level"
                  )
                }
              />
            }
            label="High School Level"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.father_heighest_edu_attainment ===
                  "High School Graduate"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "father_heighest_edu_attainment",
                    "High School Graduate"
                  )
                }
              />
            }
            label="High School Graduate"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.father_heighest_edu_attainment ===
                  "After High School Education (College / Post Grad) or Technical/ Vocational"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "father_heighest_edu_attainment",
                    "After High School Education (College / Post Grad) or Technical/ Vocational"
                  )
                }
              />
            }
            label="After High School Education (College / Post Grad) or Technical/ Vocational"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Mother (Last Name, Middel Name, First Name)"}</FormLabel>
        <FormField
          label="Full Name"
          name="mother"
          onChange={(e) => handleChange("mother", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.mother || ""}
        ></FormField>
        <div>
          <FormLabel>
            {"Contact number/s (cellphone/ telephone)/Email Address"}
          </FormLabel>
          <FormField
            name="mother_contact"
            onChange={(e) => handleChange("mother_contact", e.target.value)}
            errors={formValues.errors}
            value={formValues.values.mother_contact || ""}
          ></FormField>
        </div>
        <div>
          <FormLabel>Heighest Educational Attainment</FormLabel>
        </div>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.mother_heighest_edu_attainment ===
                  "No Formal Schooling"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "mother_heighest_edu_attainment",
                    "No Formal Schooling"
                  )
                }
              />
            }
            label="No Formal Schooling"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.mother_heighest_edu_attainment ===
                  "Elementary Level"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "mother_heighest_edu_attainment",
                    "Elementary Level"
                  )
                }
              />
            }
            label="Elementary Level"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.mother_heighest_edu_attainment ===
                  "Elementary Graduate"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "mother_heighest_edu_attainment",
                    "Elementary Graduate"
                  )
                }
              />
            }
            label="Elementary Graduate"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.mother_heighest_edu_attainment ===
                  "High School Level"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "mother_heighest_edu_attainment",
                    "High School Level"
                  )
                }
              />
            }
            label="High School Level"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.mother_heighest_edu_attainment ===
                  "High School Graduate"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "mother_heighest_edu_attainment",
                    "High School Graduate"
                  )
                }
              />
            }
            label="High School Graduate"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.mother_heighest_edu_attainment ===
                  "After High School Education (College / Post Grad) or Technical/ Vocational"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "mother_heighest_edu_attainment",
                    "After High School Education (College / Post Grad) or Technical/ Vocational"
                  )
                }
              />
            }
            label="After High School Education (College / Post Grad) or Technical/ Vocational"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Guardian(Last Name, Middel Name, First Name)"}</FormLabel>
        <FormField
          label="Full Name"
          name="guardian"
          onChange={(e) => handleChange("guardian", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.guardian || ""}
        />
        <div>
          <FormLabel>
            {"Contact number/s (cellphone/ telephone)/Email Address"}
          </FormLabel>
          <FormField
            name="guardian_contact"
            onChange={(e) => handleChange("guardian_contact", e.target.value)}
            errors={formValues.errors}
            value={formValues.values.guardian_contact || ""}
          ></FormField>
        </div>
        <div>
          <FormLabel>Heighest Educational Attainment</FormLabel>
        </div>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.guardian_heighest_edu_attainment ===
                  "No Formal Schooling"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "guardian_heighest_edu_attainment",
                    "No Formal Schooling"
                  )
                }
              />
            }
            label="No Formal Schooling"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.guardian_heighest_edu_attainment ===
                  "Elementary Level"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "guardian_heighest_edu_attainment",
                    "Elementary Level"
                  )
                }
              />
            }
            label="Elementary Level"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.guardian_heighest_edu_attainment ===
                  "Elementary Graduate"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "guardian_heighest_edu_attainment",
                    "Elementary Graduate"
                  )
                }
              />
            }
            label="Elementary Graduate"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.guardian_heighest_edu_attainment ===
                  "High School Level"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "guardian_heighest_edu_attainment",
                    "High School Level"
                  )
                }
              />
            }
            label="High School Level"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.guardian_heighest_edu_attainment ===
                  "High School Graduate"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "guardian_heighest_edu_attainment",
                    "High School Graduate"
                  )
                }
              />
            }
            label="High School Graduate"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                checked={
                  formValues.values.guardian_heighest_edu_attainment ===
                  "After High School Education (College / Post Grad) or Technical/ Vocational"
                    ? true
                    : false
                }
                onChange={() =>
                  handleChange(
                    "guardian_heighest_edu_attainment",
                    "After High School Education (College / Post Grad) or Technical/ Vocational"
                  )
                }
              />
            }
            label="After High School Education (College / Post Grad) or Technical/ Vocational"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormControl error={formValues.errors.has("is_benificiary")}>
          <FormLabel>Is your family a beneficiary yof 4Ps?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.is_benificiary === "Yes" ? true : false
                  }
                  onChange={() => handleChange("is_benificiary", "Yes")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.is_benificiary === "No" ? true : false
                  }
                  onChange={() => handleChange("is_benificiary", "No")}
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("is_benificiary") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>
    </Fragment>
  );
}

export default ParentGuardianInfo;
