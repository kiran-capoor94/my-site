import { createMuiTheme } from '@material-ui/core/styles';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: "rgb(77, 77, 77)",
      dark: "rgb(23, 23, 23)",
      contrastText: "#fff"
    },
    secondary: {
      main: '#b71c1c',
    },
    appBar:{
      color: 'primary'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;