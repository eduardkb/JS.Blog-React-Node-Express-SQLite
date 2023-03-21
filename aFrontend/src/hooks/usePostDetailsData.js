import { useState, useEffect } from "react";
import postsData from "../dev/DB_PostDetrail.json"
import axios from "axios";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostDetailsData(delayTime = 200) {
    const [postDetails, setPostDetails] = useState([]);
    const [requestStatusPostDetails, setRequestStatusPostDetails] = useState(REQUEST_STATUS.LOADING);
    const [errorPostDetails, setErrorPostDetails] = useState("");
    const restUrl = "https://dev.eduardkb.website/api/post/joincomment/2"

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                //const result = await axios.get(restUrl);
                // throw "Problem while reading server data";
                setRequestStatusPostDetails(REQUEST_STATUS.SUCCESS);
                setPostDetails(postsData);
            } catch (e) {
                setRequestStatusPostDetails(REQUEST_STATUS.FAILURE);
                console.log("err:", e)
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