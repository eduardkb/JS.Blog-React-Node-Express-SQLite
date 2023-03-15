import { useState, useEffect } from "react";
import postsData from "../dev/DB_PostAndTags.json"

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostData(delayTime = 1000) {
    const [dataPost, setDataPost] = useState([]);
    const [requestStatusPost, setRequestStatusPost] = useState(REQUEST_STATUS.LOADING);
    const [errorPost, setErrorPost] = useState("");

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                // throw "Problem while reading server data - Posts";
                setRequestStatusPost(REQUEST_STATUS.SUCCESS);
                setDataPost(postsData);
            } catch (e) {
                setRequestStatusPost(REQUEST_STATUS.FAILURE);
                setErrorPost(e);
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