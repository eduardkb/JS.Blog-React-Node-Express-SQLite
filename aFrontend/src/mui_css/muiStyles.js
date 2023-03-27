import React, { useState } from "react";
import { deepOrange, grey, teal } from "@mui/material/colors"
import { createTheme } from '@mui/material/styles';

export function MyCustomTheme() {
  const [mode, setMode] = useState('light');

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ?
        {
          // palette values for light mode
          primary: {
            main: teal[300]
          },
          divider: grey[200],
          text: {
            primary: "#000",
            secondary: '#fff',
          },
        }

        // {
        //   // palette values for light mode
        //   primary: grey,
        //   secondary: grey,
        //   divider: grey[200],
        //   text: {
        //     primary: "#000",
        //     secondary: yellow[800],
        //   },
        // }
        :
        {
          // palette values for dark mode
          primary: deepOrange,
          secondary: {
            main: "#664200",
          },
          divider: deepOrange[700],
          background: {
            default: "#000",
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: "#000",
          },
        }),
    },
  });

  function setTheme() {
    setMode((prevMode) =>
      prevMode === 'light' ? 'dark' : 'light',
    );
  }
  const myTheme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return { myTheme, setTheme }
}

export const classCss = {
  mainPage: {
    backgroundColor: "background.default",
  },
  headerBox: {
    color: "text.primary",
    bgcolor: "primary.main",
  },
  paperPost: {
    textAlign: "center",
    height: '200px',
  },
  cardTitle: {
    color: "text.primary",
  },
  mainTags: {
    backgroundColor: "white",
    color: "primary.light",
    borderRadius: '5px'
  },
  headerAppBar: {
    // marginBottom: "10px"
  },
  cardPost: {
    backgroundColor: "primary.main",
    color: "text.primary",
    // margin: 5,
    padding: 5,
    borderRadius: '5px',
  },

  boxFilter: {
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
  footerBox: {
    color: "text.primary",
    bgcolor: "primary.main",
    textAlign: "center",
    padding: "10px"
  },
  postsPictureBox: {
    height: "100%",
    width: "100%",
    borderRadius: '5px',
    cursor: 'pointer',
  },
  postDetailsPicture: {
    height: "100%",
    width: "100%",
    borderRadius: '5px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postDetailBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "text.primary",
  },
  centerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  postComments: {
    m: 2,
    p: 2,
    backgroundColor: "primary.main",
    outlineStyle: "dashed"
  }
};