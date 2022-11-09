import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/system';
import axios from 'axios';
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
import Header from '../components/Header';

function Home() {
  const searchClick = useRef<HTMLInputElement>(null);
  const TextField = styled('input')({
    border: 0,
    width: '90%',
    padding: '10px 8px',
  });

  const [allCountry, setAllCountry] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [region, setRegion] = useState('');
  const [searchWord, setSearchWord] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const country = await axios.get('https://restcountries.com/v3.1/all');
        // console.log(country.data);
        setAllCountry(country.data);
        setFilteredData(country.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleFilter = (event: any) => {
    const searchWord = event;
    setSearchWord(event);
    //assets
    const newFilter = allCountry.filter((value: any) => {
      if (!value?.name?.common) return 'all';
      return value?.name?.common
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData(allCountry);
    } else {
      setFilteredData(newFilter);
    }
  };

  const filterByRegion = async (event: any) => {
    setRegion(event.target.value);
    try {
      const country = await axios.get(
        `https://restcountries.com/v3.1/region/${event.target.value}`
      );
      setFilteredData(country.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Header />
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
                onChange={(e) => handleFilter(e.target.value)}
                value={searchWord}
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
                value={region}
                label='Age'
                // onChange={handleChange}
                onChange={filterByRegion}
              >
                <MenuItem value='Africa'>Africa</MenuItem>
                <MenuItem value='America'>America</MenuItem>
                <MenuItem value='Asia'>Asia</MenuItem>
                <MenuItem value='Europe'>Europe</MenuItem>
                <MenuItem value='Oceania'>Oceania</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={9}>
          {/* Map this component */}
         { allCountry.length >0?
          (filteredData.length>0? filteredData.map((country: any) => (
            <Grid key={country?.name?.common} item md={4} lg={3} sm={12}>
              <Card country={country} />
            </Grid>
          )):
            <p className='text'>Result not fount</p>):
            <p className='text'> Loading..</p>
          }
         
        </Grid>
      </Container>
    </>
  );
}

export default Home;
