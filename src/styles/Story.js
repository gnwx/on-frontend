const containerStyles = {
  display: "flex",
  flexDirection: "column",

  borderWidth: "0px 4px 2px 0px",
  borderStyle: "solid",
  borderColor: "#858585",
  borderRadius: "10px",
};

const smallContainerStyles = {
  ...containerStyles,

  justifyContent: "space-between",
  width: 500,
  height: 150,
  marginBottom: 5,
  padding: 4,
};

const mediumContainerStyles = {
  ...containerStyles,

  gap: 4,
  width: 600,
  height: 500,
  maxHeight: "max-content",
  marginBottom: 5,
  padding: 8,
  overflow: "auto",
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
};

const largeContainerStyles = {
  ...containerStyles,
  gap: 4,
  width: 600,
  height: 700,
  maxHeight: "max-content",
  marginBottom: 5,
  padding: 8,
};

const titleStyles = {
  color: "white",
  fontWeight: "bold",
  fontSize: "xl",
  textAlign: "center",
};

export {
  titleStyles,
  largeContainerStyles,
  mediumContainerStyles,
  smallContainerStyles,
};
