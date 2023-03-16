import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { classCss } from "../mui_css/muiStyles";

const Footer = () => {
	return (
		<Box sx={classCss.footerBox}>
			<Typography variant="h7">
				Web
			</Typography>
		</Box>
	);
};
export default Footer;