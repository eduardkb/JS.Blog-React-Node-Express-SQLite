import React, { useContext } from "react";
import PostCard from "./PostCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { classCss } from "../mui_css/muiStyles";
import { PostDataContext } from "../contexts/PostsContext";

const PostsPannel = ({ postsReqStatus }) => {
	const { posts } = useContext(PostDataContext);

	return (
		<div style={classCss.divPostsPannel}>
			<Container maxWidth="xl">
				<Grid container spacing={2} justifyContent="center">
					{posts
						.filter((post) => {
							return (
								post.published
							);
						})
						.sort((a, b) => {
							// sorts by date 
							return new Date(b.createdAt) - new Date(a.createdAt);
						})
						.map((post) => {
							return (
								<PostCard key={post.id} posts={post} />
							);
						})}
				</Grid>
			</Container>
		</div>
	);
};



export default PostsPannel;