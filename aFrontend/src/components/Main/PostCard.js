import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Box";
import { classCss } from "../../mui_css/muiStyles";
import moment from "moment/moment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function PostCard({ post, setPostSelected }) {
	function handleBtnPostTitleClick(e, id) {
		e.preventDefault();
		setPostSelected(id)
	}

	function RenderTags({ tags }) {
		if (tags.length > 0) {
			return (
				<Box>
					<Typography display="inline" variant="body2" m={0}>
						Tags:
					</Typography>
					{tags.map((tag) => {
						return (
							<Typography key={tag.id} display="inline" variant="body2" ml={1}>
								#{tag.name}
							</Typography>
						)
					})}

				</Box>
			)
		}
	}

	return (
		<Card sx={classCss.cardPost}>
			{/* <Paper style={classCss.paperPost}><img src='/PicturePlaceholder.jpg' alt="logo" /></Paper> */}

			<Box
				component="img"
				sx={classCss.postsPictureBox}
				alt="blog picture"
				src="/PicturePlaceholder.jpg"
				onClick={e => handleBtnPostTitleClick(e, post.id)}
			/>

			<RenderTags tags={post.Tags} />

			<Box display="flex" alignItems="center" justifyContent="center">
				<Button variant="text" onClick={e => handleBtnPostTitleClick(e, post.id)}>
					<Typography sx={classCss.cardTitle} variant="h6">
						{post.title}
					</Typography>
				</Button>
			</Box>

			<Typography variant="h6">
				<p style={classCss.pCardProps}>
					Posted: {moment.utc(post.createdAt).fromNow()}
				</p>
				<p style={classCss.pCardProps} >Upvotes: {post.upvote}</p>
			</Typography>
		</Card>
	);
}

export default PostCard;