import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Icon from '@mui/icons-material/Badge';
import { classCss } from '../mui_css/muiStyles';

const Header = () =>{
    return(
        <AppBar position="static" sx={classCss.headerAppBar} >
            <Toolbar sx={{justifyContent: "space-between"}}>
                <Icon/>                
                <Typography variant="h6" >
                    WS
                </Typography>
                
                <Button variant="contained" color="secondary" sx={{alignItems: 'right'}}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default Header