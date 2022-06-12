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
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import AddTrack from "./pages/AddTrack";
import EditTrack from "./pages/EditTrack";
import DeleteTrack from "./pages/DeleteTrack";
import Http from "../utils/Http";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  floatRight: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 15,
  },
  tblHeader: {
    backgroundColor: "#ccc;",
  },
});

function Track() {
  const classes = useStyles();
  const history = useHistory();
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
    Http.get(`/tracks`).then((res) => {
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
    Http.delete(`/track/${selectedID}`).then((res) => {
      if (res.data) {
        setOpenDeleteTrack(false);
        fetchData();
      }
    });
  };

  return (
    <Card>
      <div className={classes.floatRight}>
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
                      size="small"
                      onClick={() => {
                        history.push(`/settings/track/${track.id}/strand`);
                      }}
                    >
                      <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleOpenEditTrack(track)}
                    >
                      <EditIcon color="primary" />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleOpenDeleteTrack(track.id)}
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
