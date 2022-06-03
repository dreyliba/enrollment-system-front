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
import React, { Fragment, useState } from "react";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function StudentInfomation() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    psa: "",
    lrn: "",
    last_name: "",
    first_name: "",
    middle_name: "",
    extension_name: "",
    date_of_birth: "",
    gender: "",
    indigenous_status: "",
    indigenous_status_name: "",
    mother_tongue: "",
    religion: "",
    is_special_education: "",
    is_special_education_name: "",
    has_devices_available_at_home: "",
    has_devices_available_at_home_name: "",
    email: "",
    house_number_street: "",
    subdivision_village_zone: "",
    barangay: "",
    municipality: "",
    province: "",
    region: "",
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
          B. STUDENT INFORMATION
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          placeholder="(if available upon enrollment)"
          margin="dense"
          name="psa"
          label="PSA Birth Certificate Number"
          variant="outlined"
          onChange={(e) => handleChange("psa", e.target.value)}
          value={formValues.psa || ""}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          placeholder="LRN"
          margin="dense"
          label="Learners Reference Number"
          variant="outlined"
          name="lrn"
          onChange={(e) => handleChange("lrn", e.target.value)}
          value={formValues.lrn || ""}
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
          name="last_name"
          onChange={(e) => handleChange("last_name", e.target.value)}
          value={formValues.last_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="First Name"
          variant="outlined"
          name="first_name"
          onChange={(e) => handleChange("first_name", e.target.value)}
          value={formValues.first_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Middle Name"
          variant="outlined"
          name="middle_name"
          onChange={(e) => handleChange("middle_name", e.target.value)}
          value={formValues.middle_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          placeholder="e.g . Jr., III (if applicable)"
          margin="dense"
          label="Extension Name"
          variant="outlined"
          name="extension_name"
          onChange={(e) => handleChange("extension_name", e.target.value)}
          value={formValues.extension_name || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          fullWidth
          margin="dense"
          type="date"
          label="Date of Birth"
          variant="outlined"
          name="date_of_birth"
          onChange={(e) => handleChange("date_of_birth", e.target.value)}
          value={formValues.date_of_birth || ""}
          SelectProps={{ native: true }}
          InputLabelProps={{
            shrink: true,
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
            name="gender"
            onChange={(e) => handleChange("gender", e.target.value)}
            value={formValues.gender || ""}
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
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.indigenous_status === "Yes" ? true : false}
              onChange={() => handleChange("indigenous_status", "Yes")}
            />
          }
          label="Yes"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.indigenous_status === "No" ? true : false}
              onChange={() => handleChange("indigenous_status", "No")}
            />
          }
          label="No"
        />
      </Grid>
      {formValues.indigenous_status === "Yes" && (
        <Grid item xs={12}>
          <Typography>Please specify:</Typography>
          <TextField
            variant="outlined"
            margin="dense"
            name="indigenous_status_name"
            onChange={(e) =>
              handleChange("indigenous_status_name", e.target.value)
            }
            value={formValues.indigenous_status_name || ""}
          />
        </Grid>
      )}

      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          label="Mother Tongue"
          variant="outlined"
          name="mother_tongue"
          onChange={(e) => handleChange("mother_tongue", e.target.value)}
          value={formValues.mother_tongue || ""}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          label="Religion"
          variant="outlined"
          name="religion"
          onChange={(e) => handleChange("religion", e.target.value)}
          value={formValues.religion || ""}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography style={{ fontWeight: "bold" }}>
          For Learners with Special Education Needs
        </Typography>
        <Typography style={{ fontSize: "14px" }}>
          {
            "Does the learner  special education needs? (i.e. physical, social disablity, medical condition, giftedness, among others) "
          }
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.is_special_education === "Yes" ? true : false}
              onChange={() => handleChange("is_special_education", "Yes")}
            />
          }
          label="Yes"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={formValues.is_special_education === "No" ? true : false}
              onChange={() => handleChange("is_special_education", "No")}
            />
          }
          label="No"
        />
      </Grid>
      {formValues.is_special_education === "Yes" && (
        <Grid item xs={12}>
          <Typography>Please specify:</Typography>
          <TextField
            variant="outlined"
            margin="dense"
            name="is_special_education_name"
            onChange={(e) =>
              handleChange("is_special_education_name", e.target.value)
            }
            value={formValues.is_special_education_name || ""}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography style={{ fontSize: "14px" }}>
          {
            "Do you have any assistive technology devices available at home? (i.e. screen reader, Braille, DAISY)"
          }
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={
                formValues.has_devices_available_at_home === "Yes"
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
                formValues.has_devices_available_at_home === "No" ? true : false
              }
              onChange={() =>
                handleChange("has_devices_available_at_home", "No")
              }
            />
          }
          label="No"
        />
      </Grid>
      {formValues.has_devices_available_at_home === "Yes" && (
        <Grid item xs={12}>
          <Typography>Please specify:</Typography>
          <TextField
            variant="outlined"
            margin="dense"
            name="has_devices_available_at_home_name"
            onChange={(e) =>
              handleChange("has_devices_available_at_home_name", e.target.value)
            }
            value={formValues.has_devices_available_at_home_name || ""}
          />
        </Grid>
      )}

      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          margin="dense"
          label="Email Address"
          variant="outlined"
          name="email"
          onChange={(e) => handleChange("email", e.target.value)}
          value={formValues.email || ""}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          ADDRESS
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          margin="dense"
          label="House Number and Street"
          variant="outlined"
          name="house_number_street"
          onChange={(e) => handleChange("house_number_street", e.target.value)}
          value={formValues.house_number_street || ""}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          margin="dense"
          label="Subdivision/ Village/ Zone"
          variant="outlined"
          name="subdivision_village_zone"
          onChange={(e) =>
            handleChange("subdivision_village_zone", e.target.value)
          }
          value={formValues.subdivision_village_zone || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Barangay"
          variant="outlined"
          name="barangay"
          onChange={(e) => handleChange("barangay", e.target.value)}
          value={formValues.barangay || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="City/ Municipality"
          variant="outlined"
          name="municipality"
          onChange={(e) => handleChange("municipality", e.target.value)}
          value={formValues.municipality || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Province"
          variant="outlined"
          name="province"
          onChange={(e) => handleChange("province", e.target.value)}
          value={formValues.province || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          margin="dense"
          label="Region"
          variant="outlined"
          name="region"
          onChange={(e) => handleChange("region", e.target.value)}
          value={formValues.region || ""}
        />
      </Grid>
    </Fragment>
  );
}

export default StudentInfomation;
