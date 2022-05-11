import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

const Footer = () => {
  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Online School
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 3, sm: 3 }}
      bgcolor="#656b72c7"
      color="rgb(15 14 14)"
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={6} sm={3} sx={{ mt: '0.6rem', my: '0.5rem' }}>
            <Box sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>Help</Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Vacancies
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Support
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Privacy
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} sm={4} sx={{ mt: '0.6rem' }}>
            <Box sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>
              Messages
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Investors
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Developers
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                Partners
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              ></Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} sx={{ mt: '0.6rem' }}>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '1.1rem', display: 'flex' }}
              >
                <EmailIcon /> onlineschool@gmail.com
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '1.1rem', display: 'flex' }}
              >
                <InstagramIcon /> Instagram
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '1.1rem', display: 'flex' }}
              >
                <FacebookIcon /> Facebook
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '1.1rem', display: 'flex' }}
              >
                <TwitterIcon /> Twitter
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '1rem', display: 'flex' }}
              >
                <BusinessIcon /> Bishkek ,str.Tabyshalieva 29, +996 0555 555 692
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
  );
};
export default Footer;
