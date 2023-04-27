import {
    Box, Button, Checkbox, FormControl, FormControlLabel, Grid,
    Radio, RadioGroup, TextField, Typography, LinearProgress, Stack,
    Alert
} from "@mui/material";
import React, { useContext, useState } from "react";
import { classCss } from "../../mui_css/muiStyles";
import useCategoryData, { REQUEST_STATUS } from "../../hooks/useCategoryData";
import { SessionContext } from "../../contexts/SessionContext";

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


    function onSaveClick() {
        // validate data: category != 0
        alert(`test dta: ${title}|${picture}|${body}|${isPosted}|${tag}|`)
    }
    function onCancelClick() {
        setTitle("")
        setPicture("")
        setBody("")
        setCategory(0)
        setIsPosted(true)
        setTag(defaultTagValue)
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
        <Box sx={[classCss.centerBox, { margin: '100px 0px' }]} >
            <Alert variant="outlined" severity="error">
                Error while getting categories. Message: {errorCategory}
            </Alert>
        </Box>
    }
    return (

        <Grid container spacing={1} style={{ border: "solid", borderWidth: "1px", margin: 2, padding: 10 }}
            display="flex" flexDirection="column" >
            <Grid item sx={{ width: "80%" }}>
                <TextField
                    sx={{ width: "100%" }}
                    type="text"
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            <Grid item sx={{ width: "80%" }}>
                <TextField
                    sx={{ width: "100%" }}
                    type="text"
                    label="Picture"
                    variant="outlined"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
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
                    onChange={(e) => setBody(e.target.value)}
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
                // onChange={(e) => setBody(e.target.value)}
                />
            </Grid>

            <Grid item >
                <Button variant="contained" color="primary"
                    onClick={() => onCancelClick()}>
                    cancel
                </Button>
                <Button sx={{ ml: 1 }} variant="contained" color="primary"
                    onClick={() => onSaveClick()}>
                    save
                </Button>
            </Grid>
        </Grid >
    )
}
export default PostForm;
