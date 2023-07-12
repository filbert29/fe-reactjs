import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AlbaLogo from '../assets/image/alba-logo.png'

const pages = ['Service', 'About', 'Portofolio', 'Blog', 'Career'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
    className='navbar'
    sx={{
        backgroundColor: "#FFF",
        boxShadow: "0px 8px 10px 0px rgba(0, 0, 0, 0.05)",
        color: "black",
        padding: {md: "10px", xs: "20px"},
        position: "fixed"
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          
          <Box mr={5} sx={{display: { xs: 'none', md: 'flex' }}}>
            <a href="#"><img style={{width: "100px"}} src={AlbaLogo} alt="" /></a>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              ml: 5,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box sx={{display: { xs: 'flex', md: 'none' }}}>
            <img style={{width: "100px"}} src={AlbaLogo} alt="" />
          </Box>
          </Typography>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', marginX: "auto", fontWeight: "600", textTransform: "capitalize", ":hover": {color: 'orange'} }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Button sx={{
                backgroundColor: "#FFCE07",
                borderRadius: "30px",
                color: "black",
                padding: {sm: "15px 30px", xs: "10px 20px"},
                textTransform: "capitalize",
                fontSize: "12px",
                fontWeight: "600",
                marginLeft: {md: "20px", xs: "0px"}
            }}>Contact Us</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;