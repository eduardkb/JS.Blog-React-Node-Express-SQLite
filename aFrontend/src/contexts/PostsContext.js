import { createContext, useState } from "react";

export const PostDataContext = createContext();

function PostsProvider({ children, startingPosts }) {
    const [posts, setPosts] = useState(startingPosts);
    const [catFilter, setCatFilter] = useState(0);
    const [titleFilter, settitleFilter] = useState("");
    return (
        <PostDataContext.Provider value={{ setPosts, posts, setCatFilter, catFilter, titleFilter, settitleFilter }}>
            {children}
        </PostDataContext.Provider>
    )
}

export { PostsProvider }