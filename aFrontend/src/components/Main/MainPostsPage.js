import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import PostsPannel from "../Main/PostsPannel";
import Footer from "../Footer/Footer";
import { PostsProvider } from "../../contexts/PostsContext";
import { REQUEST_STATUS } from "../../hooks/usePostData";
import { Container, LinearProgress, Stack, Box, Alert } from "@mui/material";
import usePostData from "../../hooks/usePostData";
import useCategoryData from "../../hooks/useCategoryData";
import PostDetails from "../Main/PostDetails";
import { classCss } from "../../mui_css/muiStyles";

function MainPostsPage() {
    const { dataPost, errorPost, requestStatusPost, fUpvotePost } = usePostData();
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
            let sMsg = ""
            if (errorPost.message) {
                sMsg = errorPost.message
            }
            else {
                errorPost ? sMsg = errorPost : sMsg = errorCategory
            }

            return (
                <Box sx={[classCss.centerBox, { margin: '100px 0px' }]} >

                    {/* <Alert variant="Outlined" severity="error">
                        Error
                    </Alert> */}
                    <Alert variant="outlined" severity="error">
                        Error while getting posts. Message: {sMsg}
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

        < PostsProvider startingPosts={dataPost} fUpvotePost={fUpvotePost}>
            <Header data={dataCategory}
                setPostSelected={setPostSelected}
                postSelected={postSelected}
            />
            {postSelected === 0
                ? <PostsPannel setPostSelected={setPostSelected} />
                : <PostDetails
                    postSelected={postSelected}
                    setPostSelected={setPostSelected} />}
            <Footer />
        </PostsProvider >

    );
}

export default MainPostsPage;
