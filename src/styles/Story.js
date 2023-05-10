const containerStyles = {
  display: "flex",
  flexDirection: "column",
  fontSize: { base: "10px", sm: "md", lg: "md", xl: "md" },
  maxHeight: "max-content",
  borderWidth: "0px 4px 2px 0px",
  borderStyle: "solid",
  borderColor: "#858585",
  borderRadius: "10px",
};

const smallContainerStyles = {
  ...containerStyles,

  justifyContent: "space-between",
  width: { base: "300px", sm: "500px", lg: "450px", xl: "440px" },

  height: 150,
  marginBottom: 5,
  padding: 4,
};

const mediumContainerStyles = {
  ...containerStyles,

  gap: 4,
  width: { base: "350px", sm: "300px", lg: "600px", xl: "700px" },

  height: 500,
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
  width: { base: "330px", sm: "320px", lg: "450px", xl: "600px" },

  height: { base: "550px", sm: "500px", lg: "600px", xl: "700px" },
  maxHeight: "max-content",
  marginBottom: 5,
  padding: 8,
};

const titleStyles = {
  color: "white",
  fontWeight: "bold",
  fontSize: { base: "md", sm: "md", lg: "xl", xl: "xl" },
  textAlign: "center",
};
const categoryStack = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const categoryText = { color: "white", fontSize: "9px" };
export {
  titleStyles,
  largeContainerStyles,
  mediumContainerStyles,
  smallContainerStyles,
  categoryStack,
  categoryText,
};
