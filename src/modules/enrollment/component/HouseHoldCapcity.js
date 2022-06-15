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

function HouseHoldCapcity() {
  const classes = useStyles();
  const { formValues, handleChange, handleCheckboxChange } =
    useContext(EnrollmentContext);

  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography className={classes.titleHandler} variant="h6">
          D. HOUSEHOLD CAPACITY AND ACCESS TO DISTANCE LEARNING
        </Typography>
        <Typography>
          {
            "D1. How many of your household members (including the enrollee) are studying in School Year 2021-2022? Please specify each."
          }
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Kinder"
          name="kinder"
          onChange={(e) => handleChange("kinder", e.target.value)}
          value={formValues.values.kinder || ""}
          errors={formValues.errors}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 1"
          name="grade_1"
          onChange={(e) => handleChange("grade_1", e.target.value)}
          value={formValues.values.grade_1 || ""}
          errors={formValues.errors}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 2"
          name="grade_2"
          onChange={(e) => handleChange("grade_2", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_2 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 3"
          name="grade_3"
          onChange={(e) => handleChange("grade_3", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_3 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 4"
          name="grade_4"
          onChange={(e) => handleChange("grade_4", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_4 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 5"
          name="grade_5"
          onChange={(e) => handleChange("grade_5", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_5 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 6"
          name="grade_6"
          onChange={(e) => handleChange("grade_6", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_6 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade7"
          name="grade_7"
          onChange={(e) => handleChange("grade_7", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_7 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 8"
          name="grade_8"
          onChange={(e) => handleChange("grade_8", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_8 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 9"
          name="grade_9"
          onChange={(e) => handleChange("grade_9", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_9 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 10"
          name="grade_10"
          onChange={(e) => handleChange("grade_10", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_10 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 11"
          name="grade_11"
          onChange={(e) => handleChange("grade_11", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_11 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <FormField
          label="Grade 12"
          name="grade_12"
          onChange={(e) => handleChange("grade_12", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.grade_12 || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <FormField
          placeholder="i.e college, vocational, etc."
          label="Others"
          name="other_grade"
          onChange={(e) => handleChange("other_grade", e.target.value)}
          errors={formValues.errors}
          value={formValues.values.other_grade || ""}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          D2. Who among the the household members can provide instructional
          support to the child's distance learning? Choose all the applies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("household_member", "parents")
                }
                checked={formValues.values.household_member.includes("parents")}
              />
            }
            label="parents"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("household_member", "grand parents")
                }
                checked={formValues.values.household_member.includes(
                  "grand parents"
                )}
              />
            }
            label="grand parents"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange(
                    "household_member",
                    "others (tutors, house helper)"
                  )
                }
                checked={formValues.values.household_member.includes(
                  "others (tutors, house helper)"
                )}
              />
            }
            label="others (tutors, house helper)"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange(
                    "household_member",
                    "able to do independent thing"
                  )
                }
                checked={formValues.values.household_member.includes(
                  "able to do independent thing"
                )}
              />
            }
            label="able to do independent thing"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("household_member", "elder siblings")
                }
                checked={formValues.values.household_member.includes(
                  "elder siblings"
                )}
              />
            }
            label="elder siblings"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange(
                    "household_member",
                    "extended members of the family"
                  )
                }
                checked={formValues.values.household_member.includes(
                  "extended members of the family"
                )}
              />
            }
            label="extended members of the family"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("household_member", "none")
                }
                checked={formValues.values.household_member.includes("none")}
              />
            }
            label="none"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          D3. What devices are available at home that the learner can use for
          learning? Check all that applies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "cable TV")
                }
                checked={formValues.values.available_device.includes(
                  "cable TV"
                )}
              />
            }
            label="cable TV"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "basic cellphone")
                }
                checked={formValues.values.available_device.includes(
                  "basic cellphone"
                )}
              />
            }
            label="basic cellphone"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "tablet")
                }
                checked={formValues.values.available_device.includes("tablet")}
              />
            }
            label="tablet"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "desktop computer")
                }
                checked={formValues.values.available_device.includes(
                  "desktop computer"
                )}
              />
            }
            label="desktop computer"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "none")
                }
                checked={formValues.values.available_device.includes("none")}
              />
            }
            label="none"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "non-cable TV")
                }
                checked={formValues.values.available_device.includes(
                  "non-cable TV"
                )}
              />
            }
            label="non-cable TV"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "smartphone")
                }
                checked={formValues.values.available_device.includes(
                  "smartphone"
                )}
              />
            }
            label="smartphone"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "radio")
                }
                checked={formValues.values.available_device.includes("radio")}
              />
            }
            label="radio"
          />
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={() =>
                  handleCheckboxChange("available_device", "laptop")
                }
                checked={formValues.values.available_device.includes("laptop")}
              />
            }
            label="laptop"
          />
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("available_device", "Others")
              }
              checked={formValues.values.available_device.includes("Others")}
            />
          }
          label="Others"
        />
        {formValues.values.available_device.includes("Others") && (
          <Grid item md={6}>
            <FormField
              label="Others"
              name="available_device_others"
              onChange={(e) =>
                handleChange("available_device_others", e.target.value)
              }
              value={formValues.values.available_device_others || ""}
            />
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} md={8}>
        <FormControl error={formValues.errors.has("has_internet_connection")}>
          <FormLabel>*D4. Is there an internet signal in your area?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={
                    formValues.values.has_internet_connection === "Yes"
                      ? true
                      : false
                  }
                  onChange={() =>
                    handleChange("has_internet_connection", "Yes")
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
                    formValues.values.has_internet_connection === "No"
                      ? true
                      : false
                  }
                  onChange={() => handleChange("has_internet_connection", "No")}
                />
              }
              label="No"
            />
          </FormGroup>
          {formValues.errors.has("has_internet_connection") && (
            <FormHelperText error>This field is required</FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography>
          D5. How do you connect to the internet? Choose all the that applies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("internet_connection", "own mobile data")
              }
              checked={formValues.values.internet_connection.includes(
                "own mobile data"
              )}
            />
          }
          label="own mobile data"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "internet_connection",
                  "own broadband internet (DSL, wireless fiber, satellite)"
                )
              }
              checked={formValues.values.internet_connection.includes(
                "own broadband internet (DSL, wireless fiber, satellite)"
              )}
            />
          }
          label="own broadband internet (DSL, wireless fiber, satellite)"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("internet_connection", "computer shop")
              }
              checked={formValues.values.internet_connection.includes(
                "computer shop"
              )}
            />
          }
          label="computer shop"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "internet_connection",
                  "other places outside the home with internet connection (library, barangay/ municipal hall, neighbor, relatives)"
                )
              }
              checked={formValues.values.internet_connection.includes(
                "other places outside the home with internet connection (library, barangay/ municipal hall, neighbor, relatives)"
              )}
            />
          }
          label="other places outside the home with internet connection (library, barangay/ municipal hall, neighbor, relatives)"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("internet_connection", "none")
              }
              checked={formValues.values.internet_connection.includes("none")}
            />
          }
          label="none"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography>
          D6. What distance learning modality/ies do you prefer for you child?
          Choose all that applies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("distance_learning", "face to face")
              }
              checked={formValues.values.distance_learning.includes(
                "face to face"
              )}
            />
          }
          label="Face to Face"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("distance_learning", "online learning")
              }
              checked={formValues.values.distance_learning.includes(
                "online learning"
              )}
            />
          }
          label="online learning"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("distance_learning", "Television")
              }
              checked={formValues.values.distance_learning.includes(
                "Television"
              )}
            />
          }
          label="Television"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("distance_learning", "Radio")
              }
              checked={formValues.values.distance_learning.includes("Radio")}
            />
          }
          label="Radio"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("distance_learning", "modular learning")
              }
              checked={formValues.values.distance_learning.includes(
                "modular learning"
              )}
            />
          }
          label="modular learning"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "distance_learning",
                  "combination of face to face with other modalities"
                )
              }
              checked={formValues.values.distance_learning.includes(
                "combination of face to face with other modalities"
              )}
            />
          }
          label="combination of face to face with other modalities"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("distance_learning", "Others")
              }
              checked={formValues.values.distance_learning.includes("Others")}
            />
          }
          label="Others"
        />
        {formValues.values.distance_learning.includes("Others") && (
          <div>
            <FormField
              fullWidth={false}
              label="Others"
              name="distance_learning_others"
              onChange={(e) =>
                handleChange("distance_learning_others", e.target.value)
              }
              value={formValues.values.distance_learning_others}
            />
          </div>
        )}
      </Grid>

      <Grid item xs={12} md={8}>
        <Typography>
          D7. What are the challenges that may affect your child's learning
          process through distance education? Choose all that applies.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "lack of available gadgets/ equipment"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "lack of available gadgets/ equipment"
              )}
            />
          }
          label="lack of available gadgets/ equipment"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "insufficient load/ data allowance"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "insufficient load/ data allowance"
              )}
            />
          }
          label="insufficient load/ data allowance"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "unstable mobile/ internet connection"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "unstable mobile/ internet connection"
              )}
            />
          }
          label="unstable mobile/ internet connection"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "existing health condition/s"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "existing health condition/s"
              )}
            />
          }
          label="existing health condition/s"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "difficulty in independent learning"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "difficulty in independent learning"
              )}
            />
          }
          label="difficulty in independent learning"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "conflict with other activities (i.e., house chores)"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "conflict with other activities (i.e., house chores)"
              )}
            />
          }
          label="conflict with other activities (i.e., house chores)"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "high electrical consumption"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "high electrical consumption"
              )}
            />
          }
          label="high electrical consumption"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange(
                  "learning_challenges",
                  "distractions (i.e., social media, noise from community/neighbor)"
                )
              }
              checked={formValues.values.learning_challenges.includes(
                "distractions (i.e., social media, noise from community/neighbor)"
              )}
            />
          }
          label="distractions (i.e., social media, noise from community/neighbor)"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              onChange={() =>
                handleCheckboxChange("learning_challenges", "Others")
              }
              checked={formValues.values.learning_challenges.includes("Others")}
            />
          }
          label="Others"
        />
        {formValues.values.learning_challenges.includes("Others") && (
          <div>
            <FormField
              fullWidth={false}
              label="Others"
              name="learning_challenges_others"
              onChange={(e) => handleChange("learning_challenges_others")}
              value={formValues.values.learning_challenges_others || ""}
            />
          </div>
        )}
      </Grid>
    </Fragment>
  );
}

export default HouseHoldCapcity;
