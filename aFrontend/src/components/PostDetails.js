import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { PostDataContext } from "../contexts/PostsContext";

export default function PostDetails(props) {
    const postSelected = props.postSelected;
    const setPostSelected = props.setPostSelected;
    const { fResetFilters } = useContext(PostDataContext)

    function handleBtnBackToMainClick(e, id) {
        e.preventDefault();
        fResetFilters();
        setPostSelected(id);
    }

    return (
        < Container maxWidth="xl" sx={{ margin: "30px 0px" }}>
            <Button variant="contained" onClick={e => handleBtnBackToMainClick(e, 0)}>Back to Main Page</Button>
            <h1>post details test page</h1>
            <h6>post #: {postSelected}</h6>
            <Button variant="contained" onClick={e => handleBtnBackToMainClick(e, 0)}>Back to Main Page</Button>
        </Container>
    )
}