import { useState, useEffect } from "react";
import axios from "axios";
import GLOBAL_SETTINGS from "../config";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function usePostData(delayTime = 0) {
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

    function fUpvotePost(postId, doneCallback) {
        // upvote
        async function upvote() {
            try {

                const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/post/upvotePost/${postId}`
                const resAxios = await axios.put(restUrl);
                const resData = { success: true, message: "Upvoted Successfully.", axiosRes: resAxios }

                //update live array dataPost
                console.log("new data: ", resAxios.data.newData.upvote)

                if (doneCallback) {
                    doneCallback(resData);
                }
            }


            catch (error) {
                const resData = { success: false, message: "Upvote failed. Try again later.", axiosRes: {} }
                if (doneCallback) {
                    doneCallback(resData);
                }
            }
        };
        upvote();

    };

    return {
        dataPost,
        requestStatusPost,
        errorPost,
        fUpvotePost,
    };
}

export default usePostData;