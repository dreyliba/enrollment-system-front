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
import EditUser from "./pages/EditUser";
import DeleteUser from "./pages/DeleteUser";
import ChangePass from "./pages/ChangePass";
import { IconButton } from "@material-ui/core";
import Http from "../utils/Http";

const useStyles = makeStyles({
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15,
  },
  tblHeader: {
    backgroundColor: "#ccc;",
  },
});

function Users() {
  const classes = useStyles();
  const [selectedUserValues, setSelectedUserValues] = useState({});
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

    Http.get(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.code === 200) {
        setUserList(res.data);
      }
    });
  };

  const handleOpenAddUser = () => {
    setOpenAddUser(true);
  };

  const handleOpenEditUser = (userValues) => {
    setSelectedUserValues(userValues);
    setOpenEditUser(true);
  };

  const handleOpenDeleteUser = (userID) => {
    setSelectedID(userID);
    setOpenDeleteUser(true);
  };

  const handleConfirmDelete = () => {
    const token = localStorage.getItem("accessToken");

    Http.delete(`/user/${selectedID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data) {
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
            size="small"
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
                    <IconButton onClick={() => handleOpenEditUser(users)}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleOpenDeleteUser(users.id)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => handleOpenChangePass()}>
                      <VpnKeyIcon color="primary" />
                    </IconButton>
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
        selectedUserValues={selectedUserValues}
        handleOpen={openAddUser}
        handleClose={() => setOpenAddUser(false)}
        refetch={fetchData}
      />
      <EditUser
        selectedUserValues={selectedUserValues}
        handleOpen={openEditUser}
        handleClose={() => setOpenEditUser(false)}
        refetch={fetchData}
      />
      <DeleteUser
        handleConfirmDelete={handleConfirmDelete}
        handleOpen={openDeleteUser}
        handleClose={() => setOpenDeleteUser(false)}
      />
      <ChangePass
        handleOpen={openChangePassword}
        handleClose={() => setOpenChangePassword()}
        userList={userList.users}
      />
    </Card>
  );
}

export default Users;
