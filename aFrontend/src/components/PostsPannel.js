import React, { useContext } from "react";
import PostCard from "./PostCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { classCss } from "../mui_css/muiStyles";
import { PostDataContext } from "../contexts/PostsContext";

const PostsPannel = ({ postsReqStatus }) => {
	const { posts } = useContext(PostDataContext);

	return (
		<Container maxWidth="xl" sx={{ margin: "30px 0px" }}>
			<Grid container spacing={3} style={classCss.mainPannelGrid}>
				{RenderPosts(posts)}
			</Grid>
		</Container>
	);
};

function RenderPosts(posts) {
	return (
		<>
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
						<Grid item key={post.id} xs={12} sm={6} md={4} xl={3} >
							<PostCard posts={post} />
						</Grid>
					);
				})}
		</>
	)
}

export default PostsPannel;