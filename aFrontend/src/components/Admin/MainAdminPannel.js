import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import PostForm from "./PostForm";
import { Box } from "@mui/material";

function MainAdminPannel() {
    return (
        <React.Fragment>
            <Header />
            <Box m={2}>
                Add New Post
                <PostForm />
            </Box>
            <Footer />
        </React.Fragment >
    )
}

export default MainAdminPannel;