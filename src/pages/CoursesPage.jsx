import React from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import SideBar from '../components/courses/Sidebar';
import CourseList from '../components/courses/CourseList';

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