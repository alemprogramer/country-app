import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Outlet } from 'react-router-dom';

function App() {
  const Title = styled('h1')({
    fontWeight: 700,
    color: '#090a0c',
    fontSize: '20px',
    lineHeight: 1,
    padding: '25px 0',
  });
  const Header = styled('header')({
    boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
    backgroundColor: '#ffffff',
  });

  return (
    <>
      <Header>
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Title>Where in the world?</Title>
          <Button
            variant='text'
            sx={{
              justifyContent: 'start',
              alignItems: 'center',
              textTransform: 'capitalize',
              color: '#131416',
            }}
            startIcon={<DarkModeOutlinedIcon />}
          >
            dark mode
          </Button>
        </Container>
      </Header>
      <Outlet />
    </>
  );
}

export default App;
