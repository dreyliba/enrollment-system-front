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
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTrack from "./pages/AddTrack";
import EditTrack from "./pages/EditTrack";
import DeleteTrack from "./pages/DeleteTrack";

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

const API = process.env.REACT_APP_API_URL;
function Track() {
  const classes = useStyles();
  const [selectedTrackValues, setSelectedTrackValues] = useState({});
  const [selectedID, setSelectedID] = useState("");
  const [openDeleteTrack, setOpenDeleteTrack] = useState(false);
  const [openAddTrack, setOpenAddTrack] = useState(false);
  const [openEditTrack, setOpenEditTrack] = useState(false);
  const [trackList, setTrackList] = useState({
    code: "",
    tracks: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const token = localStorage.getItem("accessToken");

    axios
      .get(`${API}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          setTrackList(res.data);
        }
      });
  };

  const handleOpenAddTrack = () => {
    setOpenAddTrack(true);
  };

  const handleOpenEditTrack = (trackValues) => {
    setSelectedTrackValues(trackValues);
    setOpenEditTrack(true);
  };

  const handleOpenDeleteTrack = (userID) => {
    setSelectedID(userID);
    setOpenDeleteTrack(true);
  };

  const handleConfirmDelete = () => {
    const token = localStorage.getItem("accessToken");

    axios
      .delete(`${API}/track/${selectedID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data) {
          setOpenDeleteTrack(false);
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
            onClick={handleOpenAddTrack}
          >
            <AddIcon style={{ margin: "0px 5px 2px 0px" }} />
            ADD TRACK
          </Button>
        </div>
      </div>
      <CardContent>
        <TableContainer>
          <Table size="small">
            <TableHead className={classes.tblHeader}>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Strand</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trackList.tracks.map((track, key) => (
                <TableRow key={key}>
                  <TableCell>{track.code}</TableCell>
                  <TableCell>{track.name}</TableCell>
                  <TableCell>{track.description}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        window.location.href = `/track/${track.id}/strand`;
                      }}
                    >
                      <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleOpenEditTrack(track)}>
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={() => handleOpenDeleteTrack(track.id)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <AddTrack
        handleOpen={openAddTrack}
        handleClose={() => setOpenAddTrack(false)}
        refetch={fetchData}
      />
      <EditTrack
        selectedTrackValues={selectedTrackValues}
        handleOpen={openEditTrack}
        handleClose={() => setOpenEditTrack(false)}
        refetch={fetchData}
      />
      <DeleteTrack
        handleConfirmDelete={handleConfirmDelete}
        handleOpen={openDeleteTrack}
        handleClose={() => setOpenDeleteTrack(false)}
      />
    </Card>
  );
}

export default Track;
