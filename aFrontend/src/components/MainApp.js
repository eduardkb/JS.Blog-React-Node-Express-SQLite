import React from "react";
import MainPostsPage from "./Main/MainPostsPage";
import { ThemeProvider } from "@mui/material/styles";
import { MyCustomTheme } from "../mui_css/muiStyles";
import Box from "@mui/material/Box";
import { classCss } from "../mui_css/muiStyles";

function MainApp() {
	const { myTheme, setTheme } = MyCustomTheme();
	return (
		<ThemeProvider theme={myTheme}>
			<Box className="App" sx={classCss.mainPage}>
				<MainPostsPage setTheme={setTheme} />
			</Box>
		</ ThemeProvider >
	)
}

export default MainApp;