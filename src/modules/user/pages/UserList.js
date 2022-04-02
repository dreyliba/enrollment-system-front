import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../../assets/css/User/user.css";

function UserList() {
  return (
    <Card>
      <TextField
        sx={{ width: 300 }}
        id="search"
        label="Search Input"
        variant="outlined"
        margin="dense"
      ></TextField>

      <Button id="button" variant="contained" color="primary">
        <AddIcon />
        NEW USER
      </Button>
      <CardContent>
        <TableContainer>
          <Table size="small">
            <TableHead id="th">
              <TableRow>
                <TableCell>Actions</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Event Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <EditIcon color="primary" />
                  <DeleteIcon color="secondary" />
                  <VisibilityIcon color="primary" />
                </TableCell>
                <TableCell>Gicangao</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Cabrillos</TableCell>
                <TableCell>fermingicangao26@gmail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default UserList;
