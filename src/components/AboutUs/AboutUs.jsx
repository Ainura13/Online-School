import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ChatIcon from '@mui/icons-material/Chat';
import AbcIcon from '@mui/icons-material/Abc';

function Copyright() {
  return <></>;
}

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {/* Hero unit */}

        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={5}
                  >
                    Online School <AnnouncementIcon />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: 'auto', verticalAlign: 'middle' }}
                    >
                      Одна из ведущих языковых школ в Бишкеке, предлагающая
                      курсы английского языка с высочайшим качеством обучения,
                      продуманной до мелочей организацией учебного процесса и
                      отвечающая самым высоким требованиям в области
                      образования. Благодаря тщательному подбору
                      преподавательского состава, применяемым эффективным
                      программам, современным средствам обучения и внимательному
                      отношению к каждому слушателю
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '80%' }}
                    image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '80%' }}
                    image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="JAWS"
                    ml={8}
                  />
                </Grid>

                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    sx={{ align: 'center' }}
                    component="h2"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    ml={0}
                  >
                    Свобода общения <ChatIcon />
                    <Typography variant="h6" color="text.secondary" paragraph>
                      Мы учитываем потребность наших слушателей в
                      самоактуализации и самореализации и создаем условия для
                      раскрытия творческого потенциала в различных сферах жизни:
                      в семье, работе, учебе, творчестве, увлечениях. Мы дарим
                      свободу общения, не ограниченного языковыми барьерами, а
                      наши занятия способствуют интеллектуальному, культурному,
                      профессиональному, социальному развитию и росту. Наши
                      программы основаны на изданиях и материалах лучших
                      университетов Оксфорда, Кембриджа, Лондона, Нью-Йорк и
                      Сиднея. Мы следуем принципам эффективного обучения – это
                      системность, комплексность, технологичность.
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>

              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: '100%', m: 6, boxShadow: 0 }}>
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: 'auto' }}>
                  <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={5}
                  >
                    Наша методика
                    <AbcIcon fontSize="lagre" />
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: 'auto', verticalAlign: 'middle' }}
                    >
                      Благодаря большому опыту работы, мы точно знаем, с какими
                      трудностями сталкиваются студенты в процессе
                      обучения.Внимательное отношение к каждому слушателю,
                      поурочный мониторинг и диагностика усвоения материала,
                      комплексная работа при изучении,увлекательные современные
                      задания.Мы не просто учим английскому языку, как
                      инструменту общения или способу продвижения вперед, мы
                      стараемся научить наших студентов думать на нем,
                      чувствовать его, любить и восхищаться этим языком так же
                      искренне, как любим и восхищаемся им мы.
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: '80%' }}
                    image="https://images.unsplash.com/photo-1542330952-bffc55e812b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                    alt="JAWS"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>

        {/* End hero unit */}
      </main>
      {/* Footer */}
    </ThemeProvider>
  );
}
