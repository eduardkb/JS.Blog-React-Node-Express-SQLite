import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Filter from "./Filter";



function Header(props) {
	const dta = props.data
	const setPostSelected = props.setPostSelected
	const postSelected = props.postSelected

	return (
		<AppBar position="static">
			<div style={{ padding: 5 }}>
				<Grid container spacing={2} sx={{ direction: "row" }}>
					<Grid item xs={4} textAlign='left'>
						<Link href=".">
							<img src='/EKBLogo.png' alt="logo" style={{ maxWidth: "40px" }} />
						</Link>
					</Grid>
					<Grid item xs={4} textAlign='center'>
						<Typography variant="h4" sx={{ margin: 0 }}>
							W B
						</Typography>
					</Grid>
					<Grid item xs={4} textAlign='right'>
						<Button variant="contained" sx={{ bgcolor: "secondary.main" }}> Login</Button>
					</Grid>
				</Grid>
				<Filter dta={dta} setPostSelected={setPostSelected} postSelected={postSelected} />
			</div>

		</AppBar >
	);
};
export default Header;