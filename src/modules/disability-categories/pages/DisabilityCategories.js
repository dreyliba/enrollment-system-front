import {
  Button,
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import Http from "../../utils/Http";
import DeleteCategory from "../component/DeleteCategory";
import EditCategory from "../component/EditCategory";
import AddCategory from "../component/AddCategory";

const useStyles = makeStyles({
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 15,
    marginRight: 15,
  },
  tblHeader: {
    backgroundColor: "#ccc;",
  },
});

function DisabilityCategories() {
  const classes = useStyles();
  const [selectedCategoryValues, setSelectedCategoryValues] = useState({});
  const [selectedID, setSelectedID] = useState("");
  const [openDeleteCategory, setOpenDeleteCategory] = useState(false);
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Http.get(`/disability-categories`).then((res) => {
      if (res.data.data) {
        setCategories(res.data.data);
      }
    });
  };

  const handleOpenAddCategory = () => {
    setOpenAddCategory(true);
  };

  const handleOpenEditCategory = (values) => {
    setSelectedCategoryValues(values);
    setOpenEditCategory(true);
  };

  const handleOpenDeleteCategory = (userID) => {
    setSelectedID(userID);
    setOpenDeleteCategory(true);
  };

  const handleConfirmDelete = () => {
    Http.delete(`/disability-categories/${selectedID}`).then((res) => {
      if (res.data.deleted) {
        setOpenDeleteCategory(false);
        fetchData();
      }
    });
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
            onClick={handleOpenAddCategory}
          >
            <AddIcon style={{ margin: "0px 5px 2px 0px" }} />
            Add Categories
          </Button>
        </div>
      </div>
      <CardContent>
        <TableContainer>
          <Table size="small">
            <TableHead className={classes.tblHeader}>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((cat, key) => (
                <TableRow key={key}>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleOpenEditCategory(cat)}
                    >
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleOpenDeleteCategory(cat.id)}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{cat.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <AddCategory
        handleOpen={openAddCategory}
        handleClose={() => setOpenAddCategory(false)}
        refetch={fetchData}
      />
      <EditCategory
        values={selectedCategoryValues}
        handleOpen={openEditCategory}
        handleClose={() => setOpenEditCategory(false)}
        refetch={fetchData}
      />
      <DeleteCategory
        handleConfirmDelete={handleConfirmDelete}
        handleOpen={openDeleteCategory}
        handleClose={() => setOpenDeleteCategory(false)}
      />
    </Card>
  );
}

export default DisabilityCategories;
