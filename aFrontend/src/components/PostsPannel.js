import React from "react";
import postData from "../dev/DB_PostAndTags.json";
import Post from "./Post";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { classCss } from "../mui_css/muiStyles";

const PostsPannel = () =>{    
	return(
		<div style={classCss.divPostsPannel}>
			<Container maxWidth="xl">
				<Grid container spacing={2} justifyContent="center">						
					{postData
						.filter((post)=>{
							return(
								post.published
							);
						})
						.sort((a, b) => {		
							// sorts by date 
							return new Date(b.createdAt) - new Date(a.createdAt);
						})
						.map((post)=>{
							return(
								<Post key={post.id} postData={post}/>
							);
						})}
				</Grid>			
			</Container>
		</div>
	);
};



export default PostsPannel;