import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import { useProducts } from '../../contexts/CourseContextProvider';

export const CourseDetails = () => {

  const {id} = useParams();

  const {getProductDetails, productDetails} = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();


  useEffect(() => {
    getProductDetails(id);
  }, [])

  console.log(productDetails.id)

  return (
    <>
      <Grid container spacing={8} sx={{marginTop: '1vh', display: 'flex', justifyContent: 'space-evenly', alignSelf: 'center'}}>
        <Grid item xs={12} sm={12} md={12} lg={5} sx={{display: 'flex',}}><img src={productDetails.picture} alt={productDetails.name} style={{width: '25rem', margin: '0 auto'}}/></Grid>
        <Grid item xs={12} sm={12} md={12} lg={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '10vh', width: '40vw'}}>
          <Typography variant='h4' sx={{paddingBottom: '1rem', m: '0 auto'}}>
            {productDetails.name}
          </Typography>
          <Typography sx={{paddingBottom: '1rem', m: '0 auto', textAlign: 'center'}}>
            {productDetails.description}
          </Typography>
          <Typography variant='h6' sx={{paddingBottom: '1rem', color: '#83B73B', m: '0 auto'}}>
            ${productDetails.price}
          </Typography>
          <Button variant='contained' sx={{fontSize: '0.7rem', padding: '14px 44px', width: '500px', m: '0 auto'}} onClick={() => addProductToCart(productDetails)}
              color={checkProductInCart(productDetails.id) ? 'primary' : 'success'}
          >{checkProductInCart(productDetails.id) ? 'Delete from cart' : 'Add to cart'}</Button>
        </Grid>
      </Grid>
    </>
  );
};


