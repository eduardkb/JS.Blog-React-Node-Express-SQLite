import { useState, useEffect } from "react";
import postsData from "../dev/DB_PostAndTags.json"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostData(delayTime = 3000) {
    const [dataPost, setdataPost] = useState([]);
    const [requestStatusPost, setrequestStatusPost] = useState(REQUEST_STATUS.LOADING);
    const [errorPost, seterrorPost] = useState("");

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                // throw "Problem while reading server data";
                setrequestStatusPost(REQUEST_STATUS.SUCCESS);
                setdataPost(postsData);
            } catch (e) {
                setrequestStatusPost(REQUEST_STATUS.FAILURE);
                seterrorPost(e);
            }
        }
        delayFunc();
        // eslint-disable-next-line 
    }, []);



    return {
        dataPost,
        requestStatusPost,
        errorPost,
    };
}

export default usePostData;