import { createContext, useState } from "react";

export const PostDataContext = createContext();

function PostsProvider({ children, startingPosts, fUpvotePost }) {
    const [posts, setPosts] = useState(startingPosts);
    const [catFilter, setCatFilter] = useState(0);
    const [titleFilter, setTitleFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [selectedOrderBy, setSelectedOrderBy] = useState('Date');

    function fResetFilters() {
        setCatFilter(0);
        setTitleFilter("");
        setDateFilter("");
        setSelectedOrderBy("Date");
    }

    return (
        <PostDataContext.Provider value={{
            setPosts, posts,
            setCatFilter, catFilter,
            titleFilter, setTitleFilter,
            dateFilter, setDateFilter,
            fResetFilters, fUpvotePost,
            selectedOrderBy, setSelectedOrderBy
        }}>
            {children}
        </PostDataContext.Provider>
    )
}

export { PostsProvider }