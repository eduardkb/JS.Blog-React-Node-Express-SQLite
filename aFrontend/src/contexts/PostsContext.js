import { createContext, useState } from "react";

export const PostDataContext = createContext();

function PostsProvider({ children, startingPosts }) {
    const [posts, setPosts] = useState(startingPosts);
    const [catFilter, setCatFilter] = useState(0);
    const [titleFilter, setTitleFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");

    function fResetFilters() {
        setCatFilter(0);
        setTitleFilter("");
        setDateFilter("");
    }

    return (
        <PostDataContext.Provider value={{
            setPosts, posts,
            setCatFilter, catFilter,
            titleFilter, setTitleFilter,
            dateFilter, setDateFilter,
            fResetFilters
        }}>
            {children}
        </PostDataContext.Provider>
    )
}

export { PostsProvider }