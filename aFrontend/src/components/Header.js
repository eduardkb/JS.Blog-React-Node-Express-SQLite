import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu"
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

function Header(props) {
	const dta = props.data

	function CategoryList(categories) {
		return (
			categories.map((category) => {
				return (
					<Button key={category.id} size="small" variant="contained" sx={{ bgcolor: "secondary.main", marginLeft: 1, marginBottom: 1 }}>
						{category.name}
					</Button>
				)
			})
		)
	}

	function CategoryMenu(props) {
		const categories = props.categories
		const [anchorEl, setAnchorEl] = React.useState(null);
		const open = Boolean(anchorEl);
		const handleClick = (event) => {
			setAnchorEl(event.currentTarget);
		};
		const handleClose = () => {
			setAnchorEl(null);
		};
		return (
			<React.Fragment>
				<Box>
					Category:
					<Tooltip title="Categories">
						<MenuIcon
							onClick={handleClick}
							size="small"
							sx={{ ml: 2 }}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
						>
							<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
						</MenuIcon>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				>
					{categories.map((category) => {
						return (
							<MenuItem key={category.id} onClick={handleClose}>
								{category.name}
							</MenuItem>
						)
					})}
				</Menu>
			</React.Fragment>
		);
	}

	function catSubMenu() {
		if (dta !== undefined) {
			console.log("D1-", dta)
			dta.unshift({
				"id": 0,
				"name": "All",
				"description": "All Items",
				"active": true
			})
			console.log("D2-", dta)
			return (
				<>
					<Divider sx={{ marginTop: "5px", borderBottomWidth: 3 }} />
					<Grid container spacing={2} sx={{ alignItems: 'end' }}>
						<Grid item xs={6} >
							<Typography variant="h6" sx={{ margin: 0 }}>
								Filter:
							</Typography>
						</Grid>
						<Grid item xs={6} textAlign='right' >
							{/* Display only on screens larger than sm */}
							<Box sx={{
								display: { xs: "none", sm: "block" }
							}}>
								<Typography variant="h6" sx={{ margin: 0 }}>
									Categories:
								</Typography>
								{CategoryList(dta)}
							</Box>
							{/* Display only on xs screen */}
							<Box sx={{
								display: { xs: "block", sm: "none" }
							}}>
								<CategoryMenu categories={dta} />
							</Box>
						</Grid>
					</Grid>
				</>
			)
		}
	}

	return (
		<AppBar position="static">
			<div style={{ padding: 5 }}>
				<Grid container spacing={2} sx={{ direction: "row", alignItems: "center", }}>
					<Grid item xs={4} textAlign='left'>
						<img src='/EKBLogo.png' alt="logo" style={{ maxWidth: "40px" }} />
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
				{catSubMenu()}
			</div>

		</AppBar>
	);
};
export default Header;