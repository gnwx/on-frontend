import { Button } from "@chakra-ui/react";
import React from "react";

const YellowButton = ({
  children,
  type = "submit",
  size = "sm",
  bgColor = "#F8C630",
  handleClick,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      css={{
        fontSize: size === "md" ? 18 : size === "lg" ? 22 : 14,
        fontWeight: "normal",
        height: size === "md" ? 18 : size === "lg" ? 22 : 16,
        padding:
          size === "md"
            ? "16px 18px"
            : size === "lg"
            ? "18px 20px"
            : "14px 16px",
        background: bgColor,
        borderWidth: "0px 3px 2px 0px",
        borderStyle: "solid",
        borderColor: "#000000",
        borderRadius: "5px",
      }}
      type={type}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default YellowButton;
