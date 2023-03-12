import  { green, yellow } from "@mui/material/colors"
import { createTheme  } from '@mui/material/styles';

export const myTheme = createTheme({
  palette:{
      primary:{
          main: green[800]
      },
      secondary:{
          main: '#009688'
      },
      tertiary:{
        main: '#edeadf'
      },
      warning:{
          main: yellow[600]
      },
      info:{
          main: green[600]
      },
      text:{
        main: '#ffffff' 
      }
  }
})