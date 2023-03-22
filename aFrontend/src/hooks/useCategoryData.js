import { useState, useEffect } from "react";
// import categoryData from "../dev/DB_Category.json"
import axios from "axios";
import GLOBAL_SETTINGS from "../config";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",
};

function useCategoryData(delayTime = 300) {
    const [dataCategory, setDataCategory] = useState([]);
    const [requestStatusCategory, setRequestStatusCategory] = useState(REQUEST_STATUS.LOADING);
    const [errorCategory, setErrorCategory] = useState("");
    const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/category`

    // create delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // introducing a async delay to simulate loading data from an api
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                const result = await axios.get(restUrl);
                // throw "Problem while reading server data - Category";
                setRequestStatusCategory(REQUEST_STATUS.SUCCESS);
                setDataCategory(result.data);
            } catch (e) {
                setRequestStatusCategory(REQUEST_STATUS.FAILURE);
                setErrorCategory(e);
            }
        }
        delayFunc();
        // eslint-disable-next-line 
    }, []);



    return {
        dataCategory,
        requestStatusCategory,
        errorCategory,
    };
}

export default useCategoryData;