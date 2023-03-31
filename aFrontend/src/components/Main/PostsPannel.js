import React, { useContext } from "react";
import { classCss } from "../../mui_css/muiStyles";
import { PostDataContext } from "../../contexts/PostsContext";
import PostCard from "./PostCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";


const PostsPannel = ({ setPostSelected }) => {
	const { posts, catFilter, titleFilter, dateFilter } = useContext(PostDataContext);
	const { selectedOrderBy } = useContext(PostDataContext)

	function orderBy(a, b) {
		if (selectedOrderBy === "Date") {
			return new Date(b.createdAt) - new Date(a.createdAt)
		}
		else if (selectedOrderBy === "Title") {
			var textA = a.title.toUpperCase();
			var textB = b.title.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		}
		else if (selectedOrderBy === "Upvote") {
			return b.upvote - a.upvote
		}
	}

	const filteredPosts = posts
		.filter((post) => post.published)
		.filter((post) => catFilter === 0 ? post : post.categoryId === catFilter)
		.filter((post) => post.title.toLowerCase().includes(titleFilter.toLowerCase()))
		.filter((post) => dateFilter === "" ? post : post.createdAt >= dateFilter)
		.sort((a, b) => orderBy(a, b))
	//.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	return (
		<Box sx={classCss.centerBox}>
			{
				filteredPosts.length > 0 ?
					<RenderPosts filteredPosts={filteredPosts}
						setPostSelected={setPostSelected}
						dateFilter={dateFilter} /> :
					<RenderMsgNoPosts />
			}
		</Box>


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