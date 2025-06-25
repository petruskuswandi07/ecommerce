import Box from "@mui/material/Box";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import Products from "../product/Products";

const Home = () => {
  return (
    <div>
      <Appbar />

      <Box
        sx={{
          minHeight: 720,
          m: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Products />
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
