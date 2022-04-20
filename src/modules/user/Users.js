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
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AddUser from "./pages/AddUser";
import axios from "axios";
import EditUser from "./pages/EditUser";
import DeleteUser from "./pages/DeleteUser";
import ChangePass from "./pages/ChangePass";

const useStyles = makeStyles({
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
  },
  tblHeader: {
    backgroundColor: "#ccc;",
  },
  parentIconHolder: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
    cursor: "pointer",
  },
  actionIconHolder: {
    marginRight: 18,
  },
});

const API = process.env.REACT_APP_API_URL;

function Users() {
  const classes = useStyles();
  const [selectedUserValue, setSelectedUserValue] = useState({});
  const [selectedID, setSelectedID] = useState("");
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [userList, setUserList] = useState({
    code: "",
    users: [],
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const token = localStorage.getItem("accessToken");

    axios
      .get(`${API}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          setUserList(res.data);
        }
      });
  };

  const handleOpenAddUser = (userValues) => {
    setSelectedUserValue(userValues);
    setOpenAddUser(true);
  };

  const handleOpenEditUser = () => {
    setOpenEditUser(true);
  };

  const handleOpenDeleteUser = (userID) => {
    setSelectedID(userID);
    setOpenDeleteUser(true);
  };

  const handleConfirmDelete = () => {
    const token = localStorage.getItem("accessToken");

    axios
      .delete(`${API}/user/${selectedID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.code) {
          setOpenDeleteUser(false);
          fetchData();
        }
      });
  };

  const handleOpenChangePass = () => {
    setOpenChangePassword(true);
  };

  return (
    <Card>
      <div className={classes.spaceBetween}>
        <div>
          <TextField
            style={{ marginBottom: 0 }}
            sx={{ width: 300 }}
            label="Search Input"
            variant="outlined"
            margin="dense"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="sm"
            style={{ marginTop: 10 }}
            onClick={handleOpenAddUser}
          >
            <AddIcon />
            NEW USER
          </Button>
        </div>
      </div>

      <CardContent>
        <TableContainer style={{ marginTop: -20 }}>
          <Table size="small">
            <TableHead className={classes.tblHeader}>
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList.users.map((users, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <div className={classes.parentIconHolder}>
                      <div className={classes.actionIconHolder}>
                        <EditIcon
                          onClick={() => handleOpenEditUser(users)}
                          color="primary"
                        />
                      </div>
                      <div className={classes.actionIconHolder}>
                        <DeleteIcon
                          onClick={() => handleOpenDeleteUser()}
                          color="secondary"
                        />
                      </div>
                      <div>
                        <VpnKeyIcon
                          onClick={() => handleOpenChangePass()}
                          color="primary"
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{users.first_name}</TableCell>
                  <TableCell>{users.last_name}</TableCell>
                  <TableCell>{users.middle_name}</TableCell>
                  <TableCell>{users.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <AddUser
        selectedUserValue={selectedUserValue}
        handleOpen={openAddUser}
        handleClose={() => setOpenAddUser(false)}
        refetch={fetchData}
      />
      <EditUser
        handleOpen={openEditUser}
        handleClose={() => setOpenEditUser(false)}
      />
      <DeleteUser
        handleOpen={openDeleteUser}
        handleClose={() => setOpenDeleteUser()}
        handleConfirmDelete={handleConfirmDelete}
      />
      <ChangePass
        handleOpen={openChangePassword}
        handleClose={() => setOpenChangePassword()}
      />
    </Card>
  );
}

export default Users;
