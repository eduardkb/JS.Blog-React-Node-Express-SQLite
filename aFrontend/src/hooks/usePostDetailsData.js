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
    const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/post/joincomment/${postID}`

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
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
        delayFunc();
        // eslint-disable-next-line 
    }, []);



    return {
        postDetails,
        requestStatusPostDetails,
        errorPostDetails,
    };
}

export default usePostDetailsData;