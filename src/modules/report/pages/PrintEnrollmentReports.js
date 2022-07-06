import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Http from "../../utils/Http";
import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import PrintHeader from "../../../components/common/PrintHeader";

const useStyles = makeStyles({
  content: {
    width: "100%",
    maxWidth: 816,
    margin: "0 auto",
  },
  cell: {
    padding: "0 12px 0 2px",
    // whiteSpace: "nowrap",
    fontSize: 11,
  },
  headCell: {
    padding: "0 12px 0 2px",
    fontSize: 12,
    fontWeight: "bold",
  },
});

const Cell = ({ children }) => {
  const classes = useStyles();
  return <TableCell className={classes.cell}>{children}</TableCell>;
};

const HeadCell = ({ children }) => {
  const classes = useStyles();
  return <TableCell className={classes.headCell}>{children}</TableCell>;
};

function Report() {
  const classes = useStyles();
  const [enrollments, setEnrollments] = useState({
    data: [],
    meta: {},
  });

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    const item = localStorage.getItem("reports-filter");

    let params = {};

    if (item) {
      params = JSON.parse(item);
    }

    setFetching(true);
    Http.get(`/reports/enrollments`, { params })
      .then((res) => {
        if (res.data) {
          setEnrollments(res.data);

          setTimeout(() => {
            window.print();
            // window.close();
          }, 1000);
        }

        setFetching(false);
      })
      .catch(() => {
        setFetching(false);
      });
  };

  return (
    <div className={classes.content}>
      {fetching && <LinearProgress />}
      <PrintHeader />

      <Typography variant="h6" align="center" gutterBottom>
        Reports
      </Typography>

      <TableContainer>
        <Table size="small">
          <TableHead id="th">
            <TableRow>
              <HeadCell>Last Name</HeadCell>
              <HeadCell>First Name</HeadCell>
              <HeadCell>Middle Name</HeadCell>
              <HeadCell>Extension Name</HeadCell>
              <HeadCell>Gender</HeadCell>
              <HeadCell>Grade</HeadCell>
              <HeadCell>Track</HeadCell>
              <HeadCell>Strand</HeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enrollments.data &&
              enrollments.data.map((enrollment, index) => (
                <TableRow key={index}>
                  <Cell>{enrollment.last_name}</Cell>
                  <Cell>{enrollment.first_name}</Cell>
                  <Cell>{enrollment.middle_name}</Cell>
                  <Cell>{enrollment.extension_name}</Cell>
                  <Cell>{enrollment.gender}</Cell>
                  <Cell>{enrollment.grade_level_to_enroll}</Cell>
                  <Cell>
                    {(enrollment.track && enrollment.track.code) || ""}
                  </Cell>
                  <Cell>
                    {(enrollment.strand && enrollment.strand.name) || ""}
                  </Cell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Report;
