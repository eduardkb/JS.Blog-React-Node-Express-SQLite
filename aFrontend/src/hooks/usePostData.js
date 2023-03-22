import { useState, useEffect } from "react";
// import postsData from "../dev/DB_PostAndTags.json"
import axios from "axios";
import GLOBAL_SETTINGS from "../config";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostData(delayTime = 300) {
    const [dataPost, setDataPost] = useState([]);
    const [requestStatusPost, setRequestStatusPost] = useState(REQUEST_STATUS.LOADING);
    const [errorPost, setErrorPost] = useState("");
    const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/post/jointag`

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                const result = await axios.get(restUrl);
                // throw "Problem while reading server data - Posts";
                setRequestStatusPost(REQUEST_STATUS.SUCCESS);
                setDataPost(result.data);
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