import React from "react";
import {
  Card,
  Typography,
  Button,
  Box,
  Divider,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import quickbasket from "../assets/image.png"; 

const OrderReview = () => {
  let navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#ff5722" }}>
        <Toolbar>
          <Box
            sx={{
              mb: 1,
              mr: 1,
              fontSize: 30,
              cursor: "pointer",
              "&:hover": { color: "grey.300" },
            }}
            onClick={handleHomeClick}
          >
            {"<"}
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Order Review
          </Typography>
          <IconButton edge="end" color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2, maxWidth: 500, mx: "auto" }}>
        {/* Header */}
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2}}>
          Delivery Address
        </Typography>
        
        {/* Delivery Address */}
        <Card
          sx={{
            mb: 2,
            p: 2,
            backgroundColor: "#ffebd6",
            transition: "box-shadow 0.3s",
            "&:hover": { boxShadow: 6 },
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Prashant
            <IconButton size="small" sx={{ float: "right" }}>
              <MoreVertIcon />
            </IconButton>
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="error"
            startIcon={<HomeIcon />}
            sx={{
              textTransform: "none",
              mb: 1,
              backgroundColor: "#FF5722",
              borderRadius: 3,
              
              transition: "background-color 0.3s",
              "&:hover": { backgroundColor: "#e64a19" },
            }}
            onClick={handleHomeClick}
          >
            Home
          </Button>
          <Typography variant="body2" color="textSecondary">
            01, 01,2 Building, Paravthi Paytha, Pune, Maharashtra, 411009
            <br />
            Phone: +91-1234567890
          </Typography>
        </Card>
        
        {/* WhatsApp Notification */}
        <Card
          sx={{
            mb: 2,
            p: 2,
            display: "flex",
            borderRadius: 3,
            alignItems: "center",
            backgroundColor: "#ffebd6",
            transition: "box-shadow 0.3s",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <WhatsAppIcon color="success" sx={{ mr: 1, height: 60 }} />
          <Typography variant="body2">Enable order updates on WhatsApp</Typography>
        </Card>
        
        {/* Product Summary */}
        <Card
          sx={{
            mb: 2,
            p: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffebd6",
            borderRadius: 3,
            height: 100,
            transition: "box-shadow 0.3s",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <Box
            component="img"
            src={quickbasket}
            
            alt="Product Image"
            sx={{ width: 50, height: 50, borderRadius: 1, mr: 2, backgroundColor: "#ffebd6", }}
          />
          <Box flexGrow={1}>
            <Typography variant="subtitle1" fontWeight="bold">
              Quick Basket (1)
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ₹24.00 - Delivery in 10 to 30 mins
            </Typography>
          </Box>
        </Card>
        
        {/* Payment Details */}
        <Card
          sx={{
            mb: 2,
            p: 2,
            transition: "box-shadow 0.3s",
            "&:hover": { boxShadow: 6 },
            
          }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            Payment Details
          </Typography>
          <Divider sx={{ mb: 1 }} />
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>MRP Total</Typography>
            <Typography sx={{ textDecoration: "line-through" }}>₹20.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Product Discount</Typography>
            <Typography color="success">-₹7.00</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Delivery Fee (Quick)</Typography>
            <Typography color="success">FREE</Typography>
          </Box>
          <Divider sx={{ mb: 1 }} />
          <Box display="flex" justifyContent="space-between" fontWeight="bold">
            <Typography>Total</Typography>
            <Typography>₹13.00</Typography>
          </Box>
          <Typography color="success" fontSize={12} mt={1}>
            You saved ₹7.00
          </Typography>
        </Card>
        
        {/* Payment Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">₹13.00</Typography>
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{
              textTransform: "none",
              mb: 1,
              backgroundColor: "#FF5722",
              borderRadius: 5,
              transition: "background-color 0.3s, transform 0.3s",
              "&:hover": { backgroundColor: "#e64a19", transform: "scale(1.02)" },
            }}
            onClick={() => navigate("/payment")}
          >
            Make Payment
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default OrderReview;
