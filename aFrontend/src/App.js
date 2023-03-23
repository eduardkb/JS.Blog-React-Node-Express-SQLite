import React from "react";
import MainApp from "./components/MainApp";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme } from "./mui_css/muiStyles";
import { Typography } from "@mui/material";

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={myTheme}>
				<MainApp />
			</ ThemeProvider>
		</div>
	);
}

export default App;
