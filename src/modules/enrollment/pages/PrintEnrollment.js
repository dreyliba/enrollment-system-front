import {
  CircularProgress,
  FormLabel,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Http from "../../utils/Http";
import _ from "lodash";
import PrintHeader from "../../../components/common/PrintHeader";

const useStyles = makeStyles({
  content: {
    width: "100%",
    maxWidth: 850,
    margin: "0 auto",
  },
  text: {
    borderBottom: "1px solid #000",
    paddingLeft: 6,
    fontSize: 11,
  },
  label: {
    fontSize: 11,
  },
  field: {
    marginBottom: 4,
    padding: "0 4px",
  },
  header: {
    fontSize: 14,
  },
});

function PrintEnrollment({ match }) {
  const classes = useStyles();
  const { params } = match;
  const [fetching, setFetching] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({});
  useEffect(() => {
    setFetching(true);

    Http.get(`/enrollments/${params.id}`)
      .then((res) => {
        if (res.data.data) {
          setEnrollmentData(res.data.data);

          setTimeout(() => {
            window.print();
          }, 1000);
        }

        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const schoolInfo = {
    school_year: "School Year",
    lrn_status: "LRN Status",
    returning: "Balik Aral",
    grade_level_to_enroll: "Grade Level to Enroll",
    track: "Track",
    strand: "Strand",
    last_year_track: "Last Year Track",
    last_year_strand: "Last Year Strand",
    last_grade_level_completed: "Last Grade Level Completed",
    last_school_yr_completed: "Last School Year Completed",
    last_school_attended_name: "Last School Attended Name",
    last_school_attended_address: "Last School Attended Address",
    last_school_attended_id: "Last School Attended ID",
    school_type: "School Type",
    school_to_enroll_address: "School to enroll address",
    school_to_enroll_in_id: "School ID",
  };

  const studentinfo = {
    psa: "PSA (Birth Certificate Number)",
    lrn: "LRN",
    last_name: "Last Name",
    first_name: "First Name",
    middle_name: "Middle Name",
    extension_name: "Extension Name",
    date_of_birth: "Date of Birth",
    age: "Age",
    gender: "Gender",
    has_children: "Has child/children",
    school_to_enroll_name: "School to enroll in",
    indigenous_status:
      "Belonging to the Indigenous People (IP) Community/Indigenous Cultural Community",
    indigenous_status_name: "Indigenous People Info",
    mother_tongue: "Mother Tongue",
    religion: "Religion",
    is_special_education:
      "Does the learner special education needs? (i.e. physical, social disablity, medical condition, giftedness, among others)",
    is_special_education_name: "Special Education Info",
    has_devices_available_at_home:
      "Do you have any assistive technology devices available at home? (i.e. screen reader, Braille, DAISY)",
    has_devices_available_at_home_name: "Assistive Technology Device Name",
    email: "Email",
    house_number_street: "House Number and Street",
    subdivision_village_zone: "Subdivision/ Village/ Zone",
    barangay: "Barangay",
    municipality: "Municipality",
    province: "Province",
    region: "Region",
  };

  const parentinfo = {
    father: "Father's Name",
    father_contact: "Contact Info",
    father_heighest_edu_attainment: "Heighest Educational Attainment",
    mother: "Mother's Maiden Name",
    mother_contact: "Contact Info",
    mother_heighest_edu_attainment: "Heighest Educational Attainment",
    guardian: "Guardian's Name",
    guardian_contact: "Contact Info",
    guardian_heighest_edu_attainment: "Heighest Educational Attainment",
    is_4ps_benificiary: "Is your family a beneficiary of 4Ps?",
  };

  const householdcapacities = {
    kinder: "Kinder",
    grade_1: "Grade 1",
    grade_2: "Grade 2",
    grade_3: "Grade 3",
    grade_4: "Grade 4",
    grade_5: "Grade 5",
    grade_6: "Grade 6",
    grade_7: "Grade 7",
    grade_8: "Grade 8",
    grade_9: "Grade 9",
    grade_10: "Grade 10",
    grade_11: "Grade 11",
    grade_12: "Grade 12",
    other_grade: "Other Grade",
    household_member:
      "Who among the the household members can provide instructional support to the child's distance learning?",
    available_device:
      "What devices are available at home that the learner can use for learning?",
    has_internet_connection: "Is there an internet signal in your area?",
    internet_connection: "How do you connect to the internet?",
    distance_learning:
      "What distance learning modality/ies do you prefer for you child?",
    distance_learning_others: "Other distance learning",
    learning_challenges:
      "What are the challenges that may affect your child's learning process through distance education?",
    learning_challenges_others:
      "Other challenges that may affect child's learning process through distance.",
  };

  const limitedfacetoface = {
    limited_classes_allowed:
      "In case limited face to face classes will be allowed, are you willing to allow your child/children to participate?",
    limited_face_to_face: "Limited Face to Face Reason",
    limited_face_to_face_others: "Other Limited Face to Face",
    // enrolled_date: "Enrolled Date",
  };

  const getValues = (values) => {
    const data = [];
    for (const key in values) {
      if (Array.isArray(enrollmentData[key])) {
        data.push({
          value: enrollmentData[key].join(","),
          label: values[key],
        });
      } else if (enrollmentData[key] && _.isObject(enrollmentData[key])) {
        data.push({
          value: enrollmentData[key].name || "",
          label: values[key],
        });
      } else {
        data.push({ value: enrollmentData[key] || "", label: values[key] });
      }
    }

    return renderValues(data);
  };

  const renderValues = (values) => {
    return values.map((val, index) => (
      <Grid key={index} item xs={4}>
        <div className={classes.field}>
          <FormLabel className={classes.label}>{val.label}</FormLabel>
          <div>
            <Typography className={classes.text}>{val.value || "-"}</Typography>
          </div>
        </div>
      </Grid>
    ));
  };

  return (
    <div className={classes.content}>
      <PrintHeader />
      <Typography align="center" variant="h6">
        Enrollment Form
      </Typography>
      {fetching ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.header}>
              A. GRADE LEVEL AND SCHOOL INFORMATION
            </Typography>
          </Grid>
          {getValues(schoolInfo)}
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.header}>
              B. STUDENT INFORMATION
            </Typography>
          </Grid>
          {getValues(studentinfo)}
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.header}>
              C. PARENT/ GUARDIAN INFORMATION
            </Typography>
          </Grid>
          {getValues(parentinfo)}
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.header}>
              D. HOUSEHOLD CAPACITY AND ACCESS TO DISTANCE LEARNING
            </Typography>
            <FormLabel className={classes.label}>
              D1. How many of your household members (including the enrollee)
              are studying in School Year 2021-2022? Please specify each.
            </FormLabel>
          </Grid>
          {getValues(householdcapacities)}
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.header}>
              E. LIMITED FACE TO FACE
            </Typography>
          </Grid>
          {getValues(limitedfacetoface)}
          <Grid item xs={12}>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                justifyContent: "flex-end",
                textAlign: "center",
              }}
            >
              <div>
                <span
                  style={{ borderBottom: "1px solid #000", padding: "0 24px" }}
                >
                  {(enrollmentData.user && enrollmentData.user.full_name) || ""}
                </span>
                <span style={{ display: "block" }}>Enrolling Teacher</span>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default PrintEnrollment;
