import React from "react";
import { useState } from "react";
import Header from "./Header/Header";
import PostsPannel from "./Main/PostsPannel";
import Footer from "./Footer/Footer";
import { PostsProvider } from "../contexts/PostsContext";
import { REQUEST_STATUS } from "../hooks/usePostData";
import { Container, LinearProgress, Stack, Box, Alert } from "@mui/material";
import usePostData from "../hooks/usePostData";
import useCategoryData from "../hooks/useCategoryData";
import PostDetails from "./Main/PostDetails";
import { classCss } from "../mui_css/muiStyles";

function MainApp() {
	const { dataPost, errorPost, requestStatusPost } = usePostData();
	const { dataCategory, errorCategory, requestStatusCategory } = useCategoryData();
	const [postSelected, setPostSelected] = useState(0);

	const loadStatus = requestStatusPost === REQUEST_STATUS.LOADING || requestStatusCategory === REQUEST_STATUS.LOADING
	const errorStatus = errorPost !== "" || errorCategory !== ""

	// if loading display progress
	// if error display message
	if (loadStatus || errorStatus) {

		function Loading() {
			return (
				<>
					<h3 style={{ textAlign: "center" }}>Loading data...</h3>
					<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
						<LinearProgress color="primary" />
						<LinearProgress color="primary" />
						<LinearProgress color="primary" />
					</Stack>
				</>
			)
		}
		function Error() {
			return (
				<Box sx={[classCss.centerBox, { margin: '100px 0px' }]} >
					<Alert variant="outlined" severity="error">
						Error while getting posts. Message: "{errorPost ? errorPost : errorCategory}"
					</Alert>
				</Box>
			)
		}

		return (

			<>
				<Header />
				<Container sx={{ maxWidth: "lg", padding: "20px" }}>
					{loadStatus ? <Loading /> : <Error />}
				</Container>
				<Footer />
			</>
		)
	}
	return (

		< PostsProvider startingPosts={dataPost} >
			<Header data={dataCategory} setPostSelected={setPostSelected} />
			{postSelected === 0 ? <PostsPannel setPostSelected={setPostSelected} /> : <PostDetails postSelected={postSelected} setPostSelected={setPostSelected} />}
			<Footer />
		</PostsProvider >

	);
}

export default MainApp;
