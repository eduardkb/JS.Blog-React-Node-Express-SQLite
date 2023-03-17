import React, { useContext } from "react";
import PostCard from "./PostCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { classCss } from "../mui_css/muiStyles";
import { PostDataContext } from "../contexts/PostsContext";

const PostsPannel = () => {
	const { posts, catFilter, titleFilter } = useContext(PostDataContext);

	return (
		<Container maxWidth="xl" sx={{ margin: "30px 0px" }}>
			<Grid container spacing={3} style={classCss.mainPannelGrid}>
				{renderPosts(posts, catFilter, titleFilter)}
			</Grid>
		</Container>
	);
};

function renderPosts(posts, catFilter, titleFilter) {
	return (
		<>
			{posts
				.filter((post) => {
					return (
						post.published
					);
				})
				.filter((post) => {
					return (
						catFilter === 0 ? post : post.categoryId === catFilter
					);
				})
				.filter((post) => {
					return (
						post.title.toLowerCase().includes(titleFilter.toLowerCase())
					)
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