import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CourseDetails from '../components/courses/CourseDetails';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SchoolIcon from '@mui/icons-material/School';


const CourseDetailsPage = () => {
    return (
        <>
        <Box sx={{py: 5, mt: 1, backgroundColor: '#a5d6a7'}}>
                <Grid>
                <Typography variant='h2' align='center' color='textPrimary' sx={{mb: '90px'}} gutterBottom >
                Характеристики курса
                    </Typography>
                </Grid>
                <Grid container spacing={3} sx={{display:'flex' }}>                
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <ComputerIcon sx={{fontSize:'10vh', color: 'white'}}/>
                        <Typography variant='h4' gutterBottom>
                        Цифровой учебник
                        </Typography >
                        <Typography variant='h5' gutterBottom>
                        Занимайся на онлайн-платформе
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <PhoneIphoneIcon sx={{fontSize:'10vh', color: 'white'}}/>
                        <Typography variant='h4' gutterBottom>
                        Приложение ED Class
                        </Typography >
                        
                        <Typography variant='h5' gutterBottom >
                        Выполняй домашку и учи слова в своем телефон
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <TextsmsIcon sx={{fontSize:'10vh', color: 'white'}}/>
                        <Typography variant='h4' gutterBottom>
                        Разговорный клуб
                        </Typography >
                        
                        <Typography variant='h5' gutterBottom >
                        Практикуй разговорные навыки, находи друзей
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{textAlign:'center'}}>
                        <SchoolIcon sx={{fontSize:'10vh', color: 'white'}}/>
                        <Typography variant='h4' gutterBottom>
                        Куратор
                        </Typography >
                        
                        <Typography variant='h5' gutterBottom  >
                        Персональный куратор гарантирует прогресс
                        </Typography>
                    </Grid>
                </Grid>
        </Box>
        <CourseDetails />
        </>
    );
};

export default CourseDetailsPage;