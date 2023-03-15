import React from "react";
import Header from "./Header";
import MainPannel from "./MainPannel";
import Footer from "./Footer";
import postsData from "../dev/DB_PostAndTags.json"
import { PostsProvider } from "../contexts/PostsContext";


function MainApp({ children }) {
	return (
		<PostsProvider startingPosts={postsData}>
			<Header />
			<MainPannel />
			<Footer />
		</PostsProvider>
	);
}

export default MainApp;
