import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import StartGlyph from './StartGlyph/StartGlyph';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiStepIcon: {
              text: {
                  fill: "rgb(30,30,30)",
              },
              root: {
                  border: "solid",
                  borderColor: '#cc9933',
                  borderRadius: 25,
                  borderWidth: 0,
                  fill: "#cccccc",
                  
                  '&$active': {
                      border: "solid",
                      borderColor: '#cc9933',
                      borderRadius: 25,
                      fill: "#cc9933",
                      borderWidth: 0,
                  },
                  '&$completed': {
                    border: "solid",
                    borderColor: '#cc9933',
                    borderRadius: 25,
                    fill: "white",
                    borderWidth: 0,
                  }
              },
          },
        },
        palette: {
          type: prefersDarkMode ? 'light' : 'dark',
          primary: { 500: '#cc9933' },
          textPrimary: { 500: '#FFFFFF' },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StartGlyph />
      </div>
    </ThemeProvider>
  );
}

export default App;
