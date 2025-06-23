import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#7B1FA2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="/logo.png"
            alt="logo"
            style={{
              height: "50px",
              width: "120px",
              objectFit: "contain",
            }}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <LoginIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
