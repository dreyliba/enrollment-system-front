import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Http from "../../utils/Http";
import PrintIcon from "@material-ui/icons/Print";
import { useHistory } from "react-router-dom";
import { IconButton, LinearProgress, TablePagination } from "@material-ui/core";
import DeleteEnrollment from "./DeleteEnrollment";

const useStyles = makeStyles({
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
  },
  tblHeader: {
    backgroundColor: "#ccc",
  },
});

function Student() {
  const classes = useStyles();
  const history = useHistory();
  const [selectedID, setSelectedID] = useState("");
  const [openDeleteEnrollment, setOpenDeleteEnrollment] = useState(false);

  const [enrollments, setEnrollments] = useState({
    data: [],
    meta: {},
  });

  const [filters, setFilters] = useState({
    limit: 15,
    search: "",
  });

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleNavigate = (id) => {
    history.push(`/enrollments/${id}/edit`);
  };

  const handleChangePage = (event, newPage) => {
    fetchData({ page: newPage + 1 });
  };

  const handleChangeRowsPerPage = (event) => {
    handleChangeFilter("limit", event.target.value);
  };

  const handleChangeFilter = (name, value) => {
    fetchData({ [name]: value });

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrint = (id) => {
    const win = window.open(`/enrollments/${id}/print`, "_blank");
    win.focus();
  };

  const handlePrintReceipt = (id) => {
    const win = window.open(
      `/enrollments/${id}/print-completion-form`,
      "_blank"
    );
    win.focus();
  };

  const handleOpenDeleteEnrollment = (enrollmentID) => {
    setSelectedID(enrollmentID);
    setOpenDeleteEnrollment(true);
  };

  const handleConfirmDelete = () => {
    Http.delete(`/enrollments/${selectedID}`).then((res) => {
      if (res.data) {
        setOpenDeleteEnrollment(false);
        fetchData();
      }
    });
  };

  return (
    <Card>
      <CardContent>
        <div className={classes.spaceBetween}>
          <div>
            <TextField
              style={{ marginBottom: 0 }}
              sx={{ width: 300 }}
              label="Search Input"
              variant="outlined"
              margin="dense"
              value={filters.search}
              onChange={(e) => handleChangeFilter("search", e.target.value)}
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 10 }}
              onClick={() => history.push("/enrollments/add")}
            >
              <AddIcon />
              Add
            </Button>
          </div>
        </div>
        {fetching && <LinearProgress />}
        <TableContainer>
          <Table size="small">
            <TableHead id="th" className={classes.tblHeader}>
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Track</TableCell>
                <TableCell>Strand</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enrollments.data &&
                enrollments.data.map((enrollment, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <IconButton
                        title="Edit Enrollment Form"
                        size="small"
                        onClick={() => handleNavigate(enrollment.id)}
                      >
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton
                        title="Delete Enrollment"
                        size="small"
                        onClick={() =>
                          handleOpenDeleteEnrollment(enrollment.id)
                        }
                      >
                        <DeleteIcon color="secondary" />
                      </IconButton>
                      <IconButton
                        title="Print Enrollment Form"
                        size="small"
                        onClick={() => handlePrint(enrollment.id)}
                      >
                        <PrintIcon color="secondary" />
                      </IconButton>
                      <IconButton
                        title="Print Enrollment Slip"
                        size="small"
                        onClick={() => handlePrintReceipt(enrollment.id)}
                      >
                        <PrintIcon color="secondary" />
                      </IconButton>
                    </TableCell>

                    <TableCell>{enrollment.last_name}</TableCell>
                    <TableCell>{enrollment.first_name}</TableCell>
                    <TableCell>{enrollment.middle_name}</TableCell>
                    <TableCell>{enrollment.gender}</TableCell>
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
          count={enrollments.meta.total || 0}
          rowsPerPage={filters.limit}
          page={enrollments.meta.current_page - 1 || 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
      <DeleteEnrollment
        handleConfirmDelete={handleConfirmDelete}
        handleOpen={openDeleteEnrollment}
        handleClose={() => setOpenDeleteEnrollment(false)}
      />
    </Card>
  );
}

export default Student;
