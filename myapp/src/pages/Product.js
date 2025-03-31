/* eslint-disable no-undef */
import React, {useState} from 'react';
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Rating,
  Button,
  InputBase 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, alpha } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Shirt  from "../assets/shirt.png";
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.common.white,
  justifyContent: 'space-between',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const LocationBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5, 1),
    marginRight: theme.spacing(1),
  }));
const ProductImage = styled('img')({
  width: '100%',
  maxHeight: '300px',
  objectFit: 'contain',
});

const OfferCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
}));

const SellerInfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  marginTop: theme.spacing(1),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const YouMayLikeCard = styled(Card)(({ theme }) => ({
  width: '45%', // Responsive width for mobile
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(2),
  '@media (min-width: 600px)': {
    width: 150, // Fixed width for larger screens
  },
}));


const ColorButton = styled(Button)(({ theme, color }) => ({
    minWidth: 40,
    height: 40,
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: theme.spacing(1),
    padding: 0,
    border: '1px solid #ccc',
    '&.selected': {
        border: 'none',
        boxShadow: `0 0 5px ${color}`, // Add a shadow for selected state
    },
}));

const SizeButton = styled(Button)(({ theme, selected }) => ({
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    minWidth: 40,
    '&.selected': {
        backgroundColor: '#f0f0f0', // Light background for selected
        fontWeight: 'bold',
    },
}));

