import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import FormControl from "@mui/material/FormControl";
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import SaveIcon from '@mui/icons-material/Save';
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
    const [saveMessage, setSaveMessage] = useState("")
    const [sevType, setSevType] = useState("success")

    // get user from session
    const { userLoggedIn } = useContext(SessionContext)
    const sUser = userLoggedIn.name;
    const iUserID = userLoggedIn.id;


    // state and function used when creating comment to give visual feedback to user
    const [updatingRec, setUpdatingRec] = useState(false);
    function doneCallback(sMsg, bSuccess) {
        setUpdatingRec(false);
        setSaveMessage(sMsg)
        if (bSuccess) {
            setSevType("success")
            setCommValue(sDefaultComm)
        }
        else {
            setSevType("error");
        }
        setOpen(true);
    }

    // functions for the snackbar
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    function TransitionRight(props) {
        return <Slide {...props} direction="right" />;
    }


    // on comment submit function
    function onCommSubmitClick(e, postID, userID, comm) {
        //e.preventDefault()
        setUpdatingRec(true);
        const jsonComment = {
            "comment": comm,
            "published": true,
            "postId": postID,
            "userId": userID
        }
        commentCreate(jsonComment, doneCallback)
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

                    {/* if updating, show Saving... disabled Button */}
                    {updatingRec
                        ? (
                            <LoadingButton
                                sx={{ width: "150px", marginTop: 1 }}
                                loading
                                variant="outlined"
                                loadingPosition="end"
                                endIcon={<SaveIcon />}
                            >
                                Saving...
                            </LoadingButton>
                        ) : (
                            <Button variant="contained" endIcon={<SendIcon />}
                                sx={{ width: "100px", marginTop: 1 }}
                                disabled={commValue.length < 10 || commValue === sDefaultComm}
                                onClick={(e) => { onCommSubmitClick(e, iPostID, iUserID, commValue) }}
                            >
                                Submit
                            </Button>
                        )}

                    {/* select if showing success or error message */}
                    <Snackbar open={open} autoHideDuration={6000}
                        onClose={handleClose} TransitionComponent={TransitionRight} >
                        <Alert onClose={handleClose} sx={{ width: '100%' }} severity={sevType} >
                            {saveMessage}
                        </Alert>
                    </Snackbar>
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