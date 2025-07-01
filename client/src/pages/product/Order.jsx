import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Order = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Atur Jumlah
      </Typography>

      <Box sx={{ display: "flex", gap: "15px", padding: "5px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            borderRadius: "5px",
            padding: "2px",
          }}
        >
          <IconButton>
            <RemoveIcon></RemoveIcon>
          </IconButton>

          <Box
            sx={{
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </Box>

          <IconButton>
            <AddIcon></AddIcon>
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Total Stok: 30
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