const Product = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (colorValue) => {
    setSelectedColor(colorValue);
  };

  const handleSizeChange = (sizeValue) => {
    setSelectedSize(sizeValue);
  };

  const product = {
    name: "Netplay Men Diamond Knit Slim Fit Polo T-Shirt",
    info:"Men Diamond Knit Slim Fit Polo T-Shirt",
    rating: 4.5,
    ratingCount: 2256896,
    price: 496.00,
    originalPrice: 545.00,
    discount: "9% Off",
    colors: [
      { name: "Blue", value: "blue", hex: "#2196F3" },
      { name: "Yellow", value: "yellow", hex: "#FFEB3B" },
      { name: "White", value: "white", hex: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    offers: [
      {
        title: "Cashback",
        details: "upto ₹56.97 cashback as Amazon Pay Balance when...",
        link: "2 offers",
        color: "success",
      },
      {
        title: "No Cost EMI",
        details: "upto ₹85.51 EMI interest savings on UPI payments...",
        link: "1 offer",
        color: "primary",
      },
      {
        title: "Bank Offer",
        details: "upto ₹85.51 interest savings on UPI payments",
        link: "1 offer",
        color: "secondary",
      },
    ],
    seller: "Reliance Retail",
    brand: "Netplay",
    manufacturer: "Reliance Retail Limited",
    manufacturerAddress:
      "3rd Floor, Court Housem, Lokmanya Tilak Marg, Dhobi Talao, Mumbai 4000002, Maharashtra, India",
    countryOfOrigin: "India",
    marketedBy:
      "Reliance Retail Limited Shed No - 77 / 80, Indian Corporation Godown Mankoll Naka, Village Dapode Taluka, Bhiwandi Dist Thane Maharastra PIN - 412210",
    returnPolicy: "This Product is returnable within 10 days know more.",
    features: ["Machine wash cold", "100% cotton"],
    youMayLike: [
      {
        id: 1,
        name: "KAREY Girls Cotton Half Sleeve T-Shirt",
        price: 260.00,
        discount: "29% Off",
        image: "https://m.media-amazon.com/images/I/71r-X6j4pJL._AC_UY1000_.jpg", // Placeholder
      },
      {
        id: 2,
        name: "KAREY Girls Cotton Half Sleeve T-Shirt",
        price: 260.00,
        discount: "29% Off",
        image: "https://m.media-amazon.com/images/I/71r-X6j4pJL._AC_UY1000_.jpg", // Placeholder
      },
      {
        id: 3,
        name: "KAREY Girls Cotton Half Sleeve T-Shirt",
        price: 260.00,
        discount: "29% Off",
        image: "https://m.media-amazon.com/images/I/71r-X6j4pJL._AC_UY1000_.jpg", // Placeholder
      },
    ],
  };
  
  let naviagate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', paddingBottom: 4 }}>
      {/* Header */}
      <Header sx={{ backgroundColor: "#ff5722" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon />
        </IconButton>
        <Search sx={{ borderRadius: 3, backgroundColor: "white", color: "gray" }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Here…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <IconButton size="large" aria-label="cart" color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Header>
        <Box sx={{  backgroundColor: "#ff5722", display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: (theme) => theme.spacing(1, 2) }}>
                <LocationBox sx={{ borderRadius: 3, backgroundColor: "#ff5722", display: 'hiden' }}>
                  
                </LocationBox>
                <Box sx={{ display: 'flex', alignItems: 'center' , borderRadius: 1, color:"black"  }}>
                  <Button startIcon={<SortIcon />} variant="outlined" size="small"sx={{ mr : 2, borderRadius: 3, backgroundColor: "white", color:"black" }}>Sort</Button>
                  <Button startIcon={<FilterListIcon />} variant="outlined" size="small" sx={{ borderRadius: 3, backgroundColor: "white", color:"black" }}>Filter</Button>
                </Box>
              </Box>
                  <Box sx={{backgroundColor: '#f0f0f0', display: 'flex',flexDirection: 'column' , padding: (theme) => theme.spacing(1, 2) }}>

                  <Box fontSize={22}>Netplay</Box>
                  <Box sx={{ paddingTop: 1, backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" component="h1">
                    {product.info}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {product.rating}
                    </Typography>
                      </Box>
                  </Box>
                  </Box>

      {/* Product Image */}
      <Box sx={{ padding: 2, backgroundColor: '#fff' }}>
        <ProductImage src={Shirt} alt="T-Shirt" />
        
      </Box>

      {/* Product Info */}
      <Box sx={{ padding: 2, backgroundColor: '#fff', mt: 1 }}>
        <Typography variant="h6" component="h1">
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
          <Typography variant="body2" sx={{ ml: 0.5 }}>
            {product.rating}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            ₹{product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ ml: 1, textDecoration: 'line-through', color: 'text.secondary' }}>
            ₹{product.originalPrice.toFixed(2)}
          </Typography>
          <Typography variant="subtitle2" color="success" sx={{ ml: 1 }}>
            {product.discount}
          </Typography>
        </Box>
      </Box>

        {/* Color Selection */}
        <Box sx={{ padding: 2, backgroundColor: '#fff', mt: 1 }}>
            <Typography variant="subtitle1" fontWeight="bold">
            Colour
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, flexWrap: 'wrap' }}>
            {product.colors.map((color) => (
                <ColorButton
                key={color.value}
                color={color.hex}
                onClick={() => handleColorChange(color.value)}
                className={selectedColor === color.value ? 'selected' : ''}
                aria-label={color.name}
                />
            ))}
            </Box>
        </Box>

      {/* Size Selection */}
      <Box sx={{ padding: 2, backgroundColor: '#fff', mt: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Size
          </Typography>
          <Typography variant="body2" color="warning">
            Size Chart
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
          {product.sizes.map((size) => (
            <SizeButton
              key={size}
              onClick={() => handleSizeChange(size)}
              sx={{ color: "black",fontWeight: 5, border: '1px solid #ccc', borderRadius: 3, marginRight: 1, marginBottom: 1 }}
              className={selectedSize === size ? 'selected' : ''}
            >
              {size}
            </SizeButton>
          ))}
        </Box>
      </Box>

      {/* Offers */}
      <Box sx={{ padding: 2, mt: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
          Offers
        </Typography>
        <Grid container spacing={2}>
          {product.offers.map((offer, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <OfferCard>
                <LocalOfferIcon color={offer.color} sx={{ mr: 0.5 }} />
                <Typography variant="body2" fontWeight="bold">
                  {offer.title}
                </Typography>
                <Typography variant="caption">
                  {offer.details}
                </Typography>
                <Typography variant="outline" color="warning">
                  {offer.link}
                </Typography>
              </OfferCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Seller Information */}
      <SellerInfoBox>
        <SectionTitle variant="subtitle1">Sold By</SectionTitle>
        <Typography variant="body2" color="text.secondary">
          {product.seller}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <SectionTitle variant="subtitle1">About Brand</SectionTitle>
        <Typography variant="body2" color="text.secondary">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of taxt.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <SectionTitle variant="subtitle1">Features & Details</SectionTitle>
        {product.features.map((feature, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            • {feature}
          </Typography>
        ))}
        <Divider sx={{ my: 2 }} />
        <SectionTitle variant="subtitle1">Product Information</SectionTitle>
        
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="body2" fontWeight="bold" color="text.secondary">
                Brand : <Typography variant="body2" color="text.secondary" display="inline">{product.brand}</Typography>
                </Typography>
            </Grid>
            
            <Grid item xs={12}>
                <Typography variant="body2" fontWeight="bold" color="text.secondary">
                Manufacturer : <Typography variant="body2" color="text.secondary" display="inline">{product.manufacturer}</Typography>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" fontWeight="bold" color="text.secondary">
                Manufacturer Address : <Typography variant="body2" color="text.secondary" display="inline">{product.manufacturerAddress}</Typography>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" fontWeight="bold" color="text.secondary">
                Country of Origin : <Typography variant="body2" color="text.secondary" display="inline">{product.countryOfOrigin}</Typography>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" fontWeight="bold" color="text.secondary">
                Marketed By : <Typography variant="body2" color="text.secondary" display="inline">{product.marketedBy}</Typography>
                </Typography>
            </Grid>
            </Grid>
        
        <Button size="small" variant='outlined' sx={{ mt: 2, color: 'black' , borderRadius:3, border: '1 px solid gray ', m: 2}}>
          More Details
        </Button>
        <Divider sx={{ my: 2 }} />
        <SectionTitle variant="subtitle1">Return Policy</SectionTitle>
        <Typography variant="body2" color="text.secondary">
          {product.returnPolicy}
        </Typography>
      </SellerInfoBox>

      {/* You May Also Like */}
      <Box sx={{ padding: 2, backgroundColor: '#fff', mt: 1 }}>
        <SectionTitle variant="subtitle1">You may also like</SectionTitle>
        <Box sx={{ display: 'flex', overflowX: 'auto', mt: 1, flexWrap: 'wrap' }}>
          {product.youMayLike.map((item) => (
            <YouMayLikeCard key={item.id}>
              <CardMedia
                component="img"
                height="100"
                image={Shirt} // Placeholder image
                alt="Similar Product"
              />
              <CardContent sx={{ padding: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Sponsored
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="subtitle2">₹{item.price.toFixed(2)}</Typography>
                <Typography variant="caption" color="success">
                  {item.discount}
                </Typography>
              </CardContent>
            </YouMayLikeCard>
          ))}
        </Box>
      </Box>

      {/* Questions & Answers */}
      <Box sx={{ padding: 2, backgroundColor: '#fff', mt: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            Questions & Answers
          </Typography>
          <Button startIcon={<QuestionMarkIcon />} size="small" color="warning">
            Ask a question
          </Button>
        </Box>
        <Box display="flex" alignItems="center" color="warning.main">
          <Typography variant="body2" sx={{borderRadius: 3, backgroundColor: "#f6efef",p:1, height: 30}} >No question available for this product</Typography>
        </Box>
      </Box>

      {/* Ratings & Reviews */}
      <Box sx={{ padding: 2, backgroundColor: '#fff', mt: 1, m:2 }}>
        <SectionTitle variant="subtitle1">Ratings & Reviews</SectionTitle>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="flex-start">
          <Box mr={{ xs: 0, md: 2, }} mb={{ xs: 2, md: 0,  }}>
            <Typography variant="h4" fontWeight="bold">
              {product.rating}
            </Typography>
            <Rating name="read-only" value={product.rating} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary">
              {product.ratingCount.toLocaleString()} Reviews
            </Typography>
          </Box>
          <Box flexGrow={1}>
            {[5, 4, 3, 2, 1].map((ratingValue) => {
              const percentage = (
                (product.ratingCount > 0
                  ? (product.ratingCount * (5 - Math.abs(5 - ratingValue))) / product.ratingCount
                  : 0) * 10
              ).toFixed(0);
              return (
                <Box key={ratingValue} display="flex" alignItems="center" mb={0.5} width='100%'>
                  <Typography variant="body2" mr={1} width="130px">
                    {ratingValue} <StarIcon sx={{ fontSize: 16, verticalAlign: 'middle' }} />
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: '#e0e0e0',
                      height: 8,
                      width: '100%',
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#FFC107', // Assuming star color is yellow
                        height: 8,
                        width: `${percentage}%`,
                        borderRadius: 4,
                      }}
                    />
                  </Box>
                  <Typography variant="body2" ml={1} width={40}>
                    {percentage}%
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Button variant="outlined" sx={{ mt: 2, width: '100%', maxWidth: 200, color: "black", borderRadius:3, border: '1 px solid gray ', m: 2}}>
          Write a review
        </Button>
      </Box>

      {/* Bottom Navigation (Example) */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          borderTop: '1px solid #e0e0e0',
          padding: 1,
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Button variant="contained" color="warning" sx={{ flex: 1, mr: 1 }} onClick={()=>{
            naviagate("/cart")
        }}>
          Add to Cart
        </Button>
        <Button variant="contained" color="primary" sx={{ flex: 1 }} onClick={()=>{
            naviagate("/product-review")
        }}>
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
