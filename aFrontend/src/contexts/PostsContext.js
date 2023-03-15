import { createContext, useState } from "react";

export const PostDataContext = createContext();

function PostsProvider({ children, startingPosts }) {
    const [posts, setPosts] = useState(startingPosts);
    return (
        <PostDataContext.Provider value={{ setPosts, posts }}>
            {children}
        </PostDataContext.Provider>
    )
}

export { PostsProvider }