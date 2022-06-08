import {
  Grid,
  makeStyles,
  Typography,
  Button,
  LinearProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FormField from "../../../components/common/FormField";
import SelectField from "../../../components/common/SelectField";
import { levelOptions } from "../../utils/helper";
import Http from "../../utils/Http";
import moment from "moment";
import PrintIcon from "@material-ui/icons/Print";

const useStyles = makeStyles({
  totalInfoBox: {
    marginLeft: 24,
  },
  strand: {
    backgroundColor: "#eee",
    padding: "6px 12px",
    height: "100%",
  },
});
function Dashboard() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [strands, setStrands] = useState([]);
  const [reports, setReports] = useState([]);

  const [filters, setFilters] = useState({
    level: "",
    date_from: moment().format("YYYY-MM-DD"),
    date_to: moment().format("YYYY-MM-DD"),
  });

  useEffect(() => {
    Http.get("/reports/options").then((res) => {
      if (res.data) {
        setStrands(res.data.strands || []);
      }

      fetchingData();
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchingData = (params = {}) => {
    setLoading(true);
    Http.get("reports/daily", { params: { ...filters, ...params } })
      .then((res) => {
        if (res.data) {
          setReports((res.data && res.data.data) || []);
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

  const handleFilterChange = (name, value) => {
    const newValues = {
      [name]: value,
    };

    if (name === "date_from") {
      newValues.date_to = value;
    }

    fetchingData(newValues);

    setFilters((prev) => ({
      ...prev,
      ...newValues,
    }));
  };

  const handlePrint = () => {
    localStorage.setItem("daily-reports-filter", JSON.stringify(filters));

    const win = window.open("/reports/print-daily", "_blank");
    win.focus();
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Reports</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <SelectField
            label="Grade"
            options={levelOptions()}
            value={filters.level}
            onChange={(e) => handleFilterChange("level", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormField
            label="Date From"
            type="date"
            shrinkLabel
            value={filters.date_from}
            onChange={(e) => handleFilterChange("date_from", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <FormField
            label="Date To"
            type="date"
            shrinkLabel
            inputProps={{ min: filters.date_from }}
            value={filters.date_to}
            onChange={(e) => handleFilterChange("date_to", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: 10 }}
            onClick={handlePrint}
            fullWidth
          >
            <PrintIcon />
            Print
          </Button>
        </Grid>
      </Grid>
      {loading && <LinearProgress />}
      <Grid container spacing={1}>
        {strands.map((strand, index) => (
          <Grid item xs={12} md={4} key={index}>
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
  );
}

export default Dashboard;
