import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SchoolIcon from '@mui/icons-material/School';
import { CourseDetails } from '../components/courses/CourseDetails';


const CourseDetailsPage = () => {
    return (
        <>
        <Box sx={{ py: 5, mt: 1, backgroundColor: '#a5d6a7'}}>
            <Box sx={{m: '0 auto', width: '80vw',}}>

                <Grid >
                <Typography variant='h3' align='center' color='textPrimary' sx={{mb: 10}} gutterBottom >
                Характеристики курса
                    </Typography>
                </Grid>
                <Grid container spacing={3} sx={{display:'flex', flexWrap: 'wrap' }}>                
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <ComputerIcon sx={{fontSize:'5rem', color: 'white', mb: 2}}/>
                        <Typography variant='h5' gutterBottom>
                        Цифровой учебник
                        </Typography >
                        <Typography variant='h6' gutterBottom>
                        Занимайся на онлайн-платформе
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <PhoneIphoneIcon sx={{fontSize:'5rem', color: 'white', mb: 2}}/>
                        <Typography variant='h5' gutterBottom>
                        Приложение ED Class
                        </Typography >
                        
                        <Typography variant='h6' gutterBottom >
                        Выполняй домашку и учи слова в своем телефон
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <TextsmsIcon sx={{fontSize:'5rem', color: 'white', mb: 2}}/>
                        <Typography variant='h5' gutterBottom>
                        Разговорный клуб
                        </Typography >
                        
                        <Typography variant='h6' gutterBottom >
                        Практикуй разговорные навыки, находи друзей
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <SchoolIcon sx={{fontSize:'5rem', color: 'white', mb: 2}}/>
                        <Typography variant='h5' gutterBottom>
                        Куратор
                        </Typography >
                        
                        <Typography variant='h6' gutterBottom  >
                        Персональный куратор гарантирует прогресс
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <CourseDetails />
        </>
    );
};

export default CourseDetailsPage;