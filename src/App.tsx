import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ColorModeContext from './context/colormode';
import CssBaseline from '@mui/material/CssBaseline';
import router from './Routes';

const App = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const lightTheme = createTheme({
    palette: {
      background: {
        default: '#fafafa',
      },
      text: {
        primary: '#131416',
      },
    },
  });
  const darkTheme = createTheme({
    palette: {
      background: {
        default: '#212e37',
      },
      text: {
        primary: '#f8ffff',
      },
    },
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
