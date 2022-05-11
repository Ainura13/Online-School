import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';


import React from 'react';

const MainPage = () => {

    const cards = [{
        image: "https://thumbs.dreamstime.com/b/логотип-вектора-я-языка-туризма-77863429.jpg",
        title: "Человеческий подход",
        description: "Учитываем ваши особенности, а не занимаемся конвеерным обучением"
        },
        {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPsOI4S21zljuLsUzD8Hwp8cUI-C0YiS-APRsNn821PVsEIHie0gkDEctkFZERLdit1w&usqp=CAU",
        title: "Cbk",
        description: "Учитываем ваши особенности, а не занимаемся конвеерным обучением"
        },
        {
        image: "https://thumbs.dreamstime.com/b/логотип-вектора-я-языка-туризма-77863429.jpg",
        title: "Человеческий подход",
        description: "Учитываем ваши особенности, а не занимаемся конвеерным обучением"
        },
        {
        image: "https://thumbs.dreamstime.com/b/логотип-вектора-я-языка-туризма-77863429.jpg",
        title: "Человеческий подход",
        description: "Учитываем ваши особенности, а не занимаемся конвеерным обучением"
        },
        {
        image: "https://thumbs.dreamstime.com/b/логотип-вектора-я-языка-туризма-77863429.jpg",
        title: "Человеческий подход",
        description: "Учитываем ваши особенности, а не занимаемся конвеерным обучением"
        },
        {
        image: "https://thumbs.dreamstime.com/b/логотип-вектора-я-языка-туризма-77863429.jpg",
        title: "Человеческий подход",
        description: "Учитываем ваши особенности, а не занимаемся конвеерным обучением"
        }
    ]
    return (
        <>
            <Paper sx={{backgroundImage: `url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, 
            position: 'relative', 
            color: 'white',
            marginBottom: (4),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'}}>
                <Container fixed>
                    <Box sx={{
                        position: 'absolute',
                        bottom: (0),
                        top: (0),
                        right: (0),
                        backgroundOverlay: "rbga(0,0,0,.6)"
                    }}/>
                    <Grid container>
                        <Grid item md={6}>
                            <Box sx={{position: 'relative',
                        padding: (9)
                        }}>
                                <Typography
                                component='h1'
                                variant='h3'
                                color="green"
                                gutterBottom
                                >
                                    Учите английский онлайн                                
                                </Typography>
                                <Typography
                                sx={{fontSize: 'bold'}}
                                component='h3'
                                color="black"
                                gutterBottom
                                >Персональные занятия с сильными преподавателями от 1000 coм
                                </Typography>
                                <Typography
                                component='h5'
                                color="black"
                                paragrah
                                >Выбирайте комфортный английский.
                                Английский по Скайпу — это возможность заниматься по удобному графику из любой точки мира.
                                Кроме этого в онлайн-школе английского языка «Easy to say» вы найдете:
                                </Typography>

                                <Button variant='contained' color="success" sx={{marginTop: (5)}}>
                                    Попробовать бесплатно
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <Box sx={{backgroundColor: '#a5d6a7', padding: (9)}}>
                <Container fixed>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Удобный Онлайн-класс
                    </Typography>

                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                    Уроки проходят на интерактивной учебной платформе — общайтесь с преподавателем и выполняйте задания в одном окне браузера
                    </Typography>
                    <Box>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='success'>Start now</Button>
                                <Button variant='outlined' color='success'>Start now</Button>
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </Box>

            <Container maxWidth='md'>
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                sx={{paddingTop:'56.25%' }}
                                image={card.image}
                                title='Image title'/>
                                <CardContent>
                                    <Typography variant='h5' gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography >
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='success'>View</Button>
                                   
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default MainPage;