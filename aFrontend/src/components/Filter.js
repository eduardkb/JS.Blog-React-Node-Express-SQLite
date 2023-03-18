import React, { useContext } from "react";
import { PostDataContext } from "../contexts/PostsContext";
import MenuIcon from "@mui/icons-material/Menu"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowDropDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Filter(props) {
    const dta = props.dta
    const setPostSelected = props.setPostSelected
    const slideItems = (
        <Paper elevation={4}>
            <Box padding='30px'>
                <TextField
                    variant="standard"
                    color="tertiary"
                />
                <Button variant="contained" >Clear Filters</Button>
            </Box>
        </Paper>
    );

    function FilterSlide() {
        const [checked, setChecked] = React.useState(false);

        const handleChange = () => {
            setChecked((prev) => !prev);
        };

        return (
            <Box sx={{ height: 180 }}>
                <Box sx={{ width: `calc(500px + 16px)` }}>
                    <FormControlLabel
                        control={<Button variant='outlined'
                            startIcon={<ArrowDropDownIcon />}
                            onClick={handleChange}
                            sx={{ backgroundColor: "secondary.main" }}
                        />}
                    />
                    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                        {slideItems}
                    </Slide>
                </Box>
            </Box>
        );
    }

    function BuildCatMenu(props) {
        const categories = props.categories
        const { setCatFilter } = useContext(PostDataContext);

        const handleBtnCatClick = (e, id, setFunc) => {
            e.preventDefault();
            setPostSelected(0)
            setFunc(id)
        }

        function SmCategoryMenu(props) {
            const categories = props.categories
            const setCatFilter = props.funcCatFilter
            return (
                <React.Fragment>
                    <Button key={0} onClick={e => handleBtnCatClick(e, 0, setCatFilter)} size="small" variant="contained" sx={{ bgcolor: "secondary.main", marginLeft: 1, marginBottom: 1 }}>
                        All
                    </Button>
                    {categories.map((category) => {
                        return (
                            <Button key={category.id} onClick={e => handleBtnCatClick(e, category.id, setCatFilter)} size="small" variant="contained" sx={{ bgcolor: "secondary.main", marginLeft: 1, marginBottom: 1 }}>
                                {category.name}
                            </Button>
                        )
                    })}
                </React.Fragment>

            )
        }
        function XsCategoryMenu(props) {
            const categories = props.categories
            const setCatFilter = props.funcCatFilter

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
                    <Box >
                        <Typography display="inline" variant="h6" sx={{ margin: 0, verticalAlign: "middle" }}>
                            Categories:
                        </Typography>
                        <Tooltip title="Categories">
                            <MenuIcon
                                sx={{ verticalAlign: "middle" }}
                                color="text"
                                onClick={handleClick}
                                fontSize="large"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
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
                        <MenuItem key={0} onClick={e => handleBtnCatClick(e, 0, setCatFilter)}>
                            All Categories
                        </MenuItem>
                        {categories.map((category) => {
                            return (
                                <MenuItem key={category.id} onClick={e => handleBtnCatClick(e, category.id, setCatFilter)}>
                                    {category.name}
                                </MenuItem>
                            )
                        })}
                    </Menu>
                </React.Fragment>
            );
        }

        if (props.buildType === 'xs') {
            return (
                <XsCategoryMenu categories={categories} funcCatFilter={setCatFilter} />
            )
        }
        if (props.buildType === 'sm') {
            return (
                <SmCategoryMenu categories={categories} funcCatFilter={setCatFilter} />
            )

        }

    }

    function FilterMenu() {
        const { titleFilter, setTitleFilter, fResetFilters } = useContext(PostDataContext)
        function handleChangePostFilter(e) {
            setTitleFilter(e.target.value);
        }
        function handleBtnClearFilters(e) {
            fResetFilters()
            setTitleFilter(e.target.value);
        }
        return (
            <Box>
                <TextField
                    id="filterPostTitle"
                    label="Filter by Post Title"
                    variant="standard"
                    color="tertiary"
                    sx={{ ml: 1 }}
                    onChange={handleChangePostFilter}
                    value={titleFilter}
                />
                <Button variant="contained" onClick={handleBtnClearFilters}>Clear Filters</Button>
            </Box>
        )
    }

    if (dta !== undefined) {
        return (
            <>
                <Divider sx={{ marginTop: "5px", borderBottomWidth: 3 }} />
                <Grid container spacing={2}>
                    <Grid item xs={6} display="flex" alignItems="end">

                        <FilterMenu />
                        <FilterSlide />
                    </Grid>
                    <Grid item xs={6}>
                        {/* Display only on screens larger than sm */}
                        <Box sx={{ display: { xs: "none", sm: "block" }, textAlign: "right" }}>
                            <Typography variant="h6" sx={{ margin: 0 }} >
                                Categories:
                            </Typography>
                            <BuildCatMenu categories={dta} buildType="sm" />
                        </Box>
                        {/* Display only on xs screen */}
                        <Box sx={{ display: { xs: "block", sm: "none" }, textAlign: "right" }}>
                            <BuildCatMenu categories={dta} buildType="xs" />
                        </Box>
                    </Grid>
                </Grid>
            </>
        )
    }

}

