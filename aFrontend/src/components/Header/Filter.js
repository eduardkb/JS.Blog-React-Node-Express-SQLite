import React, { useContext } from "react";
import { PostDataContext } from "../../contexts/PostsContext";
import MenuIcon from "@mui/icons-material/Menu"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Filter(props) {
    const dta = props.dta
    const setPostSelected = props.setPostSelected
    const postSelected = props.postSelected;


    function BuildCatMenu(props) {
        const categories = props.categories
        const { setCatFilter, fResetFilters } = useContext(PostDataContext);

        const handleBtnCatClick = (e, CategID, setCategFilter) => {
            e.preventDefault();
            setPostSelected(0) // sets post selected to 0 to return to main posts list
            fResetFilters() // removes all filters
            setCategFilter(CategID) // filter list of posts by Category ID
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

    function FilterSlide() {
        const { titleFilter, setTitleFilter, fResetFilters, dateFilter, setDateFilter } = useContext(PostDataContext)

        const [anchorEl, setAnchorEl] = React.useState(null);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        function handleChangePostFilter(e) {
            setTitleFilter(e.target.value);
        }
        function handleBtnClearFilters(e) {
            fResetFilters()
            setTitleFilter(e.target.value);
        }
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;
        if (postSelected === 0) {
            return (
                <div>
                    <Button aria-describedby={id}
                        variant="contained" onClick={handleClick}
                        endIcon={<ArrowDropDownIcon />} sx={{ marginLeft: 2 }}
                    >
                        Filters
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        {/* ITEMS ON POPOVER MENU */}
                        <Grid container direction="column" >
                            <TextField
                                id="filterPostTitle"
                                label="Filter by Post Title"
                                variant="standard"
                                color="tertiary"
                                onChange={handleChangePostFilter}
                                value={titleFilter}
                                sx={{ margin: 2 }}
                            />
                            <Divider sx={{ borderBottomWidth: 3 }} />
                            <TextField
                                name="someDate"
                                label="Filter by Start Date"
                                variant="standard"
                                InputLabelProps={{ shrink: true }}
                                type="date"
                                onChange={(newDate) => {
                                    setDateFilter(newDate.target.value)
                                }}
                                defaultValue={dateFilter}
                                sx={{ margin: 2 }}
                            />
                            <Divider sx={{ borderBottomWidth: 3 }} />
                            <Button vaiant="contained" onClick={handleBtnClearFilters}
                                sx={{ backgroundColor: "primary.main", color: "black", margin: 2 }}
                            >
                                Clear Filters
                            </Button>
                        </Grid>
                    </Popover>
                </div >
            );
        }
    }

    if (dta !== undefined) {
        return (
            <>
                <Divider sx={{ marginTop: "5px", borderBottomWidth: 3 }} />
                <Grid container spacing={2}>
                    <Grid item xs={6} display="flex" alignItems="flex-end" justifyContent="left">
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

