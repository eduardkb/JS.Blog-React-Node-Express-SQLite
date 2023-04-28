import {
    Box, Button, Checkbox, FormControl, FormControlLabel, Grid,
    Radio, RadioGroup, TextField, Typography, LinearProgress, Stack,
    Slide, Snackbar
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel'
import React, { useContext, useState } from "react";
import { classCss } from "../../mui_css/muiStyles";
import useCategoryData, { REQUEST_STATUS } from "../../hooks/useCategoryData";
import { SessionContext } from "../../contexts/SessionContext";
import { createPost } from "../../hooks/updatePost";

function PostForm() {
    // load categories
    const { dataCategory, errorCategory, requestStatusCategory } = useCategoryData();

    // get user from session context
    const { userLoggedIn } = useContext(SessionContext)

    // post data fields
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")
    const [body, setBody] = useState("")
    const [isPosted, setIsPosted] = useState(true)
    const [category, setCategory] = useState(0)
    const defaultTagValue = "Example: #Tag_1 #Tag_2"
    const [tag, setTag] = useState(defaultTagValue)
    const [user] = useState(userLoggedIn.name)

    //other state
    const [validate, setValidate] = useState(false)
    const [creatingPost, setCreatingPost] = useState(false)

    // functions for the snackbar
    const [snackMsg, setSnackMsg] = useState("");
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

    // function to display progress while updating
    function doneCallback(resData) {
        setCreatingPost(false)
        setSnackMsg(resData.message)
        setOpen(true)
        onCancelClick()
    }

    // save post
    function onSaveClick(e) {
        e.preventDefault()
        setValidate(true)
        // validate data: all text fields
        if (title === "" || title.length < 5
            || picture === "" || picture.length < 5
            || body === "" || body.length < 5) {
            setSnackMsg("Please fill out all fields with at least 5 characters.")
            setOpen(true)
            return
        }
        // validate data: category != 0
        if (category === 0) {
            setSnackMsg("Please select a category.")
            setOpen(true)
            return
        }
        // validate tags. if default value send blank
        let sTag = "";
        (tag === defaultTagValue) ? sTag = "" : sTag = tag

        // save post
        setCreatingPost(true)
        createPost(doneCallback, title, picture, body, isPosted, category, sTag, userLoggedIn.id)
    }
    function onCancelClick() {
        setTitle("")
        setPicture("")
        setBody("")
        setCategory(0)
        setIsPosted(true)
        setTag(defaultTagValue)
        setValidate(false)
    }

    function fDisplayMessage(sMessage) {
        return (
            <Box sx={[classCss.centerBox, { margin: '100px 0px' }]} >
                <Alert variant="outlined" severity="error">
                    {sMessage}
                </Alert>
            </Box>
        )
    }

    // display feedback wile loading category data
    if (requestStatusCategory === REQUEST_STATUS.LOADING) {
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
    // verify if category data has loaded correctly
    if (requestStatusCategory === REQUEST_STATUS.FAILURE) {
        fDisplayMessage(`Error while getting categories. Message: ${errorCategory}`)
    }
    return (
        <>
            <Grid container spacing={1} style={{ border: "solid", borderWidth: "1px", margin: 2, padding: 10 }}
                display="flex" flexDirection="column" >
                <Grid item sx={{ width: "80%" }}>
                    <TextField
                        sx={{ width: "100%" }}
                        type="text"
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value); setOpen(false) }}
                        error={(title === "" || title.length < 5) && validate}
                        helperText={title === "" && validate ? 'This field cannot be empty.' : ' '}
                    />
                </Grid>
                <Grid item sx={{ width: "80%" }}>
                    <TextField
                        sx={{ width: "100%" }}
                        type="text"
                        label="Picture"
                        variant="outlined"
                        value={picture}
                        onChange={(e) => { setPicture(e.target.value); setOpen(false) }}
                        error={(picture === "" || picture.length < 5) && validate}
                        helperText={picture === "" && validate ? 'This field cannot be empty.' : ' '}
                    />
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <TextField
                        sx={{ width: "100%" }}
                        type="text"
                        label="Post Body"
                        variant="outlined"
                        multiline
                        rows={6}
                        value={body}
                        onChange={(e) => { setBody(e.target.value); setOpen(false) }}
                        error={(body === "" || body.length < 5) && validate}
                        helperText={body === "" && validate ? 'This field cannot be empty.' : ' '}
                    />
                </Grid>
                <Grid item >
                    <Typography variant="body1" sx={{ color: "text.primary", }}>
                        Posted: <Checkbox checked={isPosted} sx={{ color: "primary.main" }}
                            onClick={() => setIsPosted(!isPosted)} />
                    </Typography>
                </Grid>
                <Grid item sx={{ width: "100%" }}>
                    <FormControl sx={{ width: "100%" }}>
                        <RadioGroup sx={{ width: "100%" }}
                            name="controlled-radio-Category"
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                        >
                            <Box sx={classCss.postAddCatBox}>
                                Category:
                                <Box >
                                    {
                                        // display categories from database
                                        dataCategory.map((e) => {
                                            return (
                                                <FormControlLabel key={e.id} value={e.id}
                                                    control={<Radio sx={classCss.radioUnchecked} />}
                                                    label={e.name}
                                                />
                                            )

                                        })
                                    }

                                </Box>
                            </Box>
                        </RadioGroup>
                    </FormControl>

                </Grid>
                <Grid item>
                    <TextField
                        sx={{ width: "80%", maxWidth: "400px" }}
                        type="text"
                        label="Tags"
                        variant="outlined"
                        multiline
                        value={tag}
                        onClick={() => tag === defaultTagValue && setTag("")}
                        onBlur={() => tag === "" && setTag(defaultTagValue)}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        sx={{ width: "80%", maxWidth: "400px" }}
                        type="text"
                        label="User Posting"
                        variant="outlined"
                        disabled
                        value={user}
                    />
                </Grid>

                <Grid item >

                    {/* if creating post, show Saving... and disabled Button */}
                    {creatingPost
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
                                sx={{ width: "100px", mr: 1 }}
                                //disabled={commValue.length < 10 || commValue === sDefaultComm}
                                onClick={(e) => { onSaveClick(e) }}
                            >
                                Save
                            </Button>
                        )
                    }

                    <Button variant="contained" color="primary" endIcon={<CancelIcon />}
                        onClick={() => onCancelClick()}>
                        cancel
                    </Button>
                </Grid>
            </Grid >
            <Snackbar open={open} autoHideDuration={6000}
                onClose={handleClose} TransitionComponent={TransitionRight} >
                <Alert onClose={handleClose} sx={{ width: '100%' }} severity="error" >
                    {snackMsg}
                </Alert>
            </Snackbar>
        </>

    )
}
export default PostForm;
