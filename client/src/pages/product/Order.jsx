import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SelectOptions from "./SelectOptions";
import { useEffect, useState } from "react";

const Order = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    console.log(province, city, courier, service, address);
  }, [province, city, courier, service, address]);

  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "700px",
        boxShadow: 6,
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Subtotal
        </Typography>

        <Typography fontWeight="bold" fontSize={20}>
          Rp3.000.000
        </Typography>
      </Box>

      <Typography fontWeight="bold">Alamat Pengiriman</Typography>

      <Box>
        <SelectOptions
          provinsi={setProvince}
          kota={setCity}
          kurir={setCourier}
          layanan={setService}
          alamat={setAddress}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Ongkir
        </Typography>

        <Typography fontWeight="bold" fontSize={20}>
          Rp3.000.000
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={18}>
          Total
        </Typography>

        <Typography fontWeight="bold" fontSize={20}>
          Rp3.000.000
        </Typography>
      </Box>

      <Button variant="contained">Keranjang</Button>

      <Button variant="outlined">Beli</Button>
    </Box>
  );
};

export default Order;
