import React from "react";
import { TextField } from "@material-ui/core";

function SelectField(props) {
  const {
    errors,
    options = [],
    customError,
    keyValuePair = "",
    noOptions = false,
    ...rest
  } = props;

  let valueKey = "";
  let labelKey = "";
  let isValuePair = false;

  if (keyValuePair && keyValuePair.includes(",")) {
    isValuePair = true;
    const keys = keyValuePair.split(",");
    valueKey = keys[0]; // option value
    labelKey = keys[1]; // option label
  }

  let error = false;
  let helperText = "";

  // handle customError
  if (customError) {
    error = customError.error || false;
    helperText = customError.message || "";
  }

  if (errors) {
    error = (errors && errors.has(props.name)) || false;
    helperText = (errors && errors.first(props.name)) || "";
  }

  const newProps = {
    variant: "outlined",
    select: true,
    margin: "dense",
    fullWidth: true,
    error,
    helperText,
    ...rest,
  };

  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      SelectProps={{ native: true }}
      {...newProps}
    >
      {!noOptions && <option value="">Select Option</option>}
      {!isValuePair &&
        options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}

      {isValuePair &&
        options.map((option, i) => (
          <option key={i} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
    </TextField>
  );
}

export default SelectField;
