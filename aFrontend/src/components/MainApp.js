import React, { useContext } from "react";
import MainPostsPage from "./Main/MainPostsPage";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { classCss } from "../mui_css/muiStyles";
import { SessionContext } from "../contexts/SessionContext";

function MainApp() {
	const { myTheme } = useContext(SessionContext)
	return (
		<ThemeProvider theme={myTheme}>
			<Box className="App" sx={classCss.mainPage}>
				<MainPostsPage />
			</Box>
		</ ThemeProvider >
	)
}

export default MainApp;