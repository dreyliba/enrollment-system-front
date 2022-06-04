import { Card, Grid, makeStyles } from "@material-ui/core";
import React, { createContext, useContext, useMemo, useState } from "react";
import { Revalidate } from "../../utils/helper";
import HouseHoldCapcity from "../component/HouseHoldCapcity";
import LimitedFtoF from "../component/LimitedFtoF";
import ParentGuardianInfo from "../component/ParentGuardianInfo";
import SchoolInformation from "../component/SchoolInformation";
import StudentInfomation from "../component/StudentInfomation";
import EnrollmentContext from "../context/EnrollmentContent";
const useStyles = makeStyles({
  parentContainer: {
    padding: 5,
  },
});

const validator = Revalidate({
  school_year: "",
  lrn_status: "",
  returning: "",
  grade_level_to_enroll: "",
  last_grade_level_completed: "",
  last_school_yr_completed: "",
  last_school_attended_name: "",
  last_school_attended_address: "",
  last_school_attended_id: "",
  school_type: "",
  school_to_enroll_name: "",
  school_to_enroll_address: "",
  school_to_enroll_in_id: "",

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
  household_member: "",
  available_device: "",
  available_device_others: "",
  internet_connection: "",
  distance_learning: "",
  distance_learning_others: "",
  learning_challenges: "",
  learning_chanllenges_others: "",

  limited_face_to_face: "",
  limited_classes_allowed: "",
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
  is_benificiary: "",

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

const dictionary = {
  messages: {
    required: "This field is required",
    email: "This field must be a valid email address",
    integer: "This field must be an integer",
  },
};

validator.localize("en", dictionary);

export default function Enrollment() {
  const classes = useStyles();

  const [formValues, setFormValues] = useState({
    values: {
      school_year: "",
      lrn_status: "",
      returning: "",
      grade_level_to_enroll: "",
      last_grade_level_completed: "",
      last_school_yr_completed: "",
      last_school_attended_name: "",
      last_school_attended_address: "",
      last_school_attended_id: "",
      school_type: "",
      school_to_enroll_name: "",
      school_to_enroll_address: "",
      school_to_enroll_in_id: "",

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

      limited_face_to_face: [],
      limited_classes_allowed: "",
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
      is_benificiary: "",

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
    },
    errors: validator.errors,
  });

  const handleCheckboxChange = (name, value) => {
    setFormValues((prev) => {
      if (prev[name].includes(value)) {
        return {
          ...prev,
          values: {
            ...prev.values,
            [name]: prev[name].filter((val) => val !== value),
          },
        };
      } else {
        return {
          ...prev,
          values: {
            ...prev.values,
            [name]: [...prev[name], value],
          },
        };
      }
    });
  };

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
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
  };

  const providerValue = useMemo(
    () => ({ formValues, setFormValues, handleChange, handleCheckboxChange }),
    [formValues, setFormValues]
  );

  return (
    <div>
      <EnrollmentContext.Provider value={providerValue}>
        <Card className={classes.parentContainer}>
          <Grid container spacing={1}>
            <SchoolInformation />
            <StudentInfomation />
            <ParentGuardianInfo />
            <HouseHoldCapcity />
            <LimitedFtoF />
          </Grid>
        </Card>
      </EnrollmentContext.Provider>
    </div>
  );
}
