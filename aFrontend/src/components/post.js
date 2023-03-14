import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { classCss } from "../mui_css/muiStyles"
import moment from 'moment/moment';

function Post(post){	
	const {title, picture, createdAt} = post.postData;
    return(
	<div style={classCss.divPostsPannel}>
        <Container maxWidth="xl">
			<Grid container spacing={2} justifyContent="center">				
				<Box style={classCss.box}>			
					<Paper style={classCss.paper}>{picture}</Paper>
					<Typography variant="h5" textAlign="center">
						{title}							
					</Typography>
					<Typography variant="h6" textAlign="center">							
						Posted: {moment(createdAt,  "YYYYMMDD").fromNow()}							
					</Typography>						
				</Box>
			</Grid>			
        </Container>
	</div>
    )
}

export default Post