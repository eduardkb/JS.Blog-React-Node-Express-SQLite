import { green, yellow, blueGrey } from "@mui/material/colors"
import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[200]
    },
    secondary: {
      main: blueGrey[100]
    },
    tertiary: {
      main: blueGrey[50]
    },
    warning: {
      main: yellow[600]
    },
    info: {
      main: green[600]
    },
    text: {
      main: '#000000'
    }
  }
})

export const classCss = {

  paperPost: {
    textAlign: "center",
    backgroundColor: "white",
    color: myTheme.palette.tertiary.main,
    height: '200px',
  },

  headerAppBar: {
    bgcolor: 'primary.main',
    color: 'text.main',
    // marginBottom: "10px"
  },
  cardPost: {
    // margin: 5,
    padding: 5,
    backgroundColor: myTheme.palette.primary.main,
    color: myTheme.palette.text.main,
    borderRadius: '5px',
  },

  boxFilter: {
    bgcolor: 'secondary.main',
    color: myTheme.palette.text.main,
    margin: "5px 10px",
    padding: "5px 20px",
    borderRadius: '5px',
  },

  mainPannelGrid: {
    flexGrow: 1,
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pCardProps: {
    margin: 0,
    padding: 0,
    textAlign: "left",
    fontSize: 'small',
  },
};