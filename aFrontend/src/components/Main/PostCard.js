import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Box";
import { classCss } from "../../mui_css/muiStyles";
import moment from "moment/moment";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import { PostDataContext } from "../../contexts/PostsContext";
import CircularProgress from '@mui/material/CircularProgress';

function PostCard({ post, setPostSelected }) {
	const { fUpvotePost } = useContext(PostDataContext);
	const [upvotingInProgress, setUpvotingInProgress] = useState(false);
	const [upvoteResult, setUpvoteResult] = useState({});

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
		setUpvoteResult(resData)
		if (!resData.success) {
			setOpen(true);
		}
	}

	function onUpvoteClick(id) {
		setUpvotingInProgress(true)
		fUpvotePost(id, doneCallback)
	}

	// functions for the snackbar
	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});
	const [open, setOpen] = React.useState(false);
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	function TransitionRight(props) {
		return <Slide {...props} direction="right" />;
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
				{/* display message on error */}
				<Snackbar open={open} autoHideDuration={6000}
					onClose={handleClose} TransitionComponent={TransitionRight} >
					<Alert onClose={handleClose} sx={{ width: '100%' }} severity="error" >
						{upvoteResult.message}
					</Alert>
				</Snackbar>
			</Typography>
		</Card >
	);
}

export default PostCard;