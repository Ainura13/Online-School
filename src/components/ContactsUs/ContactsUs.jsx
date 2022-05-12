import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@mui/material';

import React from 'react';

const ContactUs = () => {
  return (
    <div>
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
        >
          Запись на занятия
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
        >
          Отправить
        </Button>
      </Box>
    </div>
  );
};

export default ContactUs;
