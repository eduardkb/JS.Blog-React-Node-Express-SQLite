import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () =>{
    return(
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Grid container spacing={4} justifyContent='flex-start'>
                    <Grid item xs={2}>
                        <Typography variant="h6" >
                            Logo
                        </Typography>
                    </Grid>
                    <Grid item xs={8} textAlign="center">
                        <Typography variant="h6" >
                            EKB Blog
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="secondary" >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header