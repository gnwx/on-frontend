import { Input } from "@chakra-ui/react";
import React from "react";

const PurpleInput = ({ type = "text", handleChange, value, placeholder }) => {
  return (
    <Input
      bg="nav"
      sx={{
        color: "white",
        borderWidth: "0px 3px 2px 0px",
        borderStyle: "solid",
        borderColor: "#FFFFFF",
        borderRadius: "5px",
      }}
      type={type}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default PurpleInput;
