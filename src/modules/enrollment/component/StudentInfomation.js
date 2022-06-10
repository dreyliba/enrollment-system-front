import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import FormField from "../../../components/common/FormField";
import SelectField from "../../../components/common/SelectField";
import EnrollmentContext from "../context/EnrollmentContent";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function StudentInfomation({ disabilityCategories }) {
  const classes = useStyles();

  const { formValues, handleChange } = useContext(EnrollmentContext);

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          B. STUDENT INFORMATION
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormField
          placeholder="(if available upon enrolment)"
          name="psa"
          label="PSA Birth Certificate Number"
          onChange={(e) => handleChange("psa", e.target.value)}
          value={formValues.values.psa || ""}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormField
          placeholder="LRN"
          label="Learners Reference Number"
          name="lrn"
          onChange={(e) => handleChange("lrn", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.lrn || ""}
        />
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} md={4}></Grid>
      </Hidden>
      <Grid item xs={12} md={3}>
        <FormField
          label="Last Name"
          name="last_name"
          onChange={(e) => handleChange("last_name", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.last_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          label="First Name"
          name="first_name"
          onChange={(e) => handleChange("first_name", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.first_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          label="Middle Name"
          name="middle_name"
          onChange={(e) => handleChange("middle_name", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.middle_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          placeholder="e.g . Jr., III (if applicable)"
          label="Extension Name"
          name="extension_name"
          onChange={(e) => handleChange("extension_name", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.extension_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          type="date"
          label="Date of Birth"
          name="date_of_birth"
          onChange={(e) => handleChange("date_of_birth", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.date_of_birth || ""}
          SelectProps={{ native: true }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <FormControl>
          <SelectField
            label="Gender"
            name="gender"
            onChange={(e) => handleChange("gender", e.target.value)}
            value={formValues.values.gender || ""}
            options={["Male", "Female"]}
            errors={formValues.errors}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl error={formValues.errors.has("indigenous_status")}>
          <FormLabel>
            Belonging to the Indigenous People (IP) Community/Indigenous
            Cultural Community
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.indigenous_status === "Yes" ? true : false
                  }
                  onChange={() => handleChange("indigenous_status", "Yes")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.indigenous_status === "No" ? true : false
                  }
                  onChange={() => handleChange("indigenous_status", "No")}
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("indigenous_status") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>

      {formValues.values.indigenous_status === "Yes" && (
        <Grid item xs={12}>
          <Typography>Please specify:</Typography>
          <SelectField
            options={["Muslim", "Badjao"]}
            fullWidth={false}
            name="indigenous_status_name"
            onChange={(e) =>
              handleChange("indigenous_status_name", e.target.value)
            }
            value={formValues.values.indigenous_status_name || ""}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <FormControl error={formValues.errors.has("has_children")}>
          <FormLabel>Do you have child/children?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.has_children === "Yes" ? true : false
                  }
                  onChange={() => handleChange("has_children", "Yes")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.has_children === "No" ? true : false
                  }
                  onChange={() => handleChange("has_children", "No")}
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("has_children") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid item xs={12} md={8}>
        <FormField
          label="School to enroll in"
          name="school_to_enroll_name"
          onChange={(e) =>
            handleChange("school_to_enroll_name", e.target.value)
          }
          value={formValues.values.school_to_enroll_name || ""}
          errors={formValues.errors}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <FormField
          label="Mother Tongue"
          name="mother_tongue"
          onChange={(e) => handleChange("mother_tongue", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.mother_tongue || ""}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FormField
          label="Religion"
          name="religion"
          onChange={(e) => handleChange("religion", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.religion || ""}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography style={{ fontWeight: "bold" }}>
          For Learners with Special Education Needs
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormControl error={formValues.errors.has("is_special_education")}>
          <FormLabel>
            <Typography style={{ fontSize: "14px" }}>
              {
                "Does the learner  special education needs? (i.e. physical, social disablity, medical condition, giftedness, among others) "
              }
            </Typography>
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.is_special_education === "Yes"
                      ? true
                      : false
                  }
                  onChange={() => handleChange("is_special_education", "Yes")}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.is_special_education === "No"
                      ? true
                      : false
                  }
                  onChange={() => handleChange("is_special_education", "No")}
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("is_special_education") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>

      {formValues.values.is_special_education === "Yes" && (
        <Grid item xs={12}>
          <Typography>Please specify:</Typography>
          <SelectField
            options={disabilityCategories}
            keyValuePair="name,name"
            fullWidth={false}
            name="is_special_education_name"
            onChange={(e) =>
              handleChange("is_special_education_name", e.target.value)
            }
            value={formValues.values.is_special_education_name || ""}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <FormControl
          error={formValues.errors.has("has_devices_available_at_home")}
        >
          <FormLabel>
            {
              "Do you have any assistive technology devices available at home? (i.e. screen reader, Braille, DAISY)"
            }
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.has_devices_available_at_home === "Yes"
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange("has_devices_available_at_home", "Yes")
                  }
                />
              }
              label="Yes"
            />

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.has_devices_available_at_home === "No"
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange("has_devices_available_at_home", "No")
                  }
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("has_devices_available_at_home") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>
      {formValues.values.has_devices_available_at_home === "Yes" && (
        <Grid item xs={12}>
          <Typography>Please specify:</Typography>
          <FormField
            fullWidth={false}
            name="has_devices_available_at_home_name"
            onChange={(e) =>
              handleChange("has_devices_available_at_home_name", e.target.value)
            }
            value={formValues.values.has_devices_available_at_home_name || ""}
          />
        </Grid>
      )}

      <Grid item xs={12} md={4}>
        <FormField
          label="Email Address"
          name="email"
          onChange={(e) => handleChange("email", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.email || ""}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          ADDRESS
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormField
          label="House Number and Street"
          name="house_number_street"
          onChange={(e) =>
            handleChange("house_number_street", e.target.value, true)
          }
          errors={formValues.errors}
          value={formValues.values.house_number_street || ""}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormField
          label="Subdivision/ Village/ Zone"
          name="subdivision_village_zone"
          onChange={(e) =>
            handleChange("subdivision_village_zone", e.target.value, true)
          }
          value={formValues.values.subdivision_village_zone || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          label="Barangay"
          name="barangay"
          onChange={(e) => handleChange("barangay", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.barangay || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          label="City/ Municipality"
          name="municipality"
          onChange={(e) => handleChange("municipality", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.municipality || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          label="Province"
          name="province"
          onChange={(e) => handleChange("province", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.province || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          label="Region"
          name="region"
          onChange={(e) => handleChange("region", e.target.value, true)}
          errors={formValues.errors}
          value={formValues.values.region || ""}
        />
      </Grid>
    </Fragment>
  );
}

export default StudentInfomation;
