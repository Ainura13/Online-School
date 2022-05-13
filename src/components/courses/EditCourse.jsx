import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/CourseContextProvider';

const EditCourse = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);


  

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  return (
    <Paper sx={{
      height: '70vh' ,
      backgroundImage: `url(https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)`, 
      position: 'relative', 
      color: 'white',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      opacity: '0.85'}}>

    <Box sx={{ width: '50vw', margin: '10vh auto' }}>
    <Typography
      variant='h4' 
      align='center' 
      color='textPrimary' 
      gutterBottom
      >
        Редактировать
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        value={product.name || ''}
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        value={product.description || ''}
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        value={product.price || ''}
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        value={product.picture || ''}
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        value={product.type || ''}
        onChange={handleInp}
        sx={{mb: 2}}
      />
      <Button
        variant="outlined"
        color="success"
        fullWidth
        size="large"
        onClick={() => {
          saveEditedProduct(product);
          navigate(-1);
        }}
        sx={{mb: 2}}
      >
        Сохранить
      </Button>
    </Box>
    </Paper>
  );
};

export default EditCourse;
