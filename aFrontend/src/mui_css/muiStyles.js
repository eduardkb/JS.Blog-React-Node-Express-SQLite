import  { green, yellow, blueGrey} from "@mui/material/colors"
import { createTheme  } from '@mui/material/styles';

export const myTheme = createTheme({
  palette:{
      primary:{
          main: blueGrey[200]
      },
      secondary:{
          main: blueGrey[100]
      },
      tertiary:{
        main: blueGrey[50]
      },
      warning:{
          main: yellow[600]
      },
      info:{
          main: green[600]
      },
      text:{
        main: '#000000' 
      }
  }
})

export const classCss = {
  divPostsPannel: {
    flexGrow: 1,
	padding: 20,
  },
  paper: {    
	margin:10,
	padding:10,
    textAlign: "center",
    backgroundColor: "white",
    color: myTheme.palette.tertiary.main,
	width: '360px',
	height: '200px',
  },
  box:{
	margin: 20,
	backgroundColor: myTheme.palette.primary.main,
    color: myTheme.palette.text.main,
	width: '400px',
	height: '300px',
	borderRadius: '5px',
  }
};