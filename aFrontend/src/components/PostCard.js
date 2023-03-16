import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Box";
import { classCss } from "../mui_css/muiStyles";
import moment from "moment/moment";

function PostCard({ posts }) {
	return (
		<Card style={classCss.cardPost}>
			<Paper style={classCss.paperPost}>{posts.picture}</Paper>
			<Typography variant="h5" textAlign="center">
				{posts.title}
			</Typography>
			<Typography variant="h6" textAlign="center">
				<p style={classCss.pCardProps}>
					Posted: {moment.utc(posts.createdAt).fromNow()}
				</p>
				<p style={classCss.pCardProps} >Upvotes: {posts.upvote}</p>
			</Typography>
		</Card>
	);
}

export default PostCard;