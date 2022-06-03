import {
  Checkbox,
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

function ParentGuardianInfo() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    father: "",
    mother: "",
    guardian: "",
    contact: "",
    father_contact: "",
    mother_contact: "",
    guardian_contact: "",
    father_heighest_edu_attainment: "",
    mother_heighest_edu_attainment: "",
    guardian_heighest_edu_attainment: "",
    is_benificiary: "",
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
          C. PARENT/ GUARDIAN INFORMATION
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormLabel>{"Father (last name, middel name, first name)"}</FormLabel>
        <TextField
          fullWidth
          label="Full Name"
          margin="dense"
          variant="outlined"
          name="father"
          onChange={(e) => handleChange("father", e.target.value)}
          value={formValues.father || ""}
          SelectProps={{ native: true }}
        ></TextField>
        <div>
          <FormLabel>
            {"Contact number/s (cellphone/ telephone)/Email Address"}
          </FormLabel>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            name="father_contact"
            onChange={(e) => handleChange("father_contact", e.target.value)}
            value={formValues.father_contact || ""}
            SelectProps={{ native: true }}
          ></TextField>
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
                  formValues.father_heighest_edu_attainment ===
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
                  formValues.father_heighest_edu_attainment ===
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
                  formValues.father_heighest_edu_attainment ===
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
                  formValues.father_heighest_edu_attainment ===
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
                  formValues.father_heighest_edu_attainment ===
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
                  formValues.father_heighest_edu_attainment ===
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
        <FormLabel>{"Mother (last name, middel name, first name)"}</FormLabel>
        <TextField
          fullWidth
          label="Full Name"
          margin="dense"
          variant="outlined"
          name="mother"
          onChange={(e) => handleChange("mother", e.target.value)}
          value={formValues.mother || ""}
          SelectProps={{ native: true }}
        ></TextField>
        <div>
          <FormLabel>
            {"Contact number/s (cellphone/ telephone)/Email Address"}
          </FormLabel>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            name="mother_contact"
            onChange={(e) => handleChange("mother_contact", e.target.value)}
            value={formValues.mother_contact || ""}
            SelectProps={{ native: true }}
          ></TextField>
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
                  formValues.mother_heighest_edu_attainment ===
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
                  formValues.mother_heighest_edu_attainment ===
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
                  formValues.mother_heighest_edu_attainment ===
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
                  formValues.mother_heighest_edu_attainment ===
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
                  formValues.mother_heighest_edu_attainment ===
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
                  formValues.mother_heighest_edu_attainment ===
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
        <FormLabel>{"Guardian(last name, middel name, first name)"}</FormLabel>
        <TextField
          fullWidth
          label="Full Name"
          margin="dense"
          variant="outlined"
          SelectProps={{ native: true }}
        ></TextField>
        <div>
          <FormLabel>
            {"Contact number/s (cellphone/ telephone)/Email Address"}
          </FormLabel>
          <TextField
            fullWidth
            margin="dense"
            variant="outlined"
            name="guardian_contact"
            onChange={(e) => handleChange("guardian_contact", e.target.value)}
            value={formValues.guardian_contact || ""}
            SelectProps={{ native: true }}
          ></TextField>
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
                  formValues.guardian_heighest_edu_attainment ===
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
                  formValues.guardian_heighest_edu_attainment ===
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
                  formValues.guardian_heighest_edu_attainment ===
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
                  formValues.guardian_heighest_edu_attainment ===
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
                  formValues.guardian_heighest_edu_attainment ===
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
                  formValues.guardian_heighest_edu_attainment ===
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
        <Typography style={{ marginTop: 15 }}>
          Is your family a beneficiary yof 4Ps?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.is_benificiary === "Yes" ? true : false}
              onChange={() => handleChange("is_benificiary", "Yes")}
            />
          }
          label="Yes"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.is_benificiary === "No" ? true : false}
              onChange={() => handleChange("is_benificiary", "No")}
            />
          }
          label="No"
        />
      </Grid>
    </Fragment>
  );
}

export default ParentGuardianInfo;
