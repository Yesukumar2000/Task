import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

// Updated servicesData with category images and relative items
const servicesData = [
    {
      category: 'Popular',
      image: 'https://tse2.mm.bing.net/th?id=OIP.1QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api',
      items: [
        { name: 'Kurti, Saree & Lehenga', image: 'https://tse4.mm.bing.net/th?id=OIP.2qsgDUNHm2tWxM5MTwKuIwHaJ4&pid=Api' },
        { name: 'Women Western', image: 'https://tse1.mm.bing.net/th?id=OIP.YHxO4JcMET8clmnFyW24AgHaOm&pid=Api' },
      ],
    },
    {
      category: 'Ethnic Wear',
      image: 'https://tse1.mm.bing.net/th?id=OIP.-GxMfFAhSJrzKMnScTCoOwHaD4&pid=Api',
      items: [
        { name: 'Saree', image: 'https://tse4.mm.bing.net/th?id=OIP.2qsgDUNHm2tWxM5MTwKuIwHaJ4&pid=Api' },
        { name: 'Kurta', image: 'https://tse1.mm.bing.net/th?id=OIP.3zsgDUNHm2tWxM5MTwKuIwHaJ4&pid=Api' },
        { name: 'Dupatta', image: 'https://tse2.mm.bing.net/th?id=OIP.4zsgDUNHm2tWxM5MTwKuIwHaJ4&pid=Api' },
      ],
    },
    {
      category: 'Women Western',
      image: 'https://tse1.mm.bing.net/th?id=OIP.5QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api',
      items: [
        { name: 'Dress', image: 'https://tse3.mm.bing.net/th?id=OIP.6QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Top', image: 'https://tse4.mm.bing.net/th?id=OIP.7QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Jeans', image: 'https://tse2.mm.bing.net/th?id=OIP.8QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
      ],
    },
    {
      category: 'Lingerie',
      image: 'https://tse3.mm.bing.net/th?id=OIP.9QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api',
      items: [
        { name: 'Bra', image: 'https://tse1.mm.bing.net/th?id=OIP.10QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Panties', image: 'https://tse4.mm.bing.net/th?id=OIP.11QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Nightsuit', image: 'https://tse2.mm.bing.net/th?id=OIP.12QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Bathrobe', image: 'https://tse3.mm.bing.net/th?id=OIP.13QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Nightwear', image: 'https://tse1.mm.bing.net/th?id=OIP.14QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
      ],
    },
    {
      category: "Men's",
      image: 'https://tse4.mm.bing.net/th?id=OIP.15QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api',
      items: [
        { name: 'Shirt', image: 'https://tse2.mm.bing.net/th?id=OIP.16QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'T-Shirt', image: 'https://tse3.mm.bing.net/th?id=OIP.17QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Jeans', image: 'https://tse1.mm.bing.net/th?id=OIP.18QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
      ],
    },
    {
      category: 'Toys',
      image: 'https://tse4.mm.bing.net/th?id=OIP.19QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api',
      items: [
        { name: 'Action Figure', image: 'https://tse2.mm.bing.net/th?id=OIP.20QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Puzzle', image: 'https://tse3.mm.bing.net/th?id=OIP.21QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
        { name: 'Board Game', image: 'https://tse1.mm.bing.net/th?id=OIP.22QJ0NBEe7PaBERXGFEjUOgHaEK&pid=Api' },
      ],
    },
  ];
  
  

const Home = () => {
  const [openCategories, setOpenCategories] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
 const naviagate = useNavigate();
  const toggleCategory = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar content to be reused for permanent and temporary drawers
  const drawerContent = (
    <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {servicesData.map((service) => (
        <ListItem
          button
          key={service.category}
          onClick={() => {
            toggleCategory(service.category);
            if (isMobile) setMobileOpen(false);
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <img
            src={service.image}
            alt={service.category}
            width={50}
            height={50}
            style={{ borderRadius: '50%', marginBottom: 8, border: '1px solid #f84b0f' }}
          />
          <Typography variant="body2" align="center">
            {service.category}
          </Typography>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header AppBar */}
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f84b0f' }}>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              {/* Simple text for menu on mobile */}
              <Typography variant="button">Menu</Typography>
            </IconButton>
          )}
          <Typography variant="h6" component="div">
            All Services
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="home">
            <HomeIcon />
            <Typography variant="button" color="inherit">
              Home
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar: Permanent drawer for desktop and temporary for mobile */}
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }} // Better open performance on mobile.
            sx={{
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawerContent}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
            //   marginTop: 20,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                position: 'relative',
                mt: 1,
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        )}

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3, color:"black" }}>
          {servicesData.map((service) => (
            <Box
              key={service.category}
              sx={{ mb: 2, borderBottom: 1, borderColor: 'divider', pb: 1 }}
            >
              <Button
                fullWidth
                onClick={() => toggleCategory(service.category)
                 
                }
                sx={{ justifyContent: 'space-between',  color:"black" }}
              >
                {service.category}
                <span
                  style={{
                    transition: 'transform 0.3s',
                    transform: openCategories.includes(service.category)
                      ? 'rotate(90deg)'
                      : 'rotate(0deg)',
                  }}
                >
                 &gt;
                </span>
              </Button>
              <AnimatePresence>
                {openCategories.includes(service.category) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <List onClick={() => naviagate("/prices")}>
                      {service.items.map((item) => (
                        <ListItem key={item.name}>
                          <img
                            src={item.image}
                            alt={item.name}
                            width={40}
                            height={40}
                            style={{ borderRadius: '50%', marginRight: 8 }}
                          />
                          <Typography variant="body2">{item.name}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
