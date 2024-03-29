import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import EnrollmentContext from "../context/EnrollmentContent";

const useStyles = makeStyles({
  titleHandler: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

function LimitedFtoF() {
  const classes = useStyles();

  const { formValues, handleChange } = useContext(EnrollmentContext);

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          E. LIMITED FACE TO FACE
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl error={formValues.errors.has("limited_classes_allowed")}>
          <FormLabel>
            E.1 In case limited face to face classes will be allowed, are you
            willing to allow your child/children to participate?
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_classes_allowed === "Yes"
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange("limited_classes_allowed", "Yes")
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
                    formValues.values.limited_classes_allowed === "No"
                      ? true
                      : false
                  }
                  onChange={() => handleChange("limited_classes_allowed", "No")}
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("limited_classes_allowed") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>
      {formValues.values.limited_classes_allowed === "No" && (
        <>
          <Grid item xs={12}>
            <Typography>
              Please select only 1 major cosideration or state reason.
            </Typography>
          </Grid>

          <Grid item md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_face_to_face.includes(
                      "Fear of Getting Infectec of Corona Virus"
                    )
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange(
                      "limited_face_to_face",
                      "Fear of Getting Infectec of Corona Virus"
                    )
                  }
                />
              }
              label="Fear of Getting Infectec of Corona Virus"
            />
          </Grid>
          <Grid item md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_face_to_face.includes(
                      "Presence of Arm Conflict"
                    )
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange(
                      "limited_face_to_face",
                      "Presence of Arm Conflict"
                    )
                  }
                />
              }
              label="Presence of Arm Conflict"
            />
          </Grid>
          <Grid item md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_face_to_face.includes(
                      "Helping in household chores or working"
                    )
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange(
                      "limited_face_to_face",
                      "Helping in household chores or working"
                    )
                  }
                />
              }
              label="Helping in household chores or working"
            />
          </Grid>
          <Grid item md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_face_to_face.includes(
                      "Existing Illness or health related concerns"
                    )
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange(
                      "limited_face_to_face",
                      "Existing Illness or health related concerns"
                    )
                  }
                />
              }
              label="Existing Illness or health related concerns"
            />
          </Grid>
          <Grid item md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_face_to_face.includes(
                      "Limited or no available transportation from home to school and vice versa"
                    )
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange(
                      "limited_face_to_face",
                      "Limited or no available transportation from home to school and vice versa"
                    )
                  }
                />
              }
              label="Limited or no available transportation from home to school and vice versa"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.limited_face_to_face.includes("Others")
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange("limited_face_to_face", "Others")
                  }
                />
              }
              label="Others"
            />

            {formValues.values.limited_face_to_face.includes("Others") && (
              <div>
                <TextField
                  label="Others, specify"
                  variant="outlined"
                  margin="dense"
                  name="limited_face_to_face_others"
                  onChange={(e) =>
                    handleChange("limited_face_to_face_others", e.target.value)
                  }
                  value={formValues.values.limited_face_to_face_others || ""}
                />
              </div>
            )}
          </Grid>
        </>
      )}
    </Fragment>
  );
}

export default LimitedFtoF;
