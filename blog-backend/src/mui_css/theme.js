import  { green, yellow, teal } from "@mui/material/colors"
import { createTheme  } from '@mui/material/styles';

export const myTheme = createTheme({
  palette:{
      primary:{
          main: teal[800]
      },
      secondary:{
          main: '#009688'
      },
      tertiary:{
        main: '#f7e2ab'
      },
      warning:{
          main: yellow[600]
      },
      info:{
          main: green[600]
      }
  }
})