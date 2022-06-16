import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PrintHeader from "../../../components/common/PrintHeader";
import PrintFooter from "../../../components/common/PrintFooter";
import Http from "../../utils/Http";
const useStyles = makeStyles({
  content: {
    maxWidth: 780,
    width: "100%",
    margin: "0 auto",
  },
  cert: {
    fontFamily: "Bodoni MT",
    fontSize: 20,
    letterSpacing: 3,
    textAlign: "center",
  },
  school_year: {
    textAlign: "center",
    fontFamily: "Arial",
  },
  date: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 12,
  },
  dateLine: {
    borderTop: "1px solid black",
    display: "block",
    textAlign: "center",
    width: 150,
  },
  introtxt: {
    paddingLeft: 50,
    marginTop: 10,
  },
  enrollingTeacher: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 16,
    marginBottom: 10,
  },
  name: {
    borderBottom: "1px solid #000",
    padding: "0 24px",
    textAlign: "center",
    margin: "0 12px",
  },
  grade: {
    borderBottom: "1px solid #000",
    padding: "0 24px",
    textAlign: "center",
    margin: "0 12px",
  },
  teacher: {
    borderBottom: "1px solid #000",
    padding: "0 24px",
    textAlign: "center",
    margin: "0 12px",
  },
  dateInfo: {
    borderBottom: "1px solid #000",
    padding: "0 12px",
    textAlign: "center",
    margin: "0 12px",
  },
});

function PrintCompletionForm({ match }) {
  const { params } = match;
  const classes = useStyles();

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
            // window.close();
          }, 1000);
        }

        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
      }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <div className={classes.content}>
      {fetching ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <PrintHeader />
          <Typography className={classes.cert}>
            CERTIFICATE OF ENROLLMENT
          </Typography>
          <Typography className={classes.school_year}>
            School Year: <span>{enrollmentData.school_year || ""}</span>
          </Typography>
          <Typography className={classes.date}>
            Date:
            <span className={classes.dateInfo}>
              {enrollmentData.enrolled_date || ""}
            </span>
          </Typography>
          <Typography>TO WHOM IT MAY CONCERN:</Typography>
          <Typography className={classes.introtxt}>
            THIS IS TO CERTIFY that
            <span className={classes.name}>
              {(enrollmentData.full_name &&
                enrollmentData.full_name.toUpperCase()) ||
                ""}
            </span>
            is officially enrolled as a regular/an irregular
            <span className={classes.grade}>
              Grade {enrollmentData.grade_level_to_enroll || ""}
            </span>
            student of this school.
          </Typography>
          <Typography className={classes.enrollingTeacher}>
            Enrolling Teacher:
            <span className={classes.teacher}>
              {(enrollmentData.user && enrollmentData.user.full_name) || ""}
            </span>
          </Typography>

          <PrintFooter />
        </>
      )}
    </div>
  );
}

export default PrintCompletionForm;
