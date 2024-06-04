import React from "react";
import {TextField} from "@mui/material";

const CreateFormInput = (props) => {
  const { name } = props;
  const upperCaseLabel = name.charAt(0).toUpperCase() + name.slice(1);

  return <TextField id="standard-basic" label={upperCaseLabel} variant="standard" {...props} />
};

export default CreateFormInput;