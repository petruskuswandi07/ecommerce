import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const SelectOptions = ({ provinsi, kota, kurir, layanan, alamat }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  const handleProvince = (event) => {
    setProvince(event.target.value);
    provinsi(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
    kota(event.target.value);
  };

  const handleCourier = (event) => {
    setCourier(event.target.value);
    kurir(event.target.value);
  };

  const handleService = (event) => {
    setService(event.target.value);
    layanan(event.target.value);
  };

  useEffect(() => {
    alamat(address);
  }, [address, alamat]);

  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Provinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={province}
          id="demo-simple-select"
          label="Provinsi"
          onChange={handleProvince}
        >
          <MenuItem value="Jawa Barat">Jawa Barat</MenuItem>
          <MenuItem value="Jawa Tengah">Jawa Tengah</MenuItem>
          <MenuItem value="Jawa Timur">Jawa Timur</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kota/Kabupaten</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={city}
          id="demo-simple-select"
          label="Kota/Kabupaten"
          onChange={handleCity}
        >
          <MenuItem value="Cirebon">Cirebon</MenuItem>
          <MenuItem value="Jakarta">Jakarta</MenuItem>
          <MenuItem value="Surabaya">Surabaya</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kurir</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={courier}
          label="Kurir"
          onChange={handleCourier}
        >
          <MenuItem value="J&T Express">J&T Express</MenuItem>
          <MenuItem value="Shopee Express">Shopee Express</MenuItem>
          <MenuItem value="Ninja Express">Ninja Express</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layanan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Layanan"
          onChange={handleService}
        >
          <MenuItem value="Reguler">Reguler</MenuItem>
          <MenuItem value="Instant">Instant</MenuItem>
          <MenuItem value="One Day">One Day</MenuItem>
        </Select>
      </FormControl>

      <textarea
        placeholder="Masukkan Alamat"
        style={{ padding: "10px" }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
  );
};

export default SelectOptions;
