import { createContext, useState } from "react";

export const PostDataContext = createContext();

function PostsProvider({ children, startingPosts }) {
    const [posts, setPosts] = useState(startingPosts);
    const [catFilter, setCatFilter] = useState(0);
    const [titleFilter, setTitleFilter] = useState("");

    function fResetFilters() {
        setCatFilter(0);
        setTitleFilter("");
    }

    return (
        <PostDataContext.Provider value={{ setPosts, posts, setCatFilter, catFilter, titleFilter, setTitleFilter, fResetFilters }}>
            {children}
        </PostDataContext.Provider>
    )
}

export { PostsProvider }