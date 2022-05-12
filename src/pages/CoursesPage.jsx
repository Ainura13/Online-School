import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import CourseList from '../components/courses/CourseList';
import SideBar from '../components/courses/Sidebar';

const CoursesPage = () => {
    return (
        <Box p={5}>
      <Grid container spacing={3}>
        <SideBar />
        <CourseList />
      </Grid>
    </Box>
  );
    
};

export default CoursesPage;