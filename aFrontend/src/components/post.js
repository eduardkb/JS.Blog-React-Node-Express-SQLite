import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { classCss } from "../mui_css/muiStyles";
import moment from "moment/moment";

function Post(post){	
	const {title, picture, createdAt, upvote} = post.postData;
	return(		
		<Box style={classCss.boxPost}>			
			<Paper style={classCss.paperPost}>{picture}</Paper>
			<Typography variant="h5" textAlign="center">
				{title}							
			</Typography>
			<Typography variant="h6" textAlign="center">							
				<span style={{float: "left"}}>
					Posted: {moment.utc(createdAt).fromNow()}
				</span>
				<span style={{float: "right"}}>Upvotes: {upvote}</span>
			</Typography>
		</Box>
	);
}

export default Post;