import React, { useEffect, useState } from 'react';

import { Divider, Grid, Pagination } from '@mui/material';
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
  const itemsPerPage = 3;
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
          sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minHeight: '40vh',
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
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={page}

          />
          </Box>

      </Grid>
    </>
  );
};

export default CourseList;
