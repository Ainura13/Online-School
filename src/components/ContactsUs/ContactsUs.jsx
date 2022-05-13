import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import React from 'react';

const ContactUs = () => {
  return (
    <>
      <Paper sx={{
      height: '70vh' ,
      backgroundImage: `url(https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)`, 
      position: 'relative', 
      color: 'white',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      opacity: '0.85'}}>
      <Box
        noValidate
        autoComplete="off"
        sx={{ width: '50vw', margin: '15vh auto' }}
      >
        <Typography
          sx={{ fontSize: '2em', fontWeight: 600, fontFamily: 'Roboto' }}
          variant="h2"
          component="h1"
          marginBottom={3}
          color='textPrimary'
        >
          Свяжитесь с нами
        </Typography>

        <TextField
          sx={{ width: '49%', marginRight: '2%' }}
          label="ФИО"
          margin="dense"
          color="primary"
        />
        <TextField
          sx={{ width: '47б%', marginRight: '2%' }}
          label="Телефон"
          margin="dense"
          color="primary"
        />
        <TextField sx={{ width: '49%' }} label="Email" margin="dense" />
        <TextField sx={{ width: '100%' }} label="Тема" margin="dense" />
        <TextField
          sx={{ width: '100%' }}
          label="Описание"
          margin="dense"
          multiline
          rows="4"
        />
        <Button
          sx={{ borderRadius: '20px', marginTop: '2%' }}
          variant="contained"
          size="large"
          color="success"
        >
          Отправить
        </Button>
      </Box>
      </Paper>
    </>
  );
};

export default ContactUs;
