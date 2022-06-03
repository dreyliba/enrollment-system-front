import {
  Checkbox,
  FormControlLabel,
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

function HouseHoldCapcity() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    kinder: "",
    grade_1: "",
    grade_2: "",
    grade_3: "",
    grade_4: "",
    grade_5: "",
    grade_6: "",
    grade_7: "",
    grade_8: "",
    grade_9: "",
    grade_10: "",
    grade_11: "",
    grade_12: "",
    other_grade: "",
    household_member: [],
    available_device: [],
    available_device_others: "",
    internet_connection: [],
    distance_learning: [],
    distance_learning_others: "",
    learning_challenges: [],
    learning_chanllenges_others: "",
  });

  const handleCheckboxChange = (name, value) => {
    setFormValues((prev) => {
      if (prev[name].includes(value)) {
        return {
          ...prev,
          [name]: prev[name].filter((val) => val !== value),
        };
      } else {
        return {
          ...prev,
          [name]: [...prev[name], value],
        };
      }
    });
  };

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
          D. HOUSEHOLD CAPACITY AND ACCESS TO DISTANCE LEARNING
        </Typography>
        <Typography>
          {
            "D1. How many of your household members (including the enrollee) are studying in School Year 2021-2022? Please specify each."
          }
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField variant="outlined" margin="dense" fullWidth label="Kinder" />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 1"
          name="grade_1"
          onChange={(e) => handleChange("grade_1", e.target.value)}
          value={formValues.grade_1 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 2"
          name="grade_2"
          onChange={(e) => handleChange("grade_2", e.target.value)}
          value={formValues.grade_2 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 3"
          name="grade_3"
          onChange={(e) => handleChange("grade_3", e.target.value)}
          value={formValues.grade_3 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 4"
          name="grade_4"
          onChange={(e) => handleChange("grade_4", e.target.value)}
          value={formValues.grade_4 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 5"
          name="grade_5"
          onChange={(e) => handleChange("grade_5", e.target.value)}
          value={formValues.grade_5 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 6"
          name="grade_6"
          onChange={(e) => handleChange("grade_6", e.target.value)}
          value={formValues.grade_6 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade7"
          name="grade_7"
          onChange={(e) => handleChange("grade_7", e.target.value)}
          value={formValues.grade_7 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 8"
          name="grade_8"
          onChange={(e) => handleChange("grade_8", e.target.value)}
          value={formValues.grade_8 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 9"
          name="grade_9"
          onChange={(e) => handleChange("grade_9", e.target.value)}
          value={formValues.grade_9 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 10"
          name="grade_10"
          onChange={(e) => handleChange("grade_10", e.target.value)}
          value={formValues.grade_10 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 11"
          name="grade_11"
          onChange={(e) => handleChange("grade_11", e.target.value)}
          value={formValues.grade_11 || ""}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          variant="outlined"
          margin="dense"
          fullWidth
          label="Grade 12"
          name="grade_12"
          onChange={(e) => handleChange("grade_12", e.target.value)}
          value={formValues.grade_12 || ""}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          placeholder="i.e college, vocational, etc."
          variant="outlined"
          margin="dense"
          fullWidth
          label="Others"
          name="other_grade"
          onChange={(e) => handleChange("other_grade", e.target.value)}
          value={formValues.other_grade || ""}
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
                checked={formValues.household_member.includes("parents")}
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
                checked={formValues.household_member.includes("grand parents")}
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
                    "others (tutors, house helper"
                  )
                }
                checked={formValues.household_member.includes(
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
                checked={formValues.household_member.includes(
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
                checked={formValues.household_member.includes("elder siblings")}
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
                checked={formValues.household_member.includes(
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
                checked={formValues.household_member.includes("none")}
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
                checked={formValues.available_device.includes("cable TV")}
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
                checked={formValues.available_device.includes(
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
                checked={formValues.available_device.includes("tablet")}
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
                checked={formValues.available_device.includes(
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
                checked={formValues.available_device.includes("none")}
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
                checked={formValues.available_device.includes("non-cable TV")}
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
                checked={formValues.available_device.includes("smartphone")}
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
                checked={formValues.available_device.includes("radio")}
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
                checked={formValues.available_device.includes("laptop")}
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
              checked={formValues.available_device.includes("Others")}
            />
          }
          label="Others"
        />
        {formValues.available_device.includes("Others") && (
          <Grid item md={6}>
            <TextField
              label="Others"
              variant="outlined"
              margin="dense"
              name="available_device_others"
              onChange={(e) =>
                handleChange("available_device_others", e.target.value)
              }
              value={formValues.available_device_others || ""}
            />
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography>D4. Is there an internet signal in your area?</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
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
      </Grid>
      <Grid item xs={12} md={6}>
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
              checked={formValues.internet_connection.includes(
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
              checked={formValues.internet_connection.includes(
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
              checked={formValues.internet_connection.includes("computer shop")}
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
              checked={formValues.internet_connection.includes(
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
              checked={formValues.internet_connection.includes("none")}
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
                handleCheckboxChange("distance_learning", "online learning")
              }
              checked={formValues.distance_learning.includes("online learning")}
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
              checked={formValues.distance_learning.includes("Television")}
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
              checked={formValues.distance_learning.includes("Radio")}
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
              checked={formValues.distance_learning.includes(
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
              checked={formValues.distance_learning.includes(
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
              checked={formValues.distance_learning.includes("Others")}
            />
          }
          label="Others"
        />
        {formValues.distance_learning.includes("Others") && (
          <div>
            <TextField
              label="Others"
              variant="outlined"
              margin="dense"
              name="distance_learning_others"
              onChange={(e) =>
                handleChange("distance_learning_others", e.target.value)
              }
              value={formValues.distance_learning_others}
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes(
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
              checked={formValues.learning_challenges.includes("Others")}
            />
          }
          label="Others"
        />
        {formValues.learning_challenges.includes("Others") && (
          <div>
            <TextField
              label="Others"
              variant="outlined"
              margin="dense"
              name="learning_chanllenges_others"
              onChange={(e) => handleChange("learning_chanllenges_others")}
              value={formValues.learning_chanllenges_others || ""}
            />
          </div>
        )}
      </Grid>
    </Fragment>
  );
}

export default HouseHoldCapcity;
