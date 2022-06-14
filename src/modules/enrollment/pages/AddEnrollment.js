import {
  Button,
  Card,
  FormHelperText,
  Grid,
  makeStyles,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Revalidate } from "../../utils/helper";
import HouseHoldCapcity from "../component/HouseHoldCapcity";
import LimitedFtoF from "../component/LimitedFtoF";
import ParentGuardianInfo from "../component/ParentGuardianInfo";
import SchoolInformation from "../component/SchoolInformation";
import StudentInfomation from "../component/StudentInfomation";
import EnrollmentContext from "../context/EnrollmentContent";
import Http from "../../utils/Http";
import MessageModal from "../../../components/MessageModal";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  parentContainer: {
    padding: 5,
  },
});

const validator = Revalidate({
  school_year: "required",
  lrn_status: "required",
  returning: "",
  grade_level_to_enroll: "required",
  last_grade_level_completed: "",
  track_id: "",
  last_year_track_id: "",
  strand_id: "",
  last_year_strand_id: "",
  last_school_yr_completed: "",
  last_school_attended_name: "",
  last_school_attended_address: "",
  last_school_attended_id: "",
  school_type: "required",
  school_to_enroll_name: "required",
  school_to_enroll_address: "required",
  school_to_enroll_in_id: "required",

  kinder: "integer",
  grade_1: "integer",
  grade_2: "integer",
  grade_3: "integer",
  grade_4: "integer",
  grade_5: "integer",
  grade_6: "integer",
  grade_7: "integer",
  grade_8: "integer",
  grade_9: "integer",
  grade_10: "integer",
  grade_11: "integer",
  grade_12: "integer",
  other_grade: "integer",
  household_member: "",
  available_device: "",
  available_device_others: "",
  internet_connection: "",
  has_internet_connection: "required",
  distance_learning: "",
  distance_learning_others: "",
  learning_challenges: "",
  learning_challenges_others: "",

  limited_face_to_face: "",
  limited_classes_allowed: "required",
  limited_face_to_face_others: "",

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
  is_4ps_benificiary: "required",

  psa: "",
  lrn: "",
  last_name: "required",
  first_name: "required",
  middle_name: "",
  extension_name: "",
  date_of_birth: "required",
  gender: "required",
  has_children: "required",
  indigenous_status: "required",
  indigenous_status_name: "",
  mother_tongue: "required",
  religion: "required",
  is_special_education: "required",
  is_special_education_name: "",
  has_devices_available_at_home: "required",
  has_devices_available_at_home_name: "",
  email: "email",
  house_number_street: "",
  subdivision_village_zone: "",
  barangay: "required",
  municipality: "required",
  province: "required",
  region: "required",
});

const dictionary = {
  messages: {
    required: "This field is required",
    email: "This field must be a valid email address",
    integer: "This field must be an integer",
  },
};

validator.localize("en", dictionary);

