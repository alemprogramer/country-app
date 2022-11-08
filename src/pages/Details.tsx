import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Button, Container, Box } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import Header from '../components/Header';
import styled from '@emotion/styled';

const Details = () => {
  let { countryName } = useParams();
  const navigate = useNavigate();
  console.log(
    '🚀 ~ file: details.tsx ~ line 6 ~ Details ~ country',
    countryName
  );

  const Heading = styled('h4')({
    fontSize: '36px',
    lineHeight: 1,
    fontWeight: '700',
    marginBottom: '40px',
  });

  const Title = styled('p')({
    fontSize: '24px',
    lineHeight: 1,
    fontWeight: '600',
    textTransform: 'capitalize',
  });
  const Info = styled('p')({
    fontSize: '22px',
    lineHeight: 1,
    fontWeight: '400',
  });

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
                <Box sx={{ width: '100%', height: '400px' }}>
                  <img
                    src=''
                    alt=''
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Heading>Bulgeria</Heading>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                  }}
                >
                  <Box
                    sx={{
                      width: '60%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>native name</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>population</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>region</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>sub region</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>capital</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: '40%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>top level domain</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>currencies</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                      }}
                    >
                      <Title>languages</Title>
                      <Info>{/* Value */}</Info>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    mt: 9,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <Title>border countries</Title>
                  <Button
                    variant='text'
                    sx={{
                      justifyContent: 'start',
                      alignItems: 'center',
                      textTransform: 'capitalize',
                      color: '#131416',
                      boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
                      padding: '8px 30px',
                    }}
                    onClick={() => navigate(`/country/use`)}
                  >
                    USA
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Details;
