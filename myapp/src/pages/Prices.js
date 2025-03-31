import React from 'react';
import { Box, Typography, Button, Paper, IconButton, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
// Styled components
const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: theme.palette.primary.main,
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

const ProductCardContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  borderRadius: theme.spacing(1),
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
}));

const ProductImage = styled(Box)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  backgroundColor: '#f0f0f0',
  borderRadius: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
    width: theme.spacing(8),
    height: theme.spacing(8),
  }
}));

const ProductInfo = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const PriceSection = styled(Box)(({ theme }) => ({
  textAlign: 'right',
  minWidth: '30px',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
    marginTop: theme.spacing(1),
  }
}));

const DeliveryOption = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(0.5),
}));
const Prices = () => {
  const naviagate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Header sx={{ backgroundColor: "#ff5722" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="back">
          <ArrowBackIcon onClick={()=>{
            naviagate("/home");
          }} />
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

      {/* Location and Actions */}
      <Box sx={{  backgroundColor: "#ff5722", display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: (theme) => theme.spacing(1, 2) }}>
        <LocationBox sx={{ borderRadius: 3, backgroundColor: "white" }}>
          <LocationOnIcon size="small" sx={{ mr: 0.5,  }} />
          <Typography variant="caption" color="inherit">Pune 412210</Typography>
        </LocationBox>
        <Box sx={{ display: 'flex', alignItems: 'center' , borderRadius: 1, color:"black"  }}>
          <Button startIcon={<SortIcon />} variant="outlined" size="small"sx={{ mr : 2, borderRadius: 3, backgroundColor: "white", color:"black" }}>Sort</Button>
          <Button startIcon={<FilterListIcon />} variant="outlined" size="small" sx={{ borderRadius: 3, backgroundColor: "white", color:"black" }}>Filter</Button>
        </Box>
      </Box>

      {/* Category Tabs (Basic - can be made scrollable or more dynamic) */}
      <Box sx={{ display: 'flex', overflowX: 'auto', padding: (theme) => theme.spacing(1) , borderRadius: 3, backgroundColor: "#f0f0f0"}}>    
        <Button size="small" variant="outlined" sx={{ mr: 1 , backgroundColor: "white", borderRadius: 3,border:"1px solid #dbdee4", color:"grayText"}}>All</Button>
        <Button size="small" variant="outlined" sx={{ mr: 1,  backgroundColor: "white", borderRadius: 3, border:"1px solid #dbdee4", color:"grayText" }}>Herbal & Ayurvedic</Button>
        <Button size="small" variant="outlined" sx={{ mr: 1 , backgroundColor: "white", borderRadius: 3, border:"1px solid #dbdee4", color:"grayText"}}>Herbal & Ayurvedic</Button>
        <Button size="small" variant="outlined" sx={{ mr: 1 , backgroundColor: "white", borderRadius: 3, border:"1px solid #dbdee4",  color:"grayText"}}>Herbal & Ayurvedic</Button>
        {/* Add more category buttons as needed */}
      </Box>

      {/* Product Listings */}
      <Box sx={{ spacing: 2, padding: 2 }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <ProductCardContainer key={index}>
            {/* Image Section */}
            <ProductImage>
              <Typography variant="caption">Image</Typography>
            </ProductImage>

            {/* Product Details */}
            <ProductInfo>
              <Typography variant="subtitle1" fontWeight="bold">Thums Up 750 ml</Typography>
              <DeliveryOption sx={{  borderRadius:1, border:"1px solid #dbdee4", p:1, m:1}}>
                <Typography variant="body2" color="text.secondary"  sx={{ backgroundColor: "#f5c846", borderRadius:1 }}>Blinkit</Typography>
                <Typography variant="body2" color="text.secondary">₹ 40.00</Typography>
              </DeliveryOption>
              <DeliveryOption sx={{  borderRadius:1, border:"1px solid #dbdee4", p:1, m:1}}>
                <Typography variant="body2" color="#fa405f">zepto</Typography>
                <Typography variant="body2" color="text.secondary">₹ 40.00</Typography>
              </DeliveryOption>
              <DeliveryOption sx={{  borderRadius:1, border:"1px solid #dbdee4", p:1, m:1}}> 
                <Typography variant="body2" color="#f17928">swiggy</Typography>
                <Typography variant="body2" color="text.secondary">₹ 40.00</Typography>
              </DeliveryOption>
            </ProductInfo>

            {/* Price & Actions */}
            <PriceSection>
              <Typography variant="h6" fontWeight="bold" >₹ 35.00</Typography>
              <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>8 min</Typography>
              <Button variant="contained" size="small" sx={{mt: 3,mb:-2, backgroundColor: "#ff5722", borderRadius: 3}} onClick={()=>{
               naviagate("/product")
             }}>Add +</Button>
            </PriceSection>
          </ProductCardContainer>
        ))}
      </Box>
    </Box>
  );
};

export default Prices;