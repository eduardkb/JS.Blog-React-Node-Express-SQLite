import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Switch from "@mui/material/Switch";
import { classCss } from "../../mui_css/muiStyles";
import { SessionContext } from "../../contexts/SessionContext";
import Filter from "./Filter"

function Header(props) {
	const dta = props.data
	const setPostSelected = props.setPostSelected
	const postSelected = props.postSelected

	const { setTheme, userLoggedIn, userLogin, userLogoff, showAdminPortal,
		isAdminUser, setShowAdminPortal } = useContext(SessionContext)

	return (
		<AppBar position="static" sx={classCss.headerBox}>
			<div style={{ padding: 5 }}>
				<Grid container spacing={2} display="flex" flexDirection="row">
					<Grid item xs={5} display="flex"
						justifyContent="start" alignItems="center">
						<Link href=".">
							<img src='/EKBLogo.png' alt="logo" style={{ maxWidth: "40px" }} />
						</Link>
					</Grid>
					<Grid item xs={2} display="flex"
						justifyContent="center" alignItems="center">
						<Typography variant="h4" sx={{ margin: 0, textAlign: "center" }}>
							Eb Blg
						</Typography>
					</Grid>
					<Grid item xs={5} display="flex"
						justifyContent="end" alignItems="center">
						<Box width="100%" display="flex"
							flexDirection="column" justifyContent="end"
							alignItems="end" >
							<Box display="flex"
								flexDirection="row" justifyContent="end"
								alignItems="end" >
								<Typography variant="body2" sx={{ margin: "0px 10px", textAlign: "right" }}>
									Dark Mode:
								</Typography>
								<Switch color="default" onClick={() => setTheme()} />
							</Box>
							<Typography variant="body2" sx={{ margin: "0px 10px", textAlign: "right" }}>
								Welcome, <strong>{userLoggedIn.name}</strong>
							</Typography>
						</Box>
						<Box display="flex"
							flexDirection="row" justifyContent="flex-end"
							alignItems="end" >
							{
								isAdminUser
									? (
										<Button variant="contained" sx={{ mr: 1, }} onClick={() => setShowAdminPortal(!showAdminPortal)}>
											{showAdminPortal ? "Blog" : "Admin"}
										</Button>
									) : (null)}

							{
								userLoggedIn.id === 1
									? (
										<Button variant="contained" sx={{ width: "50px" }} onClick={() => userLogin()}  > Login</Button>
									) : (
										<Button variant="contained" sx={{ width: "100px" }} onClick={() => userLogoff()} > Log Out</Button>
									)
							}
						</Box>
					</Grid>
				</Grid>
				{showAdminPortal ? null : (
					<Filter dta={dta} setPostSelected={setPostSelected}
						postSelected={postSelected} />
				)}
			</div>

		</AppBar >
	);
};
export default Header;