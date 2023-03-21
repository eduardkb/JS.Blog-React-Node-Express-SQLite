import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { PostDataContext } from "../contexts/PostsContext";
import usePostDetailsData from "../hooks/usePostDetailsData";
import { REQUEST_STATUS } from "../hooks/usePostDetailsData"
import { classCss } from "../mui_css/muiStyles";

export default function PostDetails(props) {
    const postSelected = props.postSelected;
    const setPostSelected = props.setPostSelected;
    const { fResetFilters } = useContext(PostDataContext)
    const { postDetails, requestStatusPostDetails, errorPostDetails } = usePostDetailsData();

    function handleBtnBackToMainClick(e, id) {
        e.preventDefault();
        fResetFilters();
        setPostSelected(id);
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
            <Box sx={classCss.centerBox} margin='100px 0px'>
                <Alert variant="outlined" severity="error">
                    Post requested could not be found. Message: "{errorPostDetails}"
                </Alert>
            </Box>
        )
    }

    return (
        < Container maxWidth="xl" sx={{ margin: "30px 0px" }}>
            {/* <Button variant="contained" onClick={e => handleBtnBackToMainClick(e, 0)}>Back to Main Page</Button> */}
            <h1>post details test page</h1>
            <h6>post #: {postSelected}</h6>

            <p>Details: {postDetails.title}</p>
            <p>Stat: {requestStatusPostDetails}</p>
            <p>Error: {errorPostDetails}</p>
            <Button variant="contained" onClick={e => handleBtnBackToMainClick(e, 0)}>Back to Main Page</Button>
        </Container>
    )
}