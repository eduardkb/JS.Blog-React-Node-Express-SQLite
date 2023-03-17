import React from "react";

export default function PostDetails(props) {
    const postSelected = props.postSelected;
    return (
        <div>
            <h1>post details test page</h1>
            <h6>post #: {postSelected}</h6>
        </div>
    )
}