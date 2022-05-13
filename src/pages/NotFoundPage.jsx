import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
        <div>
            <img src='https://cdn.dribbble.com/users/644529/screenshots/2662296/404.gif' style={{
               display: 'block', margin: '20px auto'
    }} alt='Not Found Page'/>
            <Container sx={{textAlign: 'center', mb: 10}}>
            <Link to="/" mr={4} style={{textDecoration: 'none'}}>
            <Button variant="contained" color="success" >
                Домой 
            </Button>
            </Link>
            </Container>
        </div>
        </>
    );
};

export default NotFoundPage;