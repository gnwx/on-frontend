import React from "react";
import { Textarea } from "@chakra-ui/react";

const PurpleTextarea = ({ handleChange, value, placeholder }) => {
  return (
    <Textarea
      maxHeight={44}
      height={44}
      width={{ base: "100%", lg: "500px", xl: "800px" }}
      bg="nav"
      sx={{
        color: "white",
        borderWidth: "0px 3px 2px 0px",
        borderStyle: "solid",
        borderColor: "#FFFFFF",
        borderRadius: "5px",
      }}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default PurpleTextarea;
