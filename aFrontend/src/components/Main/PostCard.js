import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Box";
import { classCss } from "../../mui_css/muiStyles";
import moment from "moment/moment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import { PostDataContext } from "../../contexts/PostsContext";
import CircularProgress from '@mui/material/CircularProgress';

function PostCard({ post, setPostSelected }) {
	const { fUpvotePost } = useContext(PostDataContext);
	const [upvotingInProgress, setUpvotingInProgress] = useState(false);

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
							<Typography key={tag.id} display="inline"
								variant="body2" sx={classCss.TagsMainPage}>
								#{tag.name}
							</Typography>
						)
					})}

				</Box>
			)
		}
	}

	function doneCallback(resData) {
		setUpvotingInProgress(false)
	}

	function onUpvoteClick(id) {
		setUpvotingInProgress(true)
		fUpvotePost(id, doneCallback)
	}

	return (
		<Card sx={classCss.cardPost}>
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

			<Typography variant="h6" >
				<p style={classCss.pCardProps}>
					Posted: {moment.utc(post.createdAt).fromNow()}
				</p>


				<Box display="flex" flexDirection="row" justifyContent="start" alignItems="center">
					<p style={classCss.pCardProps}>
						Upvotes:
						<i>{' '}{post.upvote}</i>
					</p>
					{upvotingInProgress
						? (
							<CircularProgress color="inherit" size={15}
								thickness={3} sx={{ ml: 2 }} />
						) : (
							<ThumbUpOutlined sx={[classCss.thumbUpButton, { fontSize: 20 }]}
								onClick={() => onUpvoteClick(post.id)} />
						)
					}
				</Box>
			</Typography>
		</Card >
	);
}

export default PostCard;