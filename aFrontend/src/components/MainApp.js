import React from "react";
import Header from "./Header";
import MainPannel from "./MainPannel";
import Footer from "./Footer";
import { PostsProvider } from "../contexts/PostsContext";
import usePostData from "../hooks/usePostData";
import { REQUEST_STATUS } from "../hooks/usePostData";
import { Container, LinearProgress, Stack } from "@mui/material";

function MainApp() {
	const { dataPost, errorPost, requestStatusPost } = usePostData();

	// if loading display progress
	// if error display message
	if (requestStatusPost === REQUEST_STATUS.LOADING || requestStatusPost === REQUEST_STATUS.FAILURE) {
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
				<div>
					Error: {errorPost}
				</div>
			)
		}
		return (
			<>
				<Header />
				<Container sx={{ maxWidth: "lg", padding: "20px" }}>
					{requestStatusPost === REQUEST_STATUS.LOADING ? <Loading /> : <Error />}
				</Container>
				<Footer />
			</>
		)
	}
	return (
		<PostsProvider startingPosts={dataPost}>
			<Header />
			<MainPannel />
			<Footer />
		</PostsProvider>
	);
}

export default MainApp;
