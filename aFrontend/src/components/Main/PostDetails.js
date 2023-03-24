import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { PostDataContext } from "../../contexts/PostsContext";
import usePostDetailsData from "../../hooks/usePostDetailsData";
import { REQUEST_STATUS } from "../../hooks/usePostDetailsData"
import { classCss } from "../../mui_css/muiStyles";
import PostDetailsComments from "./PostDetailsComments";

export default function PostDetails(props) {
    const postSelected = props.postSelected;
    const setPostSelected = props.setPostSelected;
    const { fResetFilters } = useContext(PostDataContext)
    const { postDetails, requestStatusPostDetails,
        errorPostDetails, postCreate } = usePostDetailsData(postSelected);

    function handleBtnBackToMainClick(e, id) {
        e.preventDefault();
        fResetFilters();
        setPostSelected(id);
    }

    function RenderTags({ tags }) {
        if (tags.length > 0) {
            return (
                <Box m={1} display="inline" sx={{
                    float: "right"
                }}>
                    <Typography variant="subtitle2" display="inline"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: '5px'
                        }} p={"5px"}>
                        {tags.map((tag) => {
                            return (
                                <Typography key={tag.id} display="inline" variant="body2" ml={1} sx={{ backgroundColor: "white", borderRadius: '5px' }}>
                                    #{tag.name}
                                </Typography>
                            )
                        })}
                    </Typography>
                </Box>
            )
        }
    }

    if (requestStatusPostDetails === REQUEST_STATUS.LOADING) {
        return (
            <Grid container sx={classCss.centerBox}>
                <Box sx={{ width: 350, marginRight: 0.5, my: 5 }}>
                    <Box sx={{ width: 350, marginRight: 0.5, my: 5 }}>
                        <Typography variant="h6">
                            Loading...
                        </Typography>
                        <Skeleton variant="rectangular" width={350} height={118} />
                    </Box>
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Box>
            </Grid>
        )
    }

    if (requestStatusPostDetails === REQUEST_STATUS.FAILURE) {
        return (
            <Box sx={[classCss.centerBox, { margin: '100px 0px' }]} >
                <Alert variant="outlined" severity="error">
                    Post requested could not be found. Message: "{errorPostDetails}"
                </Alert>
            </Box>
        )
    }

    return (
        <Box sx={classCss.centerBox}>
            < Container maxWidth="lg" sx={{ backgroundColor: "tertiary.main", m: "30px 0px", p: "10px" }}>
                <Box m={1} display="inline" sx={{
                    float: "left"
                }}>
                    <Typography variant="subtitle2" display="inline" sx={{ backgroundColor: "white", borderRadius: '5px' }} p={"5px"}>
                        {postDetails.Category.name}
                    </Typography>
                </Box>
                <RenderTags tags={postDetails.Tags} />

                <Box sx={classCss.centerBox} mt={6}>
                    <Typography variant="h3" sx={{ textDecoration: "underline overline" }}>
                        {postDetails.title}
                    </Typography>
                </Box>
                <Box sx={classCss.centerBox}>
                    <Typography variant="subtitle2" mb={2}>
                        Post Date: {new Date(postDetails.createdAt).toLocaleDateString('pt-BR')}
                    </Typography>
                    <Typography variant="subtitle2" mb={2} ml={2}>
                        By: {postDetails.User.name}
                    </Typography>
                </Box>
                <Grid container sx={classCss.centerBox}>
                    <Box
                        component="img"
                        sx={classCss.postDetailsPicture}
                        alt="blog picture"
                        src="/PicturePlaceholder.jpg"
                        maxWidth="600px"
                    />
                </Grid>

                <p>{postDetails.body}</p>
                <PostDetailsComments comments={postDetails.Comments}
                    postCreate={postCreate} postSelected={postSelected} />
                <Button variant="contained" onClick={e => handleBtnBackToMainClick(e, 0)}>Back to Main Page</Button>
            </Container >
        </Box>
    )
}