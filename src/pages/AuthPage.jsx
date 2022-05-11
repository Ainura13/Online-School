import { Box } from '@mui/material';
import React from 'react';
import Auth from '../components/Auth/Auth';
import { useAuth } from '../contexts/AuthContextProvider';
import HomePage from './HomePage';

const AuthPage = () => {
    const {
        user : { email },
      } = useAuth();
      return <Box sx={{marginBottom: '20px'}}>{email ? <HomePage /> : <Auth />}</Box>;

};

export default AuthPage;