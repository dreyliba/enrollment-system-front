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
import { API } from "../../utils/helper";
import Http from "../../utils/Http";
import { useHistory } from "react-router-dom";
import { IconButton, LinearProgress, TablePagination } from "@material-ui/core";

const useStyles = makeStyles({
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
  },
});

function Student() {
  const classes = useStyles();
  const history = useHistory();

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
    API().then((ip) => {
      Http.get(`${ip}/enrollments`, {
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
            <TableHead id="th">
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enrollments.data &&
                enrollments.data.map((enrollment, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <IconButton
                        size="small"
                        onClick={() => handleNavigate(enrollment.id)}
                      >
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton size="small">
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </TableCell>

                    <TableCell>{enrollment.last_name}</TableCell>
                    <TableCell>{enrollment.first_name}</TableCell>
                    <TableCell>{enrollment.middle_name}</TableCell>
                    <TableCell>{enrollment.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 25, 50, 100]}
          component="div"
          count={enrollments.data.length}
          rowsPerPage={15}
          page={enrollments.meta.current_page - 1 || 0}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CardContent>
    </Card>
  );
}

export default Student;
