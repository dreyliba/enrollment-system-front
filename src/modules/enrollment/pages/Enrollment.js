import React from "react";
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextField from '@material-ui/core/TextField';
import "../../../assets/css/Enrollment/enrollment.css";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  checked: {},
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },

  },

}));

function Enrollment() {

  const classes = useStyles();
  const [schoolYear, setSchoolYear] = React.useState('');
  const [gradeLevel, setGradeLevel] = React.useState('');
  const [levelComplete, setLevelComplete] = React.useState('');
  const [yearComplete, setYearComplete] = React.useState('');
  
  
 


  const handleChange = (event) => {
    setSchoolYear(event.target.value);
    
  };
  const handleClickChange = (event) => {
    setGradeLevel(event.target.value);  
  };
  const handleOnChange = (event) => {
    setLevelComplete(event.target.value);  
  };
  const handleOnClickChange = (event) => {
    setYearComplete(event.target.value);  
  };


  return (
    <Card>
      <CardContent>
      <Typography>
        A. GRADE LEVEL AND SCHOOL INFORMATION
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">School Year</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={schoolYear}
          onChange={handleChange}
          label="School Year"
          margin="dense"
        >
          <MenuItem value={"2021-2022"}>2021-2022</MenuItem>
          <MenuItem value={"2022-2023"}>2022-2023</MenuItem>
          <MenuItem value={"2023-2024"}>2023-2024</MenuItem>
        </Select>
      </FormControl>
      <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="No LRN"
      />
       <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="With LRN"
      />
      </FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Returning (Balik Aral)"
      />
      <div>
        <form id="top" className={classes.root} noValidate autoComplete="off">
          <div>
          <Typography>Grade Level to Enroll
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              variant="outlined"
              value={gradeLevel}
              onChange={handleClickChange}
              label="Grade Level"
               margin="dense"
            >
                <MenuItem value={"Grade 7"}>Grade 7</MenuItem>
                <MenuItem value={"Grade 8"}>Grade 8</MenuItem>
                <MenuItem value={"Grade 9"}>Grade 9</MenuItem>
                <MenuItem value={"Grade 10"}>Grade 10</MenuItem>
                <MenuItem value={"Grade 11"}>Grade 11</MenuItem>
                <MenuItem value={"Grade 12"}>Grade 12</MenuItem>
              </Select>
              </Typography>
              </div>
              <Typography>Last Grade Level Completed
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  variant="outlined"
                  value={levelComplete}
                  onChange={handleOnChange}
                  label="Grade Level"
                  margin="dense"
                >
                <MenuItem value={"Grade 7"}>Grade 7</MenuItem>
                <MenuItem value={"Grade 8"}>Grade 8</MenuItem>
                <MenuItem value={"Grade 9"}>Grade 9</MenuItem>
                <MenuItem value={"Grade 10"}>Grade 10</MenuItem>
                <MenuItem value={"Grade 11"}>Grade 11</MenuItem>
                <MenuItem value={"Grade 12"}>Grade 12</MenuItem>
              </Select>
         </Typography>
        <Typography>Last School Year Complete
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                variant="outlined"
                value={yearComplete}
                onChange={handleOnClickChange}
                label="School Year"
                margin="dense"
              >
                <MenuItem value={"2018-2019"}>2018-2019</MenuItem>
                <MenuItem value={"2019-2020"}>2019-2020</MenuItem>
                <MenuItem value={"2020-2021"}>2020-2021</MenuItem>
                <MenuItem value={"2021-2022"}>2021-2022</MenuItem>
                <MenuItem value={"2022-2023"}>2022-2023</MenuItem>
                <MenuItem value={"2023-2024"}>2023-2024</MenuItem>
              </Select>
      </Typography>
      <formControl/>
    </form>
    </div>
    <TextField style={{ marginRight: 5}} id="school-attended" label="Last school attended"  variant="outlined" margin="dense"/> 
      <TextField id="school-id" label="School ID" variant="outlined" margin="dense"/>
    <div>
      <TextField id="school-address" label="School Address"  variant="outlined" margin="dense" fullWidth/> 
    </div>
    <Typography>
        School Type
      </Typography>
      <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Private"
      />
       <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Public"
      />
      </FormGroup>
      <TextField style={{ marginRight: 5}} id="school-attended" label="School to enroll in"  variant="outlined" margin="dense"/> 
      <TextField id="school-id" label="School ID" variant="outlined" margin="dense"/>
    <div>
      <TextField id="school-address" label="School Address"  variant="outlined" margin="dense" fullWidth/> 
    </div>
    <div>
    <Typography style={{marginTop: 20}}>
        B. STUDENT INFORMATION
      </Typography>
    </div>
      </CardContent>
    </Card>
  );
      }

export default Enrollment;
    
