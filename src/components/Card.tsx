import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Card = ({ country }: any) => {
  const theme = useTheme();
  const Name = styled('h3')({
    fontWeight: 700,
    color: theme.palette.mode === 'light' ?'#2A3742'  : '#ffffff',
    fontSize: '17px',
    lineHeight: 1,
    textTransform: 'capitalize',
  });
  const Data = styled('p')({
    fontWeight: 400,
    color: theme.palette.mode === 'light' ?'#2A3742'  : '#ffffff',
    fontSize: '17px',
    lineHeight: 1,
    textTransform: 'capitalize',
  });
  const Title = styled('h5')({
    fontWeight: 500,
    color: theme.palette.mode === 'light' ?'#2A3742'  : '#ffffff',
    fontSize: '18px',
    lineHeight: 1,
    textTransform: 'capitalize',
  });
  return (
    <Link to={`country/${country?.name?.common}`}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          borderRadius: 2,
          flexDirection: 'column',
          bgcolor: theme.palette.mode === 'light' ? '#ffffff' : '#2A3742',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ width: '100%', height: '161px' }}>
          {/* Country Logo */}
          <img
            src={country?.flags.png}
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>
        <Box
          sx={{
            paddingX: 3,
            paddingY: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <Name>{country?.name?.common}</Name>
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Title>population : </Title>
              <Data>{country?.population}</Data>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Title>region : </Title>
              <Data>{country?.region}</Data>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Title>capital : </Title>
              <Data>{country?.capital}</Data>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
