import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Banner from './components/Banner';

// All the following keys are optional.
// We try our best to provide a great default value.
const themeRedGeese = createMuiTheme({
    palette: {
        primary: {
            main: '#000',
            light: "rgb(77, 77, 77)",
            dark: "rgb(23, 23, 23)",
            contrastText: "#fff"
        },
        secondary: {
            main: '#b71c1c',
        },
        appBar:{
            color: 'primary'
        },
        tonalOffset: 0.2,
        background: {
            paper: "#fff",
            default: "#fafafa"
        },
        surface: {
            base: "#ECEFF1",
            light: "ffffff",
            dark: "B0BEC5"
        },
        backdrop: {
            backgroundColor: 'surface'
        }
    },
    typography: {
        useNextVariants: true,
        button: {
            textTransform: "uppercase",
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500
        },
    },
    breakpoints: {
        keys: [
          "xs",
          "sm",
          "md",
          "lg",
          "xl"
        ],
        values: {
          xs: 0,
          lg: 1280,
          sm: 600,
          xl: 1920,
          md: 960
        }
    },
    MuiCardMedia: {
        backgroundSize: 'contain',
    }
});
class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={themeRedGeese}>
                <div>
                    <NavBar />
                </div>
                <Banner />
                
            </MuiThemeProvider>
        );
    }
}

export default App;