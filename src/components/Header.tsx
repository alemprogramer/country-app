import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ColorModeContext from '../context/colormode';

const Header = () => {
  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);
  const Title = styled('h1')({
    fontWeight: 700,
    color: '#090a0c',
    fontSize: '20px',
    lineHeight: 1,
    padding: '25px 0',
  });
  const Header = styled('header')({
    boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#2A3742',
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
              color: theme.palette.mode === 'light' ? '#2A3742' : '#f1f1f1',
            }}
            startIcon={<DarkModeOutlinedIcon />}
            onClick={() => colorMode.toggleColorMode()}
          >
            {theme.palette.mode === 'light' ? 'dark' : 'light'} mode
          </Button>
        </Container>
      </Header>
    </>
  );
};

export default Header;
