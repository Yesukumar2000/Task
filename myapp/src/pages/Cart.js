/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Card,
  Grid,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/material/styles';
import quickbasket from "../assets/image.png";
import { Navigate } from 'react-router-dom';

const CartItemCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  width: '100%',
}));

const ProductImage = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5',
  flexShrink: 0,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
  }
}));

const QuantityContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #e0e0e0',
  borderRadius: '20px',
  padding: '2px',
  transition: 'box-shadow 0.2s ease',
  '&:hover': {
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }
}));

const QuickTag = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  backgroundColor: '#e8f5e9',
  borderRadius: '4px',
  gap: '4px',
  marginBottom: '4px',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: '#d7f2d8',
  }
});

const ProductCard = styled(Card)(({ theme }) => ({
  padding: 0,
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: '100%',
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '600px',
  }
}));

const HoverIconButton = styled(IconButton)(({ theme }) => ({
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    transform: 'scale(1.1)',
  }
}));

const CouponBox = styled(Box)(({ theme }) => ({
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  marginBottom: theme.spacing(1.5), 
  backgroundColor: '#ffebd6', 
  padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    backgroundColor: '#ffe0c0',
    transform: 'translateX(4px)',
  }
}));

const Cart = () => {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({ 1: 1 });
  const theme = useTheme();

  const handleBack = () => {
    navigate("/home");
  };

  const handleQuantityChange = (itemId, change) => {
    const newQuantity = quantities[itemId] + change;
    if (newQuantity >= 1) {
      setQuantities(prev => ({
        ...prev,
        [itemId]: newQuantity
      }));
    }
  };
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', height: '40%', width: '100%' }}>
      <AppBar position="static" sx={{ backgroundColor: "#ff5722" }}>
        <Toolbar sx={{ minHeight: { xs: '56px' } }}>
          <HoverIconButton
            edge="start"
            color="inherit"
            onClick={handleBack}
            aria-label="back"
            sx={{ mr: 1, padding: { xs: '8px' } }}
          >
            <ArrowBackIcon />
          </HoverIconButton>
          <Typography variant="subtitle1" fontWeight="medium" sx={{ flexGrow: 1 }}>
            My Cart
          </Typography>
        </Toolbar>
      </AppBar>

      <ContentContainer>
        {/* Apply Coupon Section */}
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          mb={1.5} 
          backgroundColor="#ffebd6" 
          py={1.5}
          px={2}
          borderRadius={1}
        >
          <Box display="flex" alignItems="center">
            <Typography 
              variant="body2" 
              fontWeight="bold" 
              sx={{ 
                backgroundColor: '#ff8a65', 
                color: 'white', 
                borderRadius: '4px', 
                width: '20px', 
                height: '20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mr: 1,
                fontSize: '12px'
              }}
            >
              %
            </Typography>
            <Typography variant="body2" fontWeight="medium">Apply Coupon</Typography>
          </Box>
          <ChevronRightIcon fontSize="small" />
        </Box>

        {/* Quick Basket Section */}
        <Box 
          backgroundColor="#ffefd6" 
          p={1.5} 
          borderRadius={1} 
          mb={2}
          sx={{
            transition: 'box-shadow 0.2s ease',
            '&:hover': {
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} px={0.5}>
            <Typography variant="subtitle2" fontWeight="bold">
              Quick Basket (1)
            </Typography>
            <Typography variant="subtitle2" fontWeight="bold">
              ₹24.00
            </Typography>
          </Box>
          
          <CartItemCard>
            <ProductImage sx={{ml:3, mt:2 }}>
              <img 
                src={quickbasket} 
                alt="Bikaji Chowpati Bhelpuri" 
                style={{ width: '100%', height: '100%', m:10, objectFit: 'cover' }} 
              />
            </ProductImage>
            <Box flexGrow={1} sx={{ minWidth: 0, ml: 6 }}>
              <Typography 
                variant="body2" 
                fontWeight="medium" 
                mb={0.5} 
                noWrap
                sx={{
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#ff5722',
                  }
                }}
              >
                Bikaji Chowpati Bhelpuri 110
              </Typography>
              
              <Box display="flex" alignItems="center" mb={0.5} flexWrap="wrap">
                <Typography variant="body2" fontWeight="bold" mr={1}>
                  ₹24.00
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    backgroundColor: '#d7ffd3', 
                    padding: '0px 4px', 
                    borderRadius: '4px',
                    color: '#007700',
                    fontSize: '10px',
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#c5ffbe',
                    }
                  }}
                >
                  You Save ₹5.00
                </Typography>
              </Box>
              
              <Typography variant="caption" color="textSecondary" display="block" mb={0.5} fontSize="10px">
                Sold by: Reliance Retail
              </Typography>
              
              <QuickTag sx={{ py: 0, px: 1 }}>
                <Box sx={{ width: '6px', height: '6px', backgroundColor: '#4caf50', borderRadius: '50%' }}/>
                <Typography variant="caption" fontWeight="medium" fontSize="10px">Quick</Typography>
              </QuickTag>
              
              <Typography variant="caption" color="textSecondary" display="block" mb={0.5} fontSize="10px">
                Delivery in 10 mins
              </Typography>
              
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <Button 
                  size="small" 
                  variant="text" 
                  color="inherit" 
                  sx={{ 
                    fontSize: '10px', 
                    padding: 0, 
                    minWidth: 'auto', 
                    ml: -15,
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: '#ff5722',
                      background: 'transparent',
                    } 
                  }}
                >
                  Save for Later
                </Button>
                
                <QuantityContainer>
                  <HoverIconButton
                    size="small"
                    onClick={() => handleQuantityChange(1, -1)}
                    disabled={quantities[1] <= 1}
                    sx={{ color: '#9e9e9e', padding: '2px' }}
                  >
                    <RemoveIcon sx={{ fontSize: '16px' }} />
                  </HoverIconButton>
                  <Typography variant="body2" sx={{ margin: '0 6px', fontSize: '12px' }}>
                    {quantities[1]}
                  </Typography>
                  <HoverIconButton
                    size="small"
                    onClick={() => handleQuantityChange(1, 1)}
                    sx={{ color: '#9e9e9e', padding: '2px' }}
                  >
                    <AddIcon sx={{ fontSize: '16px' }} />
                  </HoverIconButton>
                </QuantityContainer>
              </Box>
            </Box>
          </CartItemCard>
        </Box>

        {/* Top Deals Section */}
        <Typography variant="subtitle2" fontWeight="bold" mt={2.5} mb={1}>
          Top Deals
        </Typography>
        <Grid container spacing={10}>
          {[1, 2, 3].map((id) => (
            <Grid item xs={4} key={id}>
              <ProductCard elevation={0}>
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '100%', 
                    backgroundColor: '#e0e0e0',
                    position: 'relative',
                    transition: 'opacity 0.2s ease',
                    '&:hover': {
                      opacity: 0.9,
                    }
                  }}
                />
                <Box p={0.75}>
                  <Typography 
                    variant="caption" 
                    fontWeight="bold" 
                    display="block" 
                    noWrap 
                    fontSize="10px"
                    sx={{
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#ff5722',
                      }
                    }}
                  >
                    KAREBY Girls Cotton
                  </Typography>
                  <Typography variant="caption" display="block" fontSize="10px" >
                    ₹260.00
                  </Typography>
                  <Box display={"flex"} alignItems="center" justifyContent="space-around" mt={0.5}>

                   <Typography sx={{ textDecoration: "line-through", fontSize: '12px' }}>₹699.00</Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#e53935', 
                      backgroundColor: "#fbbfaa", 
                      borderRadius: 3, 
                      p:0.5,
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#f9a08d',
                        transform: 'scale(1.05)',
                      }
                    }} 
                    fontSize="10px"
                  >
                    25% Off
                  </Typography>
                  </Box>
                </Box>
              </ProductCard>
            </Grid>
          ))}
        </Grid>

        {/* Recommended Products Section */}
        <Typography variant="subtitle2" fontWeight="bold" mt={2.5} mb={1}>
          Recommended Products
        </Typography>
        <Grid container spacing={10}>
          {[1, 2, 3].map((id) => (
            <Grid item xs={4} key={id}>
              <ProductCard elevation={0}>
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '100%', 
                    backgroundColor: '#e0e0e0',
                    position: 'relative',
                    transition: 'opacity 0.2s ease',
                    '&:hover': {
                      opacity: 0.9,
                    }
                  }}
                />
                <Box p={0.75}>
                  <Typography 
                    variant="caption" 
                    fontWeight="bold" 
                    display="block" 
                    noWrap 
                    fontSize="10px"
                    sx={{
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#ff5722',
                      }
                    }}
                  >
                    KAREBY Girls Cotton
                  </Typography>
                  <Typography variant="caption" display="block" fontSize="10px">
                    ₹260.00
                  </Typography>
                  <Box display={"flex"} alignItems="center" justifyContent="space-around" mt={0.5}>

                  <Typography sx={{ textDecoration: "line-through", fontSize: '12px' }}>₹699.00</Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#e53935', 
                      backgroundColor: "#fbbfaa", 
                      borderRadius: 3, 
                      p:0.5,
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#f9a08d',
                        transform: 'scale(1.05)',
                      }
                    }} 
                    fontSize="10px"
                  >
                  25% Off
                  </Typography>
                  </Box>
                </Box>
              </ProductCard>
            </Grid>
          ))}
        </Grid>

        <Box height="70px" />
      </ContentContainer>

      <Box 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          backgroundColor: '#fcf8f4',
          boxShadow: '0px -2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 2,
          px: 2,
          width: '100%'
        }}
      >
        <Box>
          <Typography variant="subtitle2" fontWeight="bold">₹250.00</Typography>
          <Typography variant="caption" sx={{ color: '#4caf50', fontSize: '10px' }}>
            You Saved ₹25.00
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: '#ff5722',
            borderRadius: 20,
            textTransform: 'none',
            px: 3,
            py: 0.75,
            mr: 3,
            fontSize: '13px',
            transition: 'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              backgroundColor: '#e64a19',
              transform: 'scale(1.03)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }
          }}
          onClick={() => (
            navigate("/order-review")
          )}
        >
          Place Order
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;