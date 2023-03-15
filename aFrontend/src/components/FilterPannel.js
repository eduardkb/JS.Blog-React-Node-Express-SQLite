import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { classCss } from "../mui_css/muiStyles";

const FilterPannel = () =>{    
	return(
		<div>
			<Box sx={classCss.boxFilter}>
				<Typography variant="body2" >
					Filter
				</Typography>
			</Box>
		</div>
	);
};



export default FilterPannel;