export default function AddEnrollment() {
  const classes = useStyles();
  const history = useHistory();

  const [tracks, setTracks] = useState([]);
  const [strands, setStrands] = useState([]);
  const [disabilityCategories, setDisabilityCategories] = useState([]);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Http.get(`/enrollments/options`).then((res) => {
      if (res.data.tracks) {
        setTracks(res.data.tracks);
        setStrands(res.data.strands);
        setDisabilityCategories(res.data.disability_categories);
      }
    });
  }, []);

  const [formValues, setFormValues] = useState({
    values: {
      school_year: "",
      lrn_status: "",
      returning: "",
      grade_level_to_enroll: "",
      track_id: "",
      last_year_track_id: "",
      strand_id: "",
      last_year_strand_id: "",
      last_grade_level_completed: "",
      last_school_yr_completed: "",
      last_school_attended_name: "",
      last_school_attended_address: "",
      last_school_attended_id: "",
      school_type: "",
      school_to_enroll_name: "Hilongos National Vocational School",
      school_to_enroll_address: "R.V Fulache Hilongos, Leyte",
      school_to_enroll_in_id: "303374",

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
      has_internet_connection: "",
      internet_connection: [],
      distance_learning: [],
      distance_learning_others: "",
      learning_challenges: [],
      learning_challenges_others: "",

      limited_face_to_face: "",
      limited_classes_allowed: "Yes",
      limited_face_to_face_others: "",

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
      is_4ps_benificiary: "",

      psa: "",
      lrn: "",
      last_name: "",
      first_name: "",
      middle_name: "",
      extension_name: "",
      date_of_birth: "",
      gender: "",
      has_children: "",
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
    },
    errors: validator.errors,
  });

  const handleCheckboxChange = (name, value) => {
    setFormValues((prev) => {
      if (prev.values[name].includes(value)) {
        return {
          ...prev,
          values: {
            ...prev.values,
            [name]: prev.values[name].filter((val) => val !== value),
          },
        };
      } else {
        return {
          ...prev,
          values: {
            ...prev.values,
            [name]: [...prev.values[name], value],
          },
        };
      }
    });
  };

  const handleChange = useCallback(
    (name, value, isUpperCase = false) => {
      let newValues = {
        [name]: isUpperCase ? value.toUpperCase() : value,
      };

      if (
        name === "indigenous_status" &&
        formValues.values.indigenous_status === "No"
      ) {
        newValues.indigenous_status_name = "";
      }

      if (
        name === "is_special_education" &&
        formValues.values.is_special_education === "No"
      ) {
        newValues.is_special_education_name = "";
      }

      if (
        name === "has_devices_available_at_home" &&
        formValues.values.has_devices_available_at_home === "No"
      ) {
        newValues.has_devices_available_at_home_name = "";
      }

      if (
        name === "available_device" &&
        !formValues.values.available_device.includes("Others")
      ) {
        newValues.available_device_others = "";
      }

      if (
        name === "distance_learning" &&
        !formValues.values.distance_learning.includes("Others")
      ) {
        newValues.distance_learning_others = "";
      }

      if (
        name === "learning_challenges" &&
        !formValues.values.learning_challenges.includes("Others")
      ) {
        newValues.learning_challenges_others = "";
      }

      if (
        name === "limited_classes_allowed" &&
        formValues.values.limited_classes_allowed === "Yes"
      ) {
        newValues.limited_face_to_face = [];
        newValues.limited_face_to_face_others = "";
      }

      setFormValues((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          ...newValues,
        },
      }));

      const { errors } = validator;
      errors.remove(name);

      validator.validate(name, value).then(() => {
        setFormValues((prev) => ({
          ...prev,
          errors,
        }));
      });
    },
    [formValues.values]
  );

  const providerValue = useMemo(
    () => ({ formValues, setFormValues, handleChange, handleCheckboxChange }),
    [formValues, setFormValues, handleChange]
  );

  const handleValidate = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        handleSubmit();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    Http.post(`/enrollments`, formValues.values)
      .then((res) => {
        if (res.data.code === 200) {
          setShowModal(true);
          handleReset();
        }

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleReset = () => {
    const values = {};

    for (const key in formValues.values) {
      if (Array.isArray(formValues.values[key])) {
        values[key] = [];
      } else {
        values[key] = "";
      }
    }

    setFormValues((prev) => ({
      ...prev,
      values,
    }));
  };

  const handleClose = () => {
    setShowModal(false);
    history.push("/enrollments");
  };

  return (
    <div>
      <EnrollmentContext.Provider value={providerValue}>
        <Card className={classes.parentContainer}>
          <Grid container spacing={1}>
            <SchoolInformation tracks={tracks} strands={strands} />
            <StudentInfomation disabilityCategories={disabilityCategories} />

            <ParentGuardianInfo />
            <HouseHoldCapcity />
            <LimitedFtoF />
            <Grid item xs={12}>
              {formValues.errors.items &&
                formValues.errors.items.length > 0 && (
                  <FormHelperText error>
                    Some information is required!
                  </FormHelperText>
                )}
              {formValues.values.grade_level_to_enroll > 10 &&
                formValues.values.track_id === "" && (
                  <Typography color="error">
                    Track and strand information is required
                  </Typography>
                )}

              {formValues.values.last_grade_level_completed > 10 &&
                formValues.values.last_year_track_id === "" && (
                  <Typography color="error">
                    Last grade level track and strand information is required
                  </Typography>
                )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleValidate}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </EnrollmentContext.Provider>

      <MessageModal
        open={showModal}
        handleClose={handleClose}
        message="Student Successfully Enrolled"
      />
    </div>
  );
}
