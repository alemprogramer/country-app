import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const Card = ({ data = {} }) => {
  const Name = styled('h3')({
    fontWeight: 700,
    color: '#090a0c',
    fontSize: '17px',
    lineHeight: 1,
    textTransform: 'capitalize',
  });
  const Data = styled('p')({
    fontWeight: 400,
    color: '#090a0c',
    fontSize: '17px',
    lineHeight: 1,
    textTransform: 'capitalize',
  });
  const Title = styled('h5')({
    fontWeight: 500,
    color: '#090a0c',
    fontSize: '18px',
    lineHeight: 1,
    textTransform: 'capitalize',
  });
  return (
    <Link to='/'>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          borderRadius: 2,
          flexDirection: 'column',
          bgcolor: '#ffffff',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ width: '100%', height: '161px', objectFit: 'cover' }}>
          {/* Country Logo */}
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
          <Name>Germany</Name>
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
              <Title>population</Title>
              <Data></Data>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Title>region</Title>
              <Data></Data>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <Title>capital</Title>
              <Data></Data>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;