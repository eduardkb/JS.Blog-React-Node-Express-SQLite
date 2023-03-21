import React from "react";
import Box from "@mui/material/Box";

export default function PostDetailsComments(props) {
    const comments = props.comm;
    return (
        <Box sx={{ p: 5 }}>
            Comments: {comments[0].comment}
        </Box>
    )
}