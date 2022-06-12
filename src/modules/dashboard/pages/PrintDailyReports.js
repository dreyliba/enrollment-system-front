import {
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PrintHeader from "../../../components/common/PrintHeader";
import Http from "../../utils/Http";

const useStyles = makeStyles({
  totalInfoBox: {
    marginLeft: 24,
  },
  strand: {
    backgroundColor: "#eee",
    padding: "6px 12px",
    paddingBottom: 0,
    height: "100%",
  },
});

function PrintDailyReports() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [strands, setStrands] = useState([]);
  const [reports, setReports] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    Http.get("/reports/options").then((res) => {
      if (res.data) {
        setStrands(res.data.strands || []);
      }

      fetchingData();
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingData = () => {
    setLoading(true);

    let params = {};

    const filterData = localStorage.getItem("daily-reports-filter");

    if (filterData) {
      params = JSON.parse(filterData);
      setFilters(params);
    }

    Http.get("reports/daily", { params })
      .then((res) => {
        if (res.data) {
          setReports((res.data && res.data.data) || []);

          setTimeout(() => {
            window.print();
            window.close();
          }, 1000);
        }

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const getStrandData = (id) => {
    return reports.filter((item) => item.strand_id === id);
  };

  const getTotalFemale = (list) => {
    return list.filter((item) => item.gender === "Female");
  };

  const getTotalMale = (list) => {
    return list.filter((item) => item.gender === "Male");
  };

  const getTotal4ps = () => {
    return reports.filter((item) => item.is_4ps_benificiary === "Yes").length;
  };

  return (
    <div>
      <PrintHeader />
      <div>
        <Typography>
          Reports (From: {filters.date_from || ""} - {filters.date_to || ""}){" "}
        </Typography>
        <Typography>Grade {filters.level || ""}</Typography>
        {loading && <LinearProgress />}
        <Grid container spacing={1}>
          {strands.map((strand, index) => (
            <Grid item xs={6} md={4} key={index}>
              <div className={classes.strand}>
                <Typography>{strand.name}</Typography>

                <div className={classes.totalInfoBox}>
                  <Typography>
                    Male: {getTotalMale(getStrandData(strand.id)).length}
                  </Typography>
                  <Typography>
                    Female: {getTotalFemale(getStrandData(strand.id)).length}
                  </Typography>
                  <Typography>
                    Total: {getStrandData(strand.id).length}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Typography>4ps Benificiary: {getTotal4ps()}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PrintDailyReports;
