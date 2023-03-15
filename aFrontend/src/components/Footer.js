import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () =>{
	return(
		<Box sx={{textAlign:"center", bgcolor:"primary.main" ,color:"text.main", padding:"10px"}}>
			<Typography variant="h7">
                Web 
			</Typography>
		</Box>
	);
};
export default Footer;