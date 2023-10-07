import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import styled from 'styled-components';
import ForceGraph from 'react-force-graph-3d';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const N = 300;
const myData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
};

export default function FrontPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box
          component="content"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'blue',
            flexGrow: 1 // auto fill the remain
          }}
        >
          <Box
            component="leftinfo"
            sx={{
              flex: 3,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'orange',
              alignItems: 'end'
            }}
          >
            <Box
              sx={{
                flex: 3,
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'black',
                justifyContent: 'flex-start',
              }}
            >
              <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'yellow',
                flexGrow: 1
              }}
            ></Box>
              <Typography variant="h1"
                sx={{
                  color: 'white', 
                  fontSize: '600%',
                  fontFamily: 'sans-serif',
                  fontStyle: 'bold'
                }}
              >What's New</Typography>
              <Typography variant="h1" gutterBottom
                sx={{
                  color: 'white', 
                  fontSize: '500%',
                  fontFamily: 'sans-serif',
                  fontStyle: 'bold'
                }}
              >in Open Science</Typography>
            </Box>
            <Box
              sx={{
                flex: 2,
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
              {'Pin a footer to the bottom of the viewport.'}
              {'The footer will move as the main element of the page grows.'}
              </Typography>
              <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Box>
          </Box>
          <Box
            component="rightinfo"
            sx={{
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'start'
            }}
          >
            <ForceGraph graphData={myData} 
            width={800}
            height={500}/>
          </Box>
        </Box>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}