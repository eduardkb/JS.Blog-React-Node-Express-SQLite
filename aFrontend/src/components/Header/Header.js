import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Filter from "./Filter";
import { classCss } from "../../mui_css/muiStyles";
import { SessionContext } from "../../contexts/SessionContext";


function Header(props) {
	const dta = props.data
	const setPostSelected = props.setPostSelected
	const postSelected = props.postSelected

	const { userLoggedIn, userLogin, userLogoff, showAdminPortal,
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
						<Box width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="end">
							<Typography variant="body2" sx={{ margin: "0px 10px", textAlign: "right" }}>
								Welcome, <strong>{userLoggedIn.name}</strong>
							</Typography>
							<Box container width="100%" display="flex"
								flexDirection="row" justifyContent="flex-end"
								alignItems="end">
								{
									isAdminUser ?
										showAdminPortal ? (
											<Button variant="contained" onClick={() => setShowAdminPortal(!showAdminPortal)}>
												Blog
											</Button>
										) : (
											<Button variant="contained" onClick={() => setShowAdminPortal(!showAdminPortal)}>
												Admin Page
											</Button>
										)
										: (null)}
								{userLoggedIn.id === 1
									? (
										<Button variant="contained" onClick={() => userLogin()}  > Login</Button>
									) : (
										<Button variant="contained" onClick={() => userLogoff()} > Log Out</Button>
									)
								}
							</Box>
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