import React from "react";
import Header from "./Header";
import PostsPannel from "./PostsPannel";
import Footer from "./Footer";
import { PostsProvider } from "../contexts/PostsContext";
import { REQUEST_STATUS } from "../hooks/usePostData";
import { Container, LinearProgress, Stack } from "@mui/material";
import usePostData from "../hooks/usePostData";
import useCategoryData from "../hooks/useCategoryData";

function MainApp() {
	const { dataPost, errorPost, requestStatusPost } = usePostData();
	const { dataCategory, errorCategory, requestStatusCategory } = useCategoryData();

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
				<div>
					Error: {errorPost ? errorPost : errorCategory}
				</div>
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

		<PostsProvider startingPosts={dataPost}>
			<Header data={dataCategory} />
			<PostsPannel />
			<Footer />
		</PostsProvider>

	);
}

export default MainApp;
