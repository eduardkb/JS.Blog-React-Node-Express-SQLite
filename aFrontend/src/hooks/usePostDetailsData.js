import { useState, useEffect } from "react";
// import postsData from "../dev/DB_PostDetrail.json"
import axios from "axios";
import GLOBAL_SETTINGS from "../config";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostDetailsData(postID, delayTime = 300) {
    const [postDetails, setPostDetails] = useState([]);
    const [requestStatusPostDetails, setRequestStatusPostDetails] = useState(REQUEST_STATUS.LOADING);
    const [errorPostDetails, setErrorPostDetails] = useState("");
    const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/post/loadpostdetails/${postID}`

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function getPostDetails() {
            try {
                await delay(delayTime);
                const result = await axios.get(restUrl);
                // throw "Problem while reading server data";
                setRequestStatusPostDetails(REQUEST_STATUS.SUCCESS);
                setPostDetails(result.data);
            } catch (e) {
                setRequestStatusPostDetails(REQUEST_STATUS.FAILURE);
                setErrorPostDetails(e.message);
            }
        }
        getPostDetails();
        // eslint-disable-next-line 
    }, []);

    function commentCreate(newComment, doneCallback) {
        const postData = postDetails
        let errMsg = "";
        async function writeComment() {
            let bDbOk = false;
            try {
                // save new commenmt                
                const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/comment`
                await axios.post(restUrl, newComment)
                bDbOk = true;

            }
            catch (error) {
                errMsg = `Error while adding comment.`
                setPostDetails(postData)
                bDbOk = false;
            }
            if (bDbOk) {
                try {
                    // get comments with userID
                    const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/post/loadpostdetails/${newComment.postId}`
                    const postsWithComments = await axios.get(restUrl)

                    // set new comments on postDetails
                    setPostDetails(postsWithComments.data)
                    bDbOk = true;
                }
                catch (error) {
                    errMsg = `Error while loading new comment. Try refreshing the page..`
                    setPostDetails(postData)
                    bDbOk = false;
                }
            }
            if (errMsg === "") {
                errMsg = "Added a comment successfully."
            }
            if (doneCallback) {
                doneCallback(errMsg, bDbOk);
            }
        }
        writeComment();
    }

    return {
        postDetails,
        requestStatusPostDetails,
        errorPostDetails,
        commentCreate,
    };
}

export default usePostDetailsData;