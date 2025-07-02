import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";
import { orange } from "@mui/material/colors";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import Order from "./Order"; // Pastikan path ini benar

const createMarkUp = (html) => {
  return { __html: html };
};

const DetailProduct = () => {
  const theme = useTheme(); // Dapatkan tema MUI
  // Gunakan useMediaQuery untuk mendeteksi ukuran layar kecil
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // true jika layar <= 'md'

  const product = {
    _id: {
      $oid: "6566c165801e99be12650c13",
    },
    name: "Rodrick Schwant",
    image: [
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
      {
        link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
      },
      {
        link: "http://dummyimage.com/650x650.png/dddddd/000000",
      },
    ],
    desc: '<p><span style="color: rgb(33, 33, 33);">Infinix INBOOK X2</span></p><p><span style="color: rgb(33, 33, 33);">Color : Grey, Blue, Red</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Perfect Style, Amazing Display</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Processor : Intel® Core™ i7-1065G7 Processor 8M Cache, up to 3.90 GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Memory : 8GB DDR4</span></p><p><span style="color: rgb(33, 33, 33);">• Storage : SSD 512GB M.2 NVMe PCIe 3.0</span></p><p><span style="color: rgb(33, 33, 33);">• Operating System : Windows 11 Home</span></p><p><span style="color: rgb(33, 33, 33);">• Display : 14" FHD (1920*1080) IPS 300 nits, Colour Gamut100% sRGB, Viewing Angle178 degrees</span></p><p><span style="color: rgb(33, 33, 33);">• Graphics : Intel® Iris® Plus Graphics</span></p><p><span style="color: rgb(33, 33, 33);">• Battery : 50 Wh</span></p><p><span style="color: rgb(33, 33, 33);">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Ports :</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data, Charging and DisplayPort)</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data)</span></p><p><span style="color: rgb(33, 33, 33);">USB 3.0 × 2</span></p><p><span style="color: rgb(33, 33, 33);">HDMI 1.4 × 1</span></p><p><span style="color: rgb(33, 33, 33);">SD card slot x 1</span></p><p><span style="color: rgb(33, 33, 33);">3.5 mm Headset and Microphone Jack x 1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Keyboard : Full-size Backlit Chiclet Keyboard</span></p><p><span style="color: rgb(33, 33, 33);">• Touchpad : Touchpad with Multi-touch</span></p><p><span style="color: rgb(33, 33, 33);">• Camera : Dual-Star light HD Video Camera</span></p><p><span style="color: rgb(33, 33, 33);">• Audio : Dual DTS audio processing</span></p><p><span style="color: rgb(33, 33, 33);">• Microphone : Microphone x 2</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• In The Box :</span></p><p><span style="color: rgb(33, 33, 33);">Inbook X2</span></p><p><span style="color: rgb(33, 33, 33);">45W USB-C Power Adapter</span></p><p><span style="color: rgb(33, 33, 33);">USB-C Charger Cable</span></p><p><span style="color: rgb(33, 33, 33);">Quick Start Guide</span></p><p><span style="color: rgb(33, 33, 33);">Warranty Card</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Case : Aluminium Alloy</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>',
    category: "Grocery",
    price: 6562674,
    capital: 6552674,
    profit: 10000,
    stock: 10,
    weight: 1708,
    rating: 4,
    reviews: [
      {
        user: "64aa82aba176b956ba8982c1",
        rating: 5,
        comment:
          "Revision of Extraluminal Device in Ureter, Percutaneous Endoscopic Approach",
      },
      {
        user: "64aa82aba176b956ba898250",
        rating: 3,
        comment:
          "Supplement Right Brachial Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
      },
    ],
  };

  const [imageIndex, setIndex] = useState(0);

  const left = () => {
    setIndex((prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length);
  };

  const right = () => {
    setIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  };

  return (
    <Box>
      <Appbar />
      {/* Main content container */}
      <Box
        sx={{
          display: "flex",
          minHeight: "85vh",
          // Mengubah arah flex menjadi kolom pada layar kecil
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "flex-start", // Menjaga alignment di desktop
          padding: isSmallScreen ? "16px" : "32px", // Menambah padding responsif
        }}
      >
        {/* Product Image & Details Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row", // Menumpuk detail & gambar di mobile
            flex: isSmallScreen ? "none" : 2, // Nonaktifkan flex scaling di mobile
            width: isSmallScreen ? "100%" : "auto", // Lebar penuh di mobile
            alignItems: "flex-start",
            gap: isSmallScreen ? "16px" : "0px", // Jarak antara gambar dan detail di mobile
          }}
        >
          {/* Image */}
          <Box
            sx={{
              flex: 1, // Tetap flex 1 untuk gambar
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: isSmallScreen ? 0 : 2, // Padding 0 di mobile untuk gambar
              width: isSmallScreen ? "100%" : "auto", // Lebar penuh di mobile
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                width: isSmallScreen ? "100%" : "auto", // Pastikan wrapper gambar juga responsif
                maxWidth: "450px", // Batasi lebar maksimum
              }}
            >
              <img
                src={product?.image[imageIndex].link}
                alt={product.name}
                style={{
                  height: isSmallScreen ? "auto" : "450px", // Tinggi otomatis di mobile
                  width: "100%", // Lebar penuh kontainer
                  maxWidth: "450px", // Batasi lebar maksimum
                  borderRadius: "10px",
                  objectFit: "contain", // Gunakan 'contain' agar gambar tidak terpotong
                }}
              />
              {/* Image Navigation Buttons */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "100%", // Mengisi lebar gambar
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "450px", // Sesuaikan dengan maxWidth gambar
                }}
              >
                <IconButton onClick={left} sx={{ backgroundColor: 'rgba(255,255,255,0.7)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }, ml: 1 }}>
                  <ArrowLeftIcon />
                </IconButton>

                <IconButton onClick={right} sx={{ backgroundColor: 'rgba(255,255,255,0.7)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' }, mr: 1 }}>
                  <ArrowRightIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          {/* Detail */}
          <Box
            sx={{
              display: "flex",
              flex: 1, // Detail mengambil sisa ruang
              p: isSmallScreen ? 2 : 2, // Padding konsisten atau disesuaikan
              gap: 1,
              flexDirection: "column",
              width: isSmallScreen ? "100%" : "auto", // Lebar penuh di mobile
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {product.name}
            </Typography>

            <Typography
              sx={{ display: "flex", alignItems: "center", color: "grey" }}
            >
              <StarRoundedIcon sx={{ color: orange[500] }} /> {product.rating}{" "}
              dari ({product.reviews.length} reviewers)
            </Typography>

            <Typography sx={{ color: "grey" }}>
              {product.weight} gram
            </Typography>

            <Typography
              fontWeight="bold"
              variant="h5"
            >{`Rp${product.price.toLocaleString("id-ID")}`}</Typography>

            <Typography dangerouslySetInnerHTML={createMarkUp(product.desc)} />
          </Box>
        </Box>

        {/* Order Section */}
        <Box
          sx={{
            display: "flex",
            flex: isSmallScreen ? "none" : 1, // Nonaktifkan flex scaling di mobile
            width: isSmallScreen ? "100%" : "auto", // Lebar penuh di mobile
            p: isSmallScreen ? 0 : 2, // Padding 0 di mobile agar Order komponen mengelola sendiri
            justifyContent: "center",
            mt: isSmallScreen ? 2 : 0, // Margin top di mobile untuk memisahkan dari detail produk
          }}
        >
          <Order />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DetailProduct;