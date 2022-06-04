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
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import EditStrand from "./pages/EditStrand";
import DeleteStrand from "./pages/DeleteStrand";
import AddStrand from "./pages/AddStrand";
import { API } from "../utils/helper";
import Http from "../utils/Http";

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
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  trackTxt: {
    marginLeft: 15,
    fontSize: 16,
  },
});

function Strand({ match }) {
  const { params } = match;
  const classes = useStyles();
  const [trackData, setTrackData] = useState({});
  const [selectedStrandValues, setSelectedStrandValues] = useState({});
  const [selectedID, setSelectedID] = useState("");
  const [openDeleteStrand, setOpenDeleteStrand] = useState(false);
  const [openAddStrand, setOpenAddStrand] = useState(false);
  const [openEditStrand, setOpenEditStrand] = useState(false);
  const [strandList, setStrandList] = useState({
    code: "",
    strands: [],
  });

  useEffect(() => {
    fetchData();
    API().then((ip) => {
      Http.get(`${ip}/track/${params.id}`).then((res) => {
        if (res.data.code === 200) {
          setTrackData(res.data.track);
        }
      });
    });
  }, []);

  const fetchData = () => {
    API().then((ip) => {
      Http.get(`${ip}/strands`).then((res) => {
        if (res.data.code === 200) {
          setStrandList(res.data);
        }
      });
    });
  };

  const handleOpenAddStrand = () => {
    setOpenAddStrand(true);
  };

  const handleOpenEditStrand = (strandValues) => {
    setSelectedStrandValues(strandValues);
    setOpenEditStrand(true);
  };

  const handleOpenDeleteStrand = (userID) => {
    setSelectedID(userID);
    setOpenDeleteStrand(true);
  };

  const handleConfirmDelete = () => {
    API().then((ip) => {
      Http.delete(`${ip}/strand/${selectedID}`).then((res) => {
        if (res.data) {
          setOpenDeleteStrand(false);
          fetchData();
        }
      });
    });
  };

  return (
    <Card>
      <div>
        <Typography>
          <span className={classes.trackTxt}>Track: </span>
          <span className={classes.title} var>
            {trackData.name}
          </span>
        </Typography>
      </div>
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
            onClick={handleOpenAddStrand}
          >
            <AddIcon style={{ margin: "0px 5px 2px 0px" }} />
            ADD STRAND
          </Button>
        </div>
      </div>

      <CardContent>
        <TableContainer>
          <Table size="small">
            <TableHead className={classes.tblHeader}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {strandList.strands.map((strand, key) => (
                <TableRow key={key}>
                  <TableCell>{strand.name}</TableCell>
                  <TableCell>{strand.description}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenEditStrand(strand)}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleOpenDeleteStrand(strand.id)}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <AddStrand
        handleOpen={openAddStrand}
        handleClose={() => setOpenAddStrand(false)}
        refetch={fetchData}
        params={params}
      />
      <EditStrand
        selectedStrandValues={selectedStrandValues}
        handleOpen={openEditStrand}
        handleClose={() => setOpenEditStrand(false)}
        refetch={fetchData}
      />
      <DeleteStrand
        handleConfirmDelete={handleConfirmDelete}
        handleOpen={openDeleteStrand}
        handleClose={() => setOpenDeleteStrand(false)}
      />
    </Card>
  );
}

export default Strand;
