import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/CourseContextProvider';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box
    className='bgImage' sx={{
    // height: '70vh' ,
// backgroundImage: `url("https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"), linear-gradient(#fff,#0000)`,
    // background: `url(https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80), linear-gradient`, 
    // position: 'relative', 
    // color: 'white',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'right',
    // backgroundAttachment: 'fixed',
    opacity: '0.8'}}>

    <Box sx={{ width: '50vw', margin: '10vh auto'}}>
      <Typography
      variant='h4' 
      align='center' 
      color='textPrimary' 
      gutterBottom
      >
        Admin Page
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <Button
        variant="contained"
        color="success"
        fullWidth
        size="large"
        onClick={() => {
          addProduct(product);
          navigate('/products');
        }}
        sx={{mb: 2}}
      >
        CREATE PRODUCT
      </Button>
    </Box>
    </Box>
  );
};

export default AddProduct;
