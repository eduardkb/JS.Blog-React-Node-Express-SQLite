import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function PostForm() {
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")
    const [body, setBody] = useState("")
    const [isPosted, setIsPosted] = useState(true)

    function onSaveClick() {
        alert(`test dta: ${title}|${picture}|${body}|${isPosted}|`)
    }
    function onCancelClick() {
        setTitle("")
        setPicture("")
        setBody("")
        setIsPosted(true)
    }

    return (
        <Grid container spacing={1} display="flex" flexDirection="column" alignContent="center" justifyContent="center" >
            <Grid item >
                <TextField
                    style={{ width: "300px" }}
                    type="text"
                    label="Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            <Grid item >
                <TextField
                    style={{ width: "300px" }}
                    type="text"
                    label="Picture"
                    variant="outlined"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                />
            </Grid>
            <Grid item >
                <TextField
                    style={{ width: "600px" }}
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
