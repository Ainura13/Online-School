import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import CourseList from '../components/courses/Courselist';
import SideBar from '../components/courses/Sidebar';

const CoursesPage = () => {
    return (
        <Box p={5}>
      ProductsPage
      <Grid container spacing={3}>
        <CourseList />
        <SideBar />
      </Grid>
    </Box>
  );
    
};

export default CoursesPage;