import { Divider, Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProducts } from '../../contexts/CourseContextProvider';
import { Box } from '@mui/system';

const SideBar = () => {
  const { fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid item md={2} >
      <Paper elevation={5} sx={{ p: 2, bgcolor:'#f5f5f5'}}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />


<Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="все"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams('type', e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="все" />

              <FormControlLabel
                value="practice"
                control={<Radio />}
                label="Практика"
              />

              <FormControlLabel
                value="level"
                control={<Radio />}
                label="Уровень"
              />

              <FormControlLabel
                value="direction"
                control={<Radio />}
                label="Направление"
              />
              <FormControlLabel
                value="preparation"
                control={<Radio />}
                label="Подготовительный"
              />

            </RadioGroup>
          </FormControl>
        </Grid>



          <Box sx={{display: 'flex', flexDirection: 'column'}}>

          <FormLabel sx={{fontSize: '20px', m: '30px auto 10px'}} id="demo-radio-buttons-group-label">Price</FormLabel>
        <FormControl sx={{ m: '2 auto'}}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams('price_lte', e.target.value)}
            >
            <FormControlLabel value="all" control={<Radio />} label="all" />
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="less than 10$"
              />

            <FormControlLabel
              value="30"
              control={<Radio />}
              label="less than 30$"
              />

            <FormControlLabel
              value="50"
              control={<Radio />}
              label="less than 50$"
              />
          </RadioGroup>
        </FormControl>
              </Box>
      </Paper>
    </Grid>
  );
};

export default SideBar;
