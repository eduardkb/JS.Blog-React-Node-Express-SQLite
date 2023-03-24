import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";

function RenderComments({ comments }) {
    const filteredComments = comments
        .filter((comment) => {
            return (comment.published === true)
        })
        .sort((a, b) => {
            // sorts by date 
            return new Date(b.createdAt) - new Date(a.createdAt);
        })

    if (filteredComments.length > 0) {
        return (
            <>
                <Divider sx={{ mt: 3, borderBottomWidth: 5 }} />
                <Typography variant="h5" display="block">
                    Comments:
                </Typography>
                <Box sx={{ ml: 5 }}>
                    {filteredComments.map((comment) => {
                        return (
                            <div key={comment.id}>
                                <Typography variant="body2" display="block">
                                    User: {comment.User.name}
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
            </>
        )
    }
}

function RenderCreateComment() {
    const sDefaultComm = "Type your comment in here (minimum 10 letters)."
    const [commValue, setCommValue] = useState(sDefaultComm)
    return (
        <>
            <Typography variant="h5" display="block">
                Write your comment:
            </Typography>
            <Box ml={5}>
                <Typography variant="body2">
                    User:
                </Typography>
                <TextField size="small" disabled value="guest"></TextField>
                <Typography variant="body2" display="block">
                    Comment:
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                    <TextField variant="outlined"
                        sx={{ width: "100%" }}
                        multiline
                        rows={2}
                        value={commValue}
                        onClick={() => commValue === sDefaultComm && setCommValue("")}
                        onBlur={() => commValue === "" && setCommValue(sDefaultComm)}
                        onChange={(e) => setCommValue(e.target.value)}
                    />
                    <Button variant="outlined"
                        sx={{
                            width: "100px", marginTop: 1,
                            backgroundColor: "primary.main", color: "text.main"
                        }}
                        disabled={commValue.length < 10 || commValue === sDefaultComm}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}

export default function PostDetailsComments(props) {
    const comments = props.comm;
    return (
        <>
            <Box sx={{ m: 2, p: 2, bgcolor: "white", outlineStyle: "dashed" }}>
                <RenderCreateComment />
                <RenderComments comments={comments} />
            </Box>
        </>
    )


}