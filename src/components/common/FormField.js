import React from "react";
import { TextField } from "@material-ui/core";

function FormField(props) {
  const { errors, customError, name = "", shrinkLabel, ...rest } = props;

  let error = false;
  let helperText = "";

  // handle customError
  if (customError) {
    error = customError.error || false;
    helperText = customError.message || "";
  }

  if (errors) {
    error = (errors && errors.has(name)) || false;
    helperText = (errors && errors.first(name)) || "";
  }

  let shrinkProps = {};

  if (shrinkLabel) {
    shrinkProps = {
      InputLabelProps: {
        shrink: true,
      },
    };
  }

  const newProps = {
    variant: "outlined",
    margin: "dense",
    fullWidth: true,
    error,
    name,
    helperText,
    ...shrinkProps,
    ...rest,
  };

  return <TextField {...newProps} />;
}

export default FormField;
