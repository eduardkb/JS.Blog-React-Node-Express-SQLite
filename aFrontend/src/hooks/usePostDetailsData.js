import { useState, useEffect } from "react";
import postsData from "../dev/DB_PostDetrail.json"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostDetailsData(delayTime = 200) {
    const [postDetails, setPostDetails] = useState([]);
    const [requestStatusPostDetails, setRequestStatusPostDetails] = useState(REQUEST_STATUS.LOADING);
    const [errorPostDetails, setErrorPostDetails] = useState("");

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                // throw "Problem while reading server data";
                setRequestStatusPostDetails(REQUEST_STATUS.SUCCESS);
                setPostDetails(postsData);
            } catch (e) {
                setRequestStatusPostDetails(REQUEST_STATUS.FAILURE);
                setErrorPostDetails(e);
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