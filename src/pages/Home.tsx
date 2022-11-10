import React, { useEffect, useRef, useState } from 'react';
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

const allRegions = ['all', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

function Home() {
  const searchClick = useRef<HTMLInputElement>(null);

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
    const v = event.target.value;
    setRegion(v);
    let apiPoint;
    if (v === 'all') {
      apiPoint = 'https://restcountries.com/v3.1/all';
    } else {
      apiPoint = `https://restcountries.com/v3.1/region/${v}`;
    }

    try {
      const country = await axios.get(apiPoint);
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
            sx={{
              justifyContent: 'space-between',
              my: 6,
              display: 'flex',
              width: '100%',
              flexWrap: 'wrap',
              gap: { xs: '40px', sm: 0 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: { xs: '100%', sm: '50%', md: '33%' },
                bgcolor: '#ffffff',
                boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                p: '10px 12px',
                borderRadius: 2,
                cursor: 'text',
              }}
              // onClick={() => {
              //   searchClick.current?.focus();
              // }}
            >
              <SearchIcon sx={{}} />
              <input
                type={'text'}
                style={{
                  border: 0,
                  width: '90%',
                  padding: '10px 8px',
                }}
                placeholder='Search for a country...'
                ref={searchClick}
                onChange={(e) => handleFilter(e.target.value)}
                value={searchWord}
              />
            </Box>
            <FormControl
              sx={{
                width: { xs: '70%', sm: '40%', md: '25%' },
                bgcolor: '#ffffff',
                display: 'flex',
                boxShadow: '0 0 5px 0 rgba(0,0,0,0.15)',
              }}
            >
              <InputLabel id='filter-by-region'>Filter by Region</InputLabel>
              <Select
                labelId='filter-by-region'
                id='region-select'
                value={region}
                label='Age'
                // onChange={handleChange}
                onChange={filterByRegion}
              >
                {allRegions.map((v: string) => (
                  <MenuItem
                    key={v}
                    value={v}
                    sx={{ textTransform: 'capitalize' }}
                    disabled={v === region}
                  >
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={9} justifyContent='center'>
          {/* Map this component */}
          {allCountry.length > 0 ? (
            filteredData.length > 0 ? (
              filteredData.map((country: any) => (
                <Grid key={country?.name?.common} item md={4} lg={3} sm={6}>
                  <Card country={country} />
                </Grid>
              ))
            ) : (
              <p className='text'> Search Result not found!</p>
            )
          ) : (
            <p className='text'> Loading..</p>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
