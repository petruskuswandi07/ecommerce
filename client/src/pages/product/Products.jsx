import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import products from "../../data/Products";

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <Card key={product.name} sx={{ width: 210, height: 280 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image[0] ? product.image[0].link : null}
              sx={{ minHeight: 200 }}
            />
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default Products;
