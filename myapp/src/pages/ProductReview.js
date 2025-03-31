/* eslint-disable react/jsx-no-undef */
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  Box,
  CardContent,
  CardMedia,
  Button,
  Container,
  IconButton,
  CardActions,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ProductReview = () => {
  const product = {
    name: "ASUS GeForce RTX 4070 Ti Super Dual OC",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTByLZ8ccVEYD0WifhGmTjhPAZCxFDlZDMF-whWEG4KbOUWKWxGVO8LbVxCUzE6ocojdy_fMFs_Znm9DSf07h4Go0xnz_F_taBVMKYZUC9cpRH2XNZ_BmaqAA", 
    offers: 2,
  };

  const reviews = [
    {
      source: "Tweaktown",
      date: "24/01/2024",
      testedProducts: 1,
      title: "ASUS GeForce RTX 4070 Ti super ROG Strix OC",
      rating: "93/100",
      details:
        "Performance : 97% - Quality: 99% - Features: 90% - Value: 84% - RECOMMENDED!",
    },
    {
      source: "Tweaktown",
      date: "24/01/2024",
      testedProducts: 1,
      title: "ASUS GeForce RTX 4070 Ti super ROG Strix OC",
      rating: "93/100",
      details:
        "Performance : 97% - Quality: 99% - Features: 90% - Value: 84% - RECOMMENDED!",
    },
  ];
  let navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/home");
  };
  return (
    <>
      {/* Top AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "#ff5722" }}>
        <Toolbar>
           <Box size="large" edge="start" color="inherit" sx={{ mb: 1, mr: 1, fontSize: 30 }} onClick={handleHomeClick}>
                        {'<'}
                        </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Review
            {/* {product.name} */}
          </Typography>
          <IconButton edge="end" color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Container */}
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box
          display="flex"
          alignItems="start"
          justifyContent="space-between"
          sx={{ mb: 1 }}
          
        >
          <Box display="flex" alignItems="start">
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: 150,
                height: 70,
                borderRadius: 1,
                mr: 1,
              }}
            />
            <Typography variant="h6">{product.name}</Typography>
          </Box>
          <MoreVertIcon />
        </Box>

        <Box sx={{ pl: 15 }}>
          <Button variant="contained" color="secondary" size="small">
            {product.offers} Offers
          </Button>
        </Box>
      </CardContent>
    </Card>

        <Typography variant="h5" sx={{ mb: 2 }}>
          Product Review
        </Typography>

        {/* Review Cards */}
        {reviews.map((review, index) => (
          <Card key={index} sx={{ mb: 2, border: "1px solid #f84b0f", borderRadius: 3, backgroundColor: "#ffebd6" }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {review.source}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Issue online of {review.date} - {review.testedProducts} Product tested
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {review.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Rating: {review.rating}
              </Typography>

              <Typography variant="body2">{review.details}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
            </CardActions>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default ProductReview;
