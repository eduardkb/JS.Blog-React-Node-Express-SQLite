import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

export default function PostDetailsComments(props) {
    const comments = props.comm;
    const filteredComments = comments.filter((comment) => {
        return (comment.published === true)
    })

    if (filteredComments.length > 0) {
        return (
            <Box sx={{ m: 2, p: 2, bgcolor: "white", outlineStyle: "dashed" }}>
                <Typography variant="h5" display="block">
                    Comments:
                </Typography>
                <Box sx={{ ml: 5 }}>
                    {filteredComments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <Typography variant="body2" display="block">
                                    User: {comment.userId}
                                </Typography>
                                <Typography variant="h6" display="block">
                                    Comment: {comment.comment}
                                </Typography>
                                <Typography variant="body2" display="block">
                                    Date: {new Date(comment.createdAt).toLocaleDateString('pt-BR')}
                                </Typography>
                                <Divider sx={{ m: 2 }} />
                            </div>
                        )
                    })}
                </Box>
            </Box >
        )
    }
}