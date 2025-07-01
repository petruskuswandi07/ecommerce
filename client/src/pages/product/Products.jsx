import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";
import products from "../../data/Products";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { orange } from "@mui/material/colors";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 30;

  const searchFunction = (e) => {
    const { name, value } = e.target;

    if (name === "search") {
      setSearchTerm(value);
    } else if (name === "category") {
      setCategoryTerm(value);
    }
    setCurrentPage(1);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProduct = useMemo(() => {
    return products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch =
        categoryTerm === "all" ||
        product.category.toLowerCase().includes(categoryTerm.toLowerCase());
      return nameMatch && categoryMatch;
    });
  }, [products, searchTerm, categoryTerm]);

  const allCategories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, [products]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const paginatedProducts = filteredProduct.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredProduct.length / productsPerPage) || 1;

  const pageChanging = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const detailProductPage = (product) => {
    navigate(`/${product}`)
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Input
          placeholder="Cari sesuatu..."
          name="search"
          type="text"
          onChange={searchFunction}
          value={searchTerm}
          sx={{ p: 1 }}
        />
        <FormControl sx={{ width: 300 }}>
          <InputLabel id="category-select-label">Kategori</InputLabel>
          <Select
            labelId="category-select-label"
            name="category"
            label="kategori"
            value={categoryTerm}
            onChange={searchFunction}
          >
            <MenuItem value="all">Semua Kategori</MenuItem>
            {allCategories.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mt: 2,
        }}
      >
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <Card
              key={product.name}
              sx={{
                width: 210,
                minHeight: 280,
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => detailProductPage(product.name)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={product.image[0] ? product.image[0].link : null}
                  sx={{ minHeight: 200, objectFit: "cover" }}
                />
              </CardActionArea>
              <CardContent>
                <Typography>{product.name}</Typography>
                <Typography fontWeight="bold">{`Rp${parseFloat(
                  product.price
                ).toLocaleString("id-ID")}`}</Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <StarRoundedIcon sx={{ color: orange[500] }} />{" "}
                    {product.rating}
                  </Typography>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    stok: {product.stock}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ width: "100%", textAlign: "center", mt: 4 }}
          >
            Tidak ada produk yang ditemukan.
          </Typography>
        )}
      </Box>
      <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={pageChanging}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Products;
