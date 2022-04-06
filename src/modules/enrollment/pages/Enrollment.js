import React from "react";
import {Card, Typography, makeStyles, InputLabel, MenuItem, FormControl, Select, FormGroup, FormControlLabel, Checkbox,TextField} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
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
  }

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
    <div>
      <Card>
        <Typography style={{marginLeft: 5}}>A. GRADE LEVEL AND SCHOOL INFORMATION</Typography>
        <form>
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
      <FormGroup row style={{marginLeft: 5}}>
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
        <form row id="top" className={classes.root} noValidate autoComplete="off">
              <Typography>Grade Level to Enroll
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">Select Option</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      variant="outlined"
                      fullWidth
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
                </FormControl>
              </Typography>
              
          <Typography>Last Grade Level Completed
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Option</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  variant="outlined"
                  fullWidth
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
            </FormControl>
          </Typography>
         
          <Typography>Last School Year Complete
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Select Option</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  variant="outlined"
                  fullWidth
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
              </FormControl>
            </Typography>
            <formControl/>
            </form>
          <TextField style={{ marginRight: 5, marginLeft: 5}} id="school-attended" label="Last school attended"  variant="outlined" margin="dense"/> 
          <TextField id="school-id" label="School ID" variant="outlined" margin="dense"/>
          <TextField style={{ marginLeft: 5}} id="school-address" label="School Address"  variant="outlined" margin="dense"/> 
        <Typography style={{ marginLeft: 5}}>
          School Type
        </Typography>
          <FormGroup row style={{ marginLeft: 5}}>
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
          <TextField style={{ marginRight: 5, marginLeft: 5}} id="school-enroll" label="School to enroll in"  variant="outlined" margin="dense"/> 
          <TextField id="school-id" label="School ID" variant="outlined" margin="dense"/>
          <TextField style={{ marginLeft: 5}} id="school-address" label="School Address"  variant="outlined" margin="dense"/> 
        <Typography style={{marginTop: 20}}>B. STUDENT INFORMATION</Typography>
      <div>
        <TextField
            id="live-birth"
            label="PSA Birth Certificate Number"
            style={{ margin: 8 }}
            placeholder="(if available upon enrollment)"
            margin="dense"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
        />
        <TextField
          id="live-birth"
          label="Learner Refernce Number"
          style={{ margin: 8 }}
          placeholder="(LRN)"
          margin="dense"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </div>
          <TextField style={{ marginRight: 5}} id="outlined-basic" label="Last Name" variant="outlined" margin="dense"/>
          <TextField style={{ marginRight: 5}} id="outlined-basic" label="First Name" variant="outlined" margin="dense"/>
          <TextField style={{ marginRight: 5}} id="outlined-basic" label="Middle Name" variant="outlined" margin="dense"/>
          <TextField  id="outlined-basic" label="Extension Name" variant="outlined" margin="dense"/>
        <form className={classes.container} noValidate>
          <TextField
            variant="outlined"
            margin="dense"
            id="date"
            label="Date of Birth"
            marginTop="30"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
              <Select
                label="Gender"
                id="gender"
                variant="outlined"
                value={yearComplete}
                type="select"
                onChange={handleOnClickChange}
                margin="dense"
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
              </FormControl>
              </form>
        <Typography style={{marginTop:10}}>
        Belonging to Indigenous Peoples (IP) Community/Indigenous Cultural Community
        </Typography>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="checked"
              />
              }
              label="Yes"
        />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  name="checkedI"
                />
                 }
                label="No"
            />
           </FormGroup>
            <Typography> If yes, please specify</Typography>
            <TextField style={{ marginRight: 5}} id="outlined-basic" variant="outlined" margin="dense"/>
          <div>
            <TextField style={{ marginRight: 5}} id="outlined-basic" label="Mother Tongue" variant="outlined" margin="dense"/>
            <TextField style={{ marginRight: 5}} id="outlined-basic" label="Religion" variant="outlined" margin="dense"/>
          </div>
            <Typography style={{ marginLeft: 5}}>For Learners with Special Education Needs</Typography>
          <div>
            <Typography style={{ marginLeft: 5, fontSize: 14}}>Does the learner have special education needs? (i.e. physical, mental, social, disability, medical condition, giftedness,among others)</Typography>
          <FormGroup row style={{ marginLeft: 5}}>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="checked"
              />
              }
              label="Yes"
        />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  name="checkedI"
                />
                 }
                label="No"
            />
           </FormGroup>
           <Typography> If yes, please specify</Typography>
              <TextField style={{ marginRight: 5}} id="outlined-basic" variant="outlined" margin="dense"/>
              <Typography style={{ marginLeft: 5, fontSize: 14}}>Do you have any assessive technology devices available at home? (i.e. screen reader, Braille, DAISY)</Typography>
              <FormGroup row style={{ marginLeft: 5}}>
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                name="checked"
              />
              }
              label="Yes"
        />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                  name="checkedI"
                />
                 }
                label="No"
            />
           </FormGroup>
           <Typography> If yes, please specify</Typography>
              <TextField style={{ marginRight: 5}} id="outlined-basic" variant="outlined" margin="dense"/>
            <div>
            <TextField style={{ marginRight: 5}} id="email-address" variant="outlined" margin="dense" label="Email Address"/>
            </div>
            <Typography style={{marginTop: 20, marginLeft: 5}}>ADDRESS</Typography>
            <div>
            <TextField style={{ marginRight: 5}} id="house-number" label="House Number and Street" variant="outlined" margin="dense"/>
            <TextField style={{ marginRight: 5}} id="village" label="Subdivision Village/Zone" variant="outlined" margin="dense"/>
            </div>
          <TextField style={{ marginRight: 5}} id="outlined-basic" label="Barangay" variant="outlined" margin="dense"/>
          <TextField style={{ marginRight: 5}} id="outlined-basic" label="City/Municipality" variant="outlined" margin="dense"/>
          <TextField style={{ marginRight: 5}} id="outlined-basic" label="Middle Name" variant="outlined" margin="dense"/>
          <TextField  id="outlined-basic" label="Region" variant="outlined" margin="dense"/>
          <Typography style={{marginLeft: 5}}>C. PARENT/GUARDIAN INFORMATION</Typography>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Enrollment;
