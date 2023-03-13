import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { classCss } from "../mui_css/muiStyles"

const PostsPannel = () =>{
    return(
	<div style={classCss.divPostsPannel}>
        <Container maxWidth="xl">
			<Grid container spacing={2} justifyContent="center">				
				{fGenBox()}
			</Grid>			
        </Container>
	</div>
    )
}

function fGenBox(){
	let res = [];
	for(var i=0; i < 3; i++){
		res.push(
			<Box style={classCss.box}>			
					<Paper style={classCss.paper}>item</Paper>
					<Typography variant="h5" textAlign="center">
						Title
					</Typography>				
			</Box>
		)
	}
	return(res)	
}


export default PostsPannel;