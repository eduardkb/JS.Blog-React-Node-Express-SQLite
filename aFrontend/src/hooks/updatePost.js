import axios from "axios";
import GLOBAL_SETTINGS from "../config";

function createPost(doneCallback, title, picture, body, published, categoryID, sTag, userID) {
    let upvote = 0;
    console.log(`Saving:\n|Title:${title}|\n|Pict:${picture}|\n|Body:${body}|\n|Published:${published}|\n|CatID:${categoryID}|\n|UserID:${userID}|\n|UpVote:${upvote}|\n|Tags:${sTag}|`)
    let postData = {
        title: title,
        picture: picture,
        body: body,
        published: published,
        upvote: upvote,
        categoryId: categoryID,
        userId: userID
    }

    async function newPost() {
        try {
            const restUrl = `${GLOBAL_SETTINGS.axiosUrl}/post`
            const resAxios = await axios.post(restUrl, postData);

            const resData = { success: true, message: "Post Created", axiosRes: resAxios }
            console.log("ResData: ", resData)

            //update live array
            // TODO TODO

            if (doneCallback) {
                doneCallback(resData);
            }
        }


        catch (error) {
            const resData = { success: false, message: "Post creation failed. Try again later.", axiosRes: {}, originalMsg: error }
            if (doneCallback) {
                doneCallback(resData);
            }
        }
    };
    newPost();
}

export { createPost }
