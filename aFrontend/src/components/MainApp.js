import React from "react";
import Header from "./Header";
import MainPannel from "./MainPannel";
import Footer from "./Footer";
import { PostsProvider } from "../contexts/PostsContext";
import useGetPosts, { REQUEST_STATUS } from "../hooks/useGetPosts";
import { Container, LinearProgress, Stack } from "@mui/material";

function MainApp() {
	const { data, requestStatus } = useGetPosts();
	if (requestStatus === REQUEST_STATUS.LOADING) {
		return (
			<>
				<Header />
				<Container sx={{ maxWidth: "lg", padding: "20px" }}>
					<h3 style={{ textAlign: "center" }}>Loading data...</h3>
					<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
						<LinearProgress color="primary" />
						<LinearProgress color="primary" />
						<LinearProgress color="primary" />
					</Stack>
				</Container>
				<Footer />
			</>
		)
	}
	return (
		<PostsProvider startingPosts={data}>
			<Header />
			<MainPannel />
			<Footer />
		</PostsProvider>
	);
}

export default MainApp;
