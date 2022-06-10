import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Http from "../../utils/Http";

const useStyles = makeStyles({
  content: {
    width: "100%",
    maxWidth: 850,
    margin: "0 auto",
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

          // setTimeout(() => {
          //   window.print();
          //   window.close();
          // }, 1000);
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
  };

  const getValues = (values) => {
    const data = [];
    for (const key in values) {
      if (typeof enrollmentData[key] !== "undefined") {
        if (typeof enrollmentData[key] === "string") {
          data.push({ value: enrollmentData[key], label: values[key] });
        }

        if (Array.isArray(enrollmentData[key])) {
          data.push({
            value: enrollmentData[key].join(","),
            label: values[key],
          });
        }
      }
    }

    return renderValues(data);
  };

  const renderValues = (values) => {
    return values.map((val, index) => (
      <Grid key={index} item xs={6}>
        <Typography>
          {val.label} : {val.value}
        </Typography>
      </Grid>
    ));
  };

  return (
    <div className={classes.content}>
      {fetching ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6">
              A. GRADE LEVEL AND SCHOOL INFORMATION
            </Typography>
          </Grid>
          {getValues(schoolInfo)}
          <Grid item xs={12}>
            <Typography variant="h6">
              A. GRADE LEVEL AND SCHOOL INFORMATION
            </Typography>
          </Grid>
          {getValues(schoolInfo)}
        </Grid>
      )}
    </div>
  );
}

export default PrintEnrollment;
