import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/system';
import {
  Box,
  Grid,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Card from '../components/Card';

function Home() {
  const searchClick = useRef<HTMLInputElement>(null);
  const TextField = styled('input')({
    border: 0,
    width: '90%',
    padding: '10px 8px',
  });

  return (
    <>
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          <Grid
            item
            md={12}
            sx={{ justifyContent: 'space-between', my: 6, display: 'flex' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '33%',
                bgcolor: '#ffffff',
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                p: '10px 12px',
                borderRadius: 2,
                cursor: 'text',
              }}
              onClick={() => {
                searchClick.current?.focus();
              }}
            >
              <SearchIcon sx={{}} />
              <TextField
                placeholder='Search for a country...'
                ref={searchClick}
              />
            </Box>
            <FormControl
              sx={{
                width: '15%',
                bgcolor: '#ffffff',
                boxShadow: '0 0 5px 0 rgba(0,0,0,0.15)',
              }}
            >
              <InputLabel id='demo-simple-select-label'>
                Filter by Region
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Age'
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={9}>
          {/* Map this component */}
          <Grid item md={4}>
            <Card data={''} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
