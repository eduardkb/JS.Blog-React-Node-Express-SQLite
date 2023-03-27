import React from "react";
import MainApp from "./components/MainApp";
import { ThemeProvider } from "@mui/material/styles";
import { MyCustomTheme } from "./mui_css/muiStyles";
import Box from "@mui/material/Box";
import { classCss } from "./mui_css/muiStyles";



function App() {
	const { myTheme, setTheme } = MyCustomTheme();
	return (
		<ThemeProvider theme={myTheme}>
			<Box className="App" sx={classCss.mainPage}>
				<MainApp setTheme={setTheme} />
			</Box>
		</ ThemeProvider >

	);
}

export default App;
