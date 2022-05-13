import React, { useEffect } from 'react';
import { Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import { useProducts } from '../../contexts/CourseContextProvider';
import '@splidejs/react-splide/css/sea-green';
import SchoolIcon from '@mui/icons-material/School';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link } from 'react-router-dom';


const MainPage = () => {

    const { cards, getCards } = useProducts();
    console.log(cards);


    useEffect(() => {
        getCards();
      }, []);

    

    return (
        <>
            <Paper sx={{backgroundImage: `url(https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)`, 
            position: 'relative', 
            color: 'white',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: '0.8',
            }}>
                <Container fixed>
                    <Box sx={{
                        position: 'absolute',
                        bottom: (0),
                        top: (0),
                        right: (0),
                        backgroundOverlay: "rbga(0,0,0,.6)"
                    }}/>
                    <Grid container>
                        <Grid item md={5}>
                            <Box sx={{position: 'relative',
                        padding: (9),
                        opacity: (1)
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
                                paragraph
                                >Выбирайте комфортный английский.
                                Английский по Скайпу — это возможность заниматься по удобному графику из любой точки мира.
                                Кроме этого в онлайн-школе английского языка «Online School» вы найдете:
                                </Typography>
                                <Link to="/contacts" style={{textDecoration: 'none'}}>
                                <Button variant='contained' color="success" sx={{marginTop: (5)}}>
                                    Записаться на курс
                                </Button>
                                </Link>
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
                            <Box item sx={{display: 'flex', justifyContent: 'center'}}>
                            <Link to="/courses" style={{textDecoration: 'none', marginRight: '10px'}}>
                                <Button variant='contained' color='success'>О курсах</Button>
                                </Link>
                                <Link to="/about" style={{textDecoration: 'none'}}>
                                <Button variant='outlined' color='success'>О компании</Button>
                            </Link>
                            </Box>
                    </Box>

                </Container>
            </Box>

            <Container maxWidth='md' sx={{my: '100px'}}>
                <Grid>
                <Typography variant='h2' align='center' color='textPrimary' sx={{mb: '90px'}} gutterBottom >
                    Как проходят наши курсы
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            <Card sx={{height: '360px', mb:"6vh"}}>
                                <CardMedia
                                sx={{paddingTop:'70%' }}
                                image={card.image}
                                title='Image title'/>
                                <CardContent sx={{flexGrow: (1), paddingBottom: (1)}}>
                                    <Typography variant='h5' gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography >
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            
            <Box sx={{backgroundColor: '#f5f5f5', padding: (9)}}>
            <Container>
            <Grid>
                <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                    Нам доверяют
                    </Typography>
                </Grid>
            <Grid container  sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}  >
                <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center'}} xs={12} sm={6} md={3} >
                <Typography  color='#2e7d32' variant='h5' gutterBottom>10
                лет</Typography>
                <Typography>
                    лидерства на рынке
                </Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Typography color='#2e7d32' variant='h5' gutterBottom>900
                преподавателей</Typography>
                <Typography >
                    в штате школы
                </Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Typography color='#2e7d32' variant='h5' gutterBottom>70% студентов</Typography>
                <Typography >
                    по рекомендациям
                </Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Typography color='#2e7d32' variant='h5' gutterBottom>20 авторских</Typography>
                <Typography >
                    программ по обучениям
                </Typography>
                </Grid>
                <Grid item sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Typography color='#2e7d32' variant='h5' gutterBottom>50000 
                студентов</Typography>
                <Typography >
                    достигли цели
                </Typography>
                </Grid>
            </Grid>
            </Container>
            </Box>
            <Grid container sx={{display: 'flex', flexDirection: 'row', alignItems: 'space-around', flexWrap:'wrap', backgroundColor: '#a5d6a7', p: '10vh auto'}}>
                <Grid item md={4}>
            <Splide options={ {rewind: true, gap   : '1rem',} } aria-label="My Favorite Images" >
      <SplideSlide>
          <Container sx={{bgcolor:'white', borderRadius:'5%'}}>
        <img src="https://cdn-englishdom.gcdn.co/dsd/img/page/skype/teachers/jacob.jpg" alt="Image 1" style={{width: '100%', paddingTop:'20px',  margin: '20px auto'}}/>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>Jacob</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Возраст: 27 года</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Образование: TOEFL certificate</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom sx={{pb:'30px'}}>Стаж: 6 лет</Typography>
          </Container>
      </SplideSlide>
      
      <SplideSlide >
      <Container sx={{bgcolor:'white', borderRadius:'5%'}}>
      <img src="https://cdn-englishdom.gcdn.co/dsd/img/page/skype/teachers/natalia-d.jpg" alt="Image 2" style={{width: '100%', paddingTop:'20px',  margin: '20px auto'}}/>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>Natali D</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Возраст: 33 года</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Образование: Филолог педагог</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom sx={{pb:'30px'}}>Стаж: 6 лет</Typography>
        </Container>
      </SplideSlide>
      
      <SplideSlide>
      <Container sx={{bgcolor:'white', borderRadius:'5%'}}>
      <img src="https://cdn-englishdom.gcdn.co/dsd/img/page/skype/teachers/sandy-m.jpg" alt="Image 3" style={{width: '100%', paddingTop:'20px',  margin: '20px auto'}}/>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>Sandy M</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Возраст: 33 года</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Образование: TESOL certificate</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom sx={{pb:'30px'}}>Стаж: 7 лет</Typography>
        </Container>
      </SplideSlide>
      <SplideSlide>
      <Container sx={{bgcolor:'white', borderRadius:'5%'}}>
      <img src="https://cdn-englishdom.gcdn.co/dsd/img/page/skype/teachers/ekaterina-e.jpg" alt="Image 4" style={{width: '100%', paddingTop:'20px',  margin: '20px auto'}}/>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>Ekaterina E</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Возраст: 31 года</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Образование:  Филолог педагог</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom sx={{pb:'30px'}}>Стаж: 10 лет</Typography>
        </Container>
      </SplideSlide>
      <SplideSlide>
      <Container sx={{bgcolor:'white', borderRadius:'5%'}}>
      <img src="https://cdn-englishdom.gcdn.co/dsd/img/page/skype/teachers/angelina.jpg" alt="Image 5" style={{width: '100%', paddingTop:'20px', margin: '20px auto'}}/>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>Angelina</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Возраст: 27 лет</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Образование: Филолог</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom sx={{pb:'30px'}}>Стаж: 6 лет</Typography>
        </Container>
        </SplideSlide>
      <SplideSlide>
      <Container sx={{bgcolor:'white', borderRadius:'5%'}}>
      <img src="https://cdn-englishdom.gcdn.co/dsd/img/page/skype/teachers/alan.jpg" alt="Image 6" style={{width: '100%', paddingTop:'20px', margin: '20px auto'}}/>
        <Typography variant='h4' align='center' color='textPrimary' gutterBottom>Alan</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Возраст: 54 года</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom>Образование: TEFL certificate</Typography>
        <Typography variant='h6' align='center' color='textPrimary' gutterBottom sx={{pb:'30px'}}>Стаж: 12 лет</Typography>
        </Container>
        </SplideSlide>
    </Splide>
                </Grid >
                <Grid item sx={{height: 400, display:'flex', flexDirection: 'column', justifyContent:'space-evenly', my: '10px', paddingTop:'20vh', paddingLeft:'5vh'}}>
                <Box sx={{display:'flex'}}>
                <SchoolIcon sx={{fontSize:'10vh', color: 'white'}}/>
                <Typography variant='body1' sx={{fontSize: '23px', padding: '5vh', color:'textSecondary'}} align='center' color='textPrimary'>
                Имеют педагогическое образование и многолетний опыт работы
                </Typography >
                </Box>
                <Box sx={{display:'flex'}}>
                <TextSnippetIcon sx={{fontSize:'10vh', color: 'white'}}/>
                <Typography variant='body1' sx={{fontSize: '23px', padding: '5vh', color:'textSecondary'}} align='center' color='textPrimary' gutterBottom>
                Проходят многоэтапный отбор
                </Typography >
                </Box>
                <Box sx={{display:'flex'}}>
                <FavoriteIcon sx={{fontSize:'10vh', color: 'white'}}/>
                <Typography variant='body1' sx={{fontSize: '23px', padding: '5vh', color:'textSecondary'}} align='center' color='textPrimary'>
                Подбираются индивидуально под каждого студента
                </Typography >
                </Box>
                <Box sx={{display:'flex'}}>
                <AutoGraphIcon sx={{fontSize:'10vh', color: 'white'}}/>
                <Typography variant='body1' sx={{fontSize: '23px', padding: '5vh', color:'textSecondary'}} align='center' color='textPrimary'>
                Проходят регулярные тренинги и курсы повышения квалификации
                </Typography >
                </Box>
               

                </Grid>
             </Grid>
             
  

        </>
    );
};

export default MainPage;