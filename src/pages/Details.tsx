import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Button, Container, Box } from '@mui/material';
import WestIcon from '@mui/icons-material/West';

const Details = () => {
  let { country } = useParams();
  console.log('🚀 ~ file: details.tsx ~ line 6 ~ Details ~ country', country);

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={9} flexDirection='column' sx={{ marginTop: 10 }}>
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
            <Grid item md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
