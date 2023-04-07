import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { classCss } from "../../mui_css/muiStyles";
import { SessionContext } from "../../contexts/SessionContext";
import Filter from "./Filter"
import CustomSwitch from "../Other/CustomSwitch";

function Header(props) {
	const dta = props.data
	const setPostSelected = props.setPostSelected
	const postSelected = props.postSelected
	const [isSelected, setIsSelected] = useState(false)

	const { setTheme, userLoggedIn, userLogin, userLogoff, showAdminPortal,
		isAdminUser, setShowAdminPortal } = useContext(SessionContext)

	function handleThemeClick() {
		setTheme()
		setIsSelected(!isSelected)
	}

	return (
		<AppBar position="static" sx={classCss.headerBox}>
			<div style={{ padding: 5 }}>
				<Box sx={{ display: { xs: "block", sm: "none" } }} >
					<Grid container display="flex" direction="row" justifyContent="space-between">
						<Grid item display="flex"
							justifyContent="start" alignItems="center">
							<Typography variant="body2" mr="2px">
								DarkMode:
							</Typography>
							<CustomSwitch handleClick={handleThemeClick} isSelected={isSelected} />
						</Grid>
						<Grid item display="flex" justifyContent="end" alignItems="center" >
							<Typography variant="body2" >
								Welcome, <strong>{userLoggedIn.name}</strong>
							</Typography>
						</Grid>
					</Grid>
				</Box>
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
						justifyContent="end" alignItems="center"
					>
						<Box width="100%" sx={{ display: { xs: "none", sm: "block" } }}>
							<Box display="flex"
								flexDirection="row" justifyContent="end"
								alignItems="end" >
								<Typography variant="body2" sx={{ margin: "0px 10px", textAlign: "right" }}>
									Dark Mode:
								</Typography>
								<CustomSwitch sLabel="Darkmode Switch" handleClick={handleThemeClick} isSelected={isSelected} />
							</Box>
							<Typography variant="body2" sx={{ margin: "0px 10px", textAlign: "right" }}>
								Welcome, <strong>{userLoggedIn.name}</strong>
							</Typography>
						</Box>
						<Box sx={{ display: { xs: "none", md: "block" } }} >
							<Box display="flex" flexDirection="row" justifyContent="end" alignItems="end" >
								{
									userLoggedIn.id === 1
										? (
											<Button variant="contained" sx={{ width: "50px" }} onClick={() => userLogin()}  > Login</Button>
										) : (
											<Button variant="contained" sx={{ width: "100px" }} onClick={() => userLogoff()} > Log Out</Button>
										)
								}
								{
									isAdminUser
										? (
											<Button variant="contained" sx={{ ml: "3px" }} onClick={() => setShowAdminPortal(!showAdminPortal)}>
												{showAdminPortal ? "Blog" : "Admin"}
											</Button>
										) : (null)
								}
							</Box>
						</Box>
						<Box sx={{ display: { xs: "block", md: "none" } }} >
							<Box display="flex" flexDirection="column" justifyContent="end" alignItems="end" >
								{
									userLoggedIn.id === 1
										? (
											<Button variant="contained" sx={{ width: "100px" }} onClick={() => userLogin()}  > Login</Button>
										) : (
											<Button variant="contained" sx={{ width: "100px" }} onClick={() => userLogoff()} > Log Out</Button>
										)
								}
								{
									isAdminUser
										? (
											<Button variant="contained" sx={{ width: "100px", mt: "3px" }} onClick={() => setShowAdminPortal(!showAdminPortal)}>
												{showAdminPortal ? "Blog" : "Admin"}
											</Button>
										) : (null)
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