import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import FormControl from "@mui/material/FormControl";
import { Button, TextField } from "@mui/material";
import { classCss } from "../../mui_css/muiStyles";
import { SessionContext } from "../../contexts/SessionContext"

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

function RenderCreateComment({ commentCreate, postSelected }) {
    const iPostID = postSelected
    const sDefaultComm = "Type your comment in here (minimum 10 letters)."
    const [commValue, setCommValue] = useState(sDefaultComm)

    // get user from session
    const { userLoggedIn } = useContext(SessionContext)
    const sUser = userLoggedIn.name;
    const iUserID = userLoggedIn.id;

    function onCommSubmitClick(e, postID, userID, comm) {
        //e.preventDefault()
        const jsonComment = {
            "comment": comm,
            "published": true,
            "postId": postID,
            "userId": userID
        }
        commentCreate(jsonComment)
    }

    return (
        <>
            <Typography variant="h5" display="block">
                Write your comment:
            </Typography>
            <Box ml={5}>
                <Typography variant="body2">
                    User:
                </Typography>
                <TextField size="small" disabled value={sUser}></TextField>
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
                    <Button variant="contained"
                        sx={{ width: "100px", marginTop: 1 }}
                        disabled={commValue.length < 10 || commValue === sDefaultComm}
                        onClick={(e) => { onCommSubmitClick(e, iPostID, iUserID, commValue) }}
                    >
                        Submit
                    </Button>
                </FormControl>
            </Box>
        </>
    )
}

export default function PostDetailsComments({ comments, commentCreate, postSelected }) {
    return (
        <>
            <Box sx={classCss.postComments}>
                <RenderCreateComment commentCreate={commentCreate} postSelected={postSelected} />
                <RenderComments comments={comments} />
            </Box>
        </>
    )


}