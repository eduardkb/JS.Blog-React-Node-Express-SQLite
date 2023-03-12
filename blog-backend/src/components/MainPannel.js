import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import { MainCardsDiv } from "../mui_css/styledComponents"

const MainPannel = () =>{
    return(
        <MainCardsDiv>
            <Grid container bgcolor="tertiary.main" padding="0px 20px 20px 0px" spacing={2} justifyContent="center">
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
        </MainCardsDiv>
    )   
}
export default MainPannel;