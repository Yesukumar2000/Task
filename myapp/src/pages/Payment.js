import React from 'react';
import {
    Card,
    Typography,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { styled } from '@mui/material/styles';

const PaymentOptionCard = styled(Card)(({ theme }) => ({
    mb: 2,
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "box-shadow 0.3s",
    "&:hover": {
        boxShadow: 6,
        transform: 'scale(1.02)',
    },
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    cursor: "pointer"
}));

const PaymentIcon = styled(Box)(() => ({
    fontSize: '2rem',
    color: '#ff5722',
}));

const Payment = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/order-review");
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#ff5722" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleBack}
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Select Payment Method
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box sx={{ p: 2, maxWidth: 600, mx: "auto" }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Amount to pay: ₹ 3780
                </Typography>

                <PaymentOptionCard sx={{ p: 2, backgroundColor: "#ffebd6" }}>
                     <Box display="flex" alignItems="center">
                        <PaymentIcon>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1,  }}>UPI ID</Typography>
                        <CreditCardIcon fontSize="large" /></PaymentIcon>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 2, mt: 4 }}>
                            Add new cards
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#757575",  mt: 4 }}>
                        &gt;
                    </Typography>
                </PaymentOptionCard>

                <PaymentOptionCard sx={{ p: 2, mt: 4 }}>
                    <Box display="flex" alignItems="center" >
                        <PaymentIcon>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1,  }}>UPI ID</Typography>
                        <AccountBalanceWalletIcon fontSize="large" /></PaymentIcon>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 2, mt: 4 }}>
                            Add new UPI ID
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#757575", mt: 4 }}>
                        &gt;
                    </Typography>
                </PaymentOptionCard>

                <PaymentOptionCard sx={{ p: 2, mt: 4 }}>
                    <Box display="flex" alignItems="center">
                        <PaymentIcon>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1  }}>Netbanking</Typography>
                            <AccountBalanceIcon fontSize="large" /></PaymentIcon>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: -4, mt: 4 }}>
                            Netbanking
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#757575" , mt: 4 }}>
                        &gt;
                    </Typography>
                </PaymentOptionCard>

                <PaymentOptionCard sx={{ p: 2, mt: 4 }}>
                    <Box display="flex" alignItems="center">
                        <PaymentIcon>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2  }}> Pay after service</Typography>
                            <CreditCardIcon fontSize="large" /></PaymentIcon>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: -12, mt: 7 }}>
                            Pay online after service
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#757575", mt: 4 }}>
                        &gt;
                    </Typography>

                    
                </PaymentOptionCard>

                <PaymentOptionCard sx={{ p: 2 }}>
                    <Box display="flex" alignItems="center">
                        <PaymentIcon>
                            <AccountBalanceWalletIcon fontSize="large" /></PaymentIcon>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ ml: 4, mt: 1 }}>
                            Pay with cash after service
                        </Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#757575", mt: 2 }}>
                        &gt;
                    </Typography>
                </PaymentOptionCard>
                
                <Divider sx={{ my: 2 }} />
            </Box>
        </>
    );
};

export default Payment;
