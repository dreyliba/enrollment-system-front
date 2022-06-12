import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
import { levelOptions } from "../../utils/helper";
import Http from "../../utils/Http";
import {
  Grid,
  LinearProgress,
  makeStyles,
  TablePagination,
  Typography,
} from "@material-ui/core";
import SelectField from "../../../components/common/SelectField";
import FormField from "../../../components/common/FormField";
import moment from "moment";

const useStyles = makeStyles({
  tblHeader: {
    backgroundColor: "#ccc",
  },
  totalStudent: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
});

function Report() {
  const classes = useStyles();
  const [tracks, setTracks] = useState([]);
  const [strands, setStrands] = useState([]);

  const [enrollments, setEnrollments] = useState({
    data: [],
    meta: {},
  });

  const [filters, setFilters] = useState({
    limit: 15,
    search: "",
    level: "",
    date_from: moment().format("YYYY-MM-DD"),
    date_to: moment().format("YYYY-MM-DD"),
  });

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchData();

    Http.get(`/enrollments/options`).then((res) => {
      if (res.data.tracks) {
        setTracks(res.data.tracks);
        setStrands(res.data.strands);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = (params = {}) => {
    setFetching(true);
    Http.get(`/enrollments`, {
      params: {
        ...filters,
        ...params,
      },
    })
      .then((res) => {
        if (res.data) {
          setEnrollments(res.data);
        }

        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
      });
  };

  const handleChangePage = (event, newPage) => {
    fetchData({ page: newPage + 1 });
  };

  const handleChangeRowsPerPage = (event) => {
    handleChangeFilter("limit", event.target.value);
  };

  const handleChangeFilter = (name, value) => {
    const newValues = {
      [name]: value,
    };

    if (name === "date_from") {
      newValues.date_to = value;
    }

    fetchData(newValues);

    setFilters((prev) => ({
      ...prev,
      ...newValues,
    }));
  };

  const handlePrint = () => {
    localStorage.setItem("reports-filter", JSON.stringify(filters));

    const win = window.open("/reports/print", "_blank");
    win.focus();
  };

  const getStrandOptions = () => {
    return strands.filter(
      (strand) => strand.track_id === parseInt(filters.track_id)
    );
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={2}>
            <SelectField
              label="Grade"
              onChange={(e) => handleChangeFilter("level", e.target.value)}
              options={levelOptions()}
              // style={{ maxWidth: 200 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <SelectField
              label="Tracks"
              keyValuePair="id,name"
              onChange={(e) => handleChangeFilter("track_id", e.target.value)}
              options={tracks}
              // style={{ maxWidth: 200 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <SelectField
              label="Strand"
              keyValuePair="id,name"
              options={getStrandOptions()}
              // style={{ maxWidth: 200 }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormField
              label="Date From"
              type="date"
              shrinkLabel
              value={filters.date_from}
              onChange={(e) => handleChangeFilter("date_from", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormField
              label="Date To"
              type="date"
              shrinkLabel
              inputProps={{ min: filters.date_from }}
              value={filters.date_to}
              onChange={(e) => handleChangeFilter("date_to", e.target.value)}
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
          <Grid item xs={12}>
            <FormField
              label="Search"
              value={filters.search}
              onChange={(e) => handleChangeFilter("search", e.target.value)}
            />
          </Grid>
        </Grid>
        {fetching && <LinearProgress />}
        <div>
          <Typography className={classes.totalStudent}>
            Total Student(s): {enrollments.meta.total || 0}
          </Typography>
        </div>
        <TableContainer>
          <Table size="small">
            <TableHead id="th" className={classes.tblHeader}>
              <TableRow>
                <TableCell>Last Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Track</TableCell>
                <TableCell>Strand</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enrollments.data &&
                enrollments.data.map((enrollment, index) => (
                  <TableRow key={index}>
                    <TableCell>{enrollment.last_name}</TableCell>
                    <TableCell>{enrollment.first_name}</TableCell>
                    <TableCell>{enrollment.middle_name}</TableCell>
                    <TableCell>{enrollment.email}</TableCell>
                    <TableCell>{enrollment.grade_level_to_enroll}</TableCell>
                    <TableCell>
                      {(enrollment.track && enrollment.track.code) || ""}
                    </TableCell>
                    <TableCell>
                      {(enrollment.strand && enrollment.strand.name) || ""}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 25, 50, 100]}
          component="div"
          count={enrollments.data.length}
          rowsPerPage={filters.limit}
          page={enrollments.meta.current_page - 1 || 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
}

export default Report;
