import {
  Button,
  Card,
  CardContent,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles({
  content: {
    width: "100%",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    border: "1px solid",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 0,
  },
  login_text: {
    textAlign: "center",
    marginBottom: 0,
    marginTop: 8,
  },
});

function Login() {
  const classes = useStyle();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

  const handleInputChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={classes.content}>
      <Card className={classes.card}>
        <h1 className={classes.title}>Enrollment System</h1>
        <h3 className={classes.login_text}>Login Form</h3>
        <CardContent>
          <TextField
            label="Email"
            variant="outlined"
            margin="dense"
            type="email"
            fullWidth
            value={formValues.username}
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="dense"
            type="password"
            fullWidth
            value={formValues.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          <Button
            style={{ marginTop: 8 }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
