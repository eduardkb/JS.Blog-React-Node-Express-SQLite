import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { classCss } from "../../mui_css/muiStyles";

function PostForm() {
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")
    const [body, setBody] = useState("")
    const defaultTagValue = "Example: #Tag_1 #Tag_2"
    const [tag, setTag] = useState(defaultTagValue)
    const [isPosted, setIsPosted] = useState(true)

    function onSaveClick() {
        alert(`test dta: ${title}|${picture}|${body}|${isPosted}|${tag}|`)
    }
    function onCancelClick() {
        setTitle("")
        setPicture("")
        setBody("")
        setIsPosted(true)
        setTag(defaultTagValue)
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
                <Typography variant="body1" >
                    Posted: <Checkbox checked={isPosted} onClick={() => setIsPosted(!isPosted)} />
                </Typography>
            </Grid>
            <Grid item sx={{ width: "100%" }} >

                <FormControl>
                    <RadioGroup
                        name="radio-Category"
                        defaultValue="Information Technology"
                    >
                        <Box sx={classCss.postAddCatBox}>
                            Category:
                            <Box display="flex" flexDirection="row">
                                <FormControlLabel value="Information Technology"
                                    control={<Radio sx={classCss.radioUnchecked} />} label="Information Technology"
                                />
                                <FormControlLabel value="Programming"
                                    control={<Radio sx={classCss.radioUnchecked} />} label="Programming"
                                />
                                <FormControlLabel value="Cloud"
                                    control={<Radio sx={classCss.radioUnchecked} />} label="Cloud"
                                />
                                <FormControlLabel value="Gaming Content"
                                    control={<Radio sx={classCss.radioUnchecked} />} label="Gaming Content"
                                />
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
                    value="John"
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
