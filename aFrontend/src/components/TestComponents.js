import { useState } from "react"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import SaveIcon from "@mui/icons-material/Save"
import DeleteIcon from "@mui/icons-material/Delete"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import Textfield from "@mui/material/TextField"
import Container from "@mui/material/Container"

import { green, yellow, teal } from "@mui/material/colors"
import { ThemeProvider, createTheme  } from "@mui/material/styles"
import { styled } from '@mui/system';

// paper is only to see grid better
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

// create app bar
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
// import IconButton from "@mui/material/IconButton"
// import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"

const theme = createTheme({
    palette:{
        primary:{
            main: teal[800]
        },
        secondary:{
            main: '#009688'
        },
        warning:{
            main: yellow[600]
        },
        info:{
            main: green[600]
        }
    }
})

const MyStyledDiv = styled('div')({
    margin:10, 
    padding:10, 
    border: 
    '5px solid gray', 
    textAlign: 'center'
});

const MyStyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #0066ff, #009933)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
});

export default function TestComponents(){
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <MyStyledDiv style={{backgroundColor: '#e0ddca'}}>
                    
                    <h3>Testing Components</h3>
                    <MyHeaderBar />
                    <MyRespomsiveGrid />
                    <MyFirstGrid />
                    <StyledButton />
                    <TextFieldExample />
                    <CheckboxExample />
                    <ButtonExample />
                </MyStyledDiv>
            </Container>
        </ThemeProvider>
    )
}

function MyHeaderBar(){
    return(
        <div>
            <AppBar color="primary">
                <Toolbar>
                    <Grid container spacing={4}>
                        <Grid item xs >
                            <Typography variant="h6" >
                                Logo
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6" >
                                EKB Blog
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained" >
                                Login
                            </Button>                        
                        </Grid>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

function MyRespomsiveGrid(){
    return(
        <MyStyledDiv>
            <Grid container spacing={2} justifyContent="center">
                {/* xs = mobile size */}
                <Grid item xs={12} sm={6} md={4} lg={1}>
                    <Paper style={{height:75, width:'100%',}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={1}>
                    <Paper style={{height:75, width:'100%',}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={1}>
                    <Paper style={{height:75, width:'100%',}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={1}>
                    <Paper style={{height:75, width:'100%',}} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={1}>
                    <Paper style={{height:75, width:'100%',}} />
                </Grid>
            </Grid>
        </MyStyledDiv>
    )
}

function MyFirstGrid(){
    return(
        <MyStyledDiv>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Paper style={{height:75, width:50,}} />
                </Grid>
                <Grid item>
                    <Paper style={{height:75, width:50,}} />
                </Grid>
                <Grid item>
                    <Paper style={{height:75, width:50,}} />
                </Grid>
            </Grid>
        </MyStyledDiv>
    )
}

function StyledButton(){
    return(
        <MyStyledDiv>
            <MyStyledButton>
                My Styled Button
            </MyStyledButton>
        </MyStyledDiv>
    )
}

function TextFieldExample(){
    return(
        <MyStyledDiv>
            <Textfield
                variant="filled"
                color="warning"
                type={"email"}
                label="Type e-mail"
                // value="test@ekb.com"
                placeholder="test@ekb.com"
            />
        </MyStyledDiv>
    )
}

function CheckboxExample(){
    const [checked, setChecked] = useState(true)
    return(
        
        <>
            {/* simple checkbox */}
            <MyStyledDiv>
                <Checkbox
                    color="error"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
            </MyStyledDiv>
            {/* checkbox with label*/}
            <MyStyledDiv>
                <FormControlLabel
                    control={
                        <Checkbox
                            color="secondary"
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            inputProps={{
                                'aria-label': 'secondary checkbox'
                            }}
                            //changing checkbox to personal icon
                            icon={<SaveIcon/>}
                            checkedIcon={<DeleteIcon/>}
                        />
                    }
                    label="Check Label"
                />
            </MyStyledDiv>
        </>
    )
}

function ButtonExample(){
    return(
        <MyStyledDiv>
            <ButtonGroup variant="contained" >
                <Button 
                    // size="large"
                    // disabled
                    // create own style:
                    style={{
                        fontSize: 15
                    }}
                    // add icon
                    startIcon={<SaveIcon/>}
                    // endIcon={<SaveIcon/>}
                    color="primary"
                    onClick={()=>{alert('Button Pressed!!!')}} 
                    >
                    Save
                </Button>     
                <Button 
                    startIcon={<DeleteIcon/>}
                    color="warning"
                    >
                    Discard
                </Button>      
            </ButtonGroup>   
        </MyStyledDiv>
    )
}