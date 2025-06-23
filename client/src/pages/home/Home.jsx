import Box from "@mui/material/Box";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Appbar />

      <Box
        sx={{
          height: 720,
          m: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Products
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
