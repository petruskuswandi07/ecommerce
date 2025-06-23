import Box from "@mui/material/Box";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      &copy; Petrus Kuswandi {year}
    </Box>
  );
};

export default Footer;
