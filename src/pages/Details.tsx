import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Button, Container, Box } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import Header from '../components/Header';

const Details = () => {
  let { countryName } = useParams();
  const navigate = useNavigate();
  console.log(
    '🚀 ~ file: details.tsx ~ line 6 ~ Details ~ country',
    countryName
  );

  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={9}
          flexDirection='column'
          sx={{ marginTop: 10 }}
        >
          <Grid item md={12}>
            <Button
              variant='text'
              sx={{
                justifyContent: 'start',
                alignItems: 'center',
                textTransform: 'capitalize',
                color: '#131416',
                boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
                padding: '14px 40px',
              }}
              startIcon={<WestIcon />}
              onClick={() => navigate(-1)}
            >
              back
            </Button>
          </Grid>
          <Grid item md={12}>
            <Grid container spacing={15}>
              <Grid item md={6}>
                <Box
                  sx={{ width: '100%', height: '400px', objectFit: 'contain' }}
                >
                  <img src='' alt='' />
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sx={{ display: 'flex', flexDirection: 'column' }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Details;
