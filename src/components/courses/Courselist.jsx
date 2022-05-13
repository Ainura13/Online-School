import React, { useEffect, useState } from 'react';

import { Grid, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../contexts/CourseContextProvider';
import CourseCard from './CourseCard';

const CourseList = () => {
  const { products, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    console.log(p);
    setPage(p);
  };
  // pagination

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <>
      <Grid
        item
        sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}
        md={9}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent:'space-evenly',
            flexWrap: 'wrap',
            minHeight: '50vh',
            mb: '3.5vh',
          }}
        >
          {products ? (
            currentData().map((item) => (
              <CourseCard item={item} key={item.id} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Box>

        <Pagination
          count={count}
          color='secondary'
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}
        />
      </Grid>
    </>
  );
};

export default CourseList;
