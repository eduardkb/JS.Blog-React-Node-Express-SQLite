import { createContext, useState } from "react";

export const PostDataContext = createContext();

function PostsProvider({ children, startingPosts }) {
    const [posts, setPosts] = useState(startingPosts);
    const [catFilter, setCatFilter] = useState(0);
    return (
        <PostDataContext.Provider value={{ setPosts, posts, setCatFilter, catFilter }}>
            {children}
        </PostDataContext.Provider>
    )
}

export { PostsProvider }