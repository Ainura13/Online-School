import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Badge } from '@mui/material';
import { getCountProductsInCart } from '../../helpers/functions';
import { ADMIN } from '../../helpers/consts';
import { useCart } from '../../contexts/CartContextProvider';
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import Drawer from '@mui/material/Drawer';
import Cart from '../cart/Cart';


const pages = [
  { name: ' НАШИ КУРСЫ', link: '/courses', id: 1 },
  { name: 'О НАС', link: '/about', id: 2 },
  { name: 'СВЯЗАТЬСЯ С НАМИ', link: '/contacts', id: 3 },
  // { name: 'ADMIN', link: '/admin', id: 4 },
];

const settings = ['ПРОФИЛЬ', 'АККАУНТ', 'ВЫХОД'];

const Navbar = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  console.log(email);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { addProductToCart } = useCart();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(getCountProductsInCart);
  }, [addProductToCart]);

  //Cart

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 

  const list = (anchor) => (
    <Box
      sx={{ widt: 'auto' }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Cart/>

    </Box>
  );

  console.log(count)

  return (
    <AppBar position="static" sx={{ bgcolor: '#fff', padding: '0 0 10px', boxShadow: '10px 5px 5px #556b724f'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" mr={4}>
            <img
              src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/252/7254531252_97fb15cc-6b93-44d9-ac6d-71685d8ef5d2.png?cb=1652175155"
              alt="123"
            />
          </Link>

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
              <Box>
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography
                        sx={{
                          ml: 'auto',
                          my: 1,
                          color: 'black',
                          display: 'block',
                        }}
                      >
                        {page.name}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
          <SchoolIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              justifyContent: 'center',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: 'auto',
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontWeight: 'bold',
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}

            {email == ADMIN ? (
              <Link to="/admin">
                <Button sx={{ my: 2, color: 'black' }}>ADMIN PAGE</Button>
              </Link>
            ) : (
                <Box sx={{ my: 2, color: 'black' }}>
                  <Badge badgeContent={count} color="error">
                    
                    {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button onClick={toggleDrawer(anchor, true)}>      
                        <ShoppingCartIcon 
                        color= 'success'
                        />
                      </Button>
                      <Drawer
                        anchor={anchor}
                        variant='persistent'
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        PaperProps={{
                          sx: { width: "40%" },
                        }}
                        
                      >
                        
                        <CloseIcon 
                        onClick={toggleDrawer(anchor, false)}
                        sx={{alignSelf: 'flex-end'}}/>
                        {list(anchor)}

                      </Drawer>
                    </React.Fragment>
                    ))}
                  </Badge>
                </Box>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {email ? (
              <Button
                sx={{ color: 'black', fontWeight: 'bold' }}
                onClick={handleLogout}
              >
                LOGOUT
              </Button>
            ) : (
              <Link to="/auth">
                <Button sx={{ color: 'black', fontWeight: 'bold' }}>
                  <LoginSharpIcon />
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
