import React, { useContext } from "react";
import PostCard from "./PostCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import { classCss } from "../../mui_css/muiStyles";
import { PostDataContext } from "../../contexts/PostsContext";

const PostsPannel = ({ setPostSelected }) => {
	const { posts, catFilter, titleFilter, dateFilter } = useContext(PostDataContext);

	const filteredPosts = posts
		.filter((post) => post.published)
		.filter((post) => catFilter === 0 ? post : post.categoryId === catFilter)
		.filter((post) => post.title.toLowerCase().includes(titleFilter.toLowerCase()))
		.filter((post) => dateFilter === "" ? post : post.createdAt >= dateFilter)
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	return (
		<>
			{
				filteredPosts.length > 0 ?
					<RenderPosts filteredPosts={filteredPosts}
						setPostSelected={setPostSelected}
						dateFilter={dateFilter} /> :
					<RenderMsgNoPosts />
			}
		</>

	);
};


function RenderPosts({ filteredPosts, setPostSelected }) {
	return (
		< Container maxWidth="xl" sx={{ margin: "30px 0px" }}>

			<Grid container spacing={3} style={classCss.mainPannelGrid}>
				{filteredPosts.map((post) => {
					return (
						<Grid item key={post.id} xs={12} sm={6} md={4} xl={3} >
							<PostCard post={post} setPostSelected={setPostSelected} />
						</Grid>
					);
				})}
			</Grid>
		</Container >
	)
}

function RenderMsgNoPosts() {
	return (
		<Box display="flex"
			justifyContent="center"
			alignItems="center" margin='100px 0px'>
			<Alert variant="outlined" severity="warning">
				Filter settings returned <strong>0 posts.</strong>
			</Alert>
		</Box>
	)
}
export default PostsPannel;