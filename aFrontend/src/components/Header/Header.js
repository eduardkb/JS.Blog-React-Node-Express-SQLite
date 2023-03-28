import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Filter from "./Filter";
import { classCss } from "../../mui_css/muiStyles";
import { SessionContext } from "../../contexts/SessionContext";


function Header(props) {
	const dta = props.data
	const setPostSelected = props.setPostSelected
	const postSelected = props.postSelected

	const { userLoggedIn, setUserLoggedIn } = useContext(SessionContext)

	return (
		<AppBar position="static" sx={classCss.headerBox}>
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
						<Typography variant="body2" sx={{ margin: 0 }}>
							Welcome, {userLoggedIn.name}
						</Typography>
						<Button variant="contained" onClick={() => setUserLoggedIn({ id: 2, name: "John" })} > Login</Button>
					</Grid>
				</Grid>
				<Filter dta={dta} setPostSelected={setPostSelected}
					postSelected={postSelected} />
			</div>

		</AppBar >
	);
};
export default Header;