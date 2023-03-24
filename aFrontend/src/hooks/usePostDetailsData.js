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

    function postCreate(newComment) {
        const postData = postDetails
        async function writeComment() {
            try {
                // save new commenmt
                const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/comment`
                await axios.post(restUrl, newComment)
                // get comments with userID

                // const newComm = { "id": 10, "comment": "ED TEST", "published": true, "createdAt": "2023-03-24T16:10:48.938Z", "updatedAt": "2023-03-24T16:10:48.938Z", "postId": 2, "userId": 1 }
                // console.log("d1", newComm)
                // postData.Comments = newComm
                // console.log("d2", postData)
                // setPostDetails(postData)
            }
            catch (error) {
                console.log("Error while adding comment. Error:", error.message)
                setPostDetails(postData)
            }

        }
        writeComment();
    }

    return {
        postDetails,
        requestStatusPostDetails,
        errorPostDetails,
        postCreate,
    };
}

export default usePostDetailsData;