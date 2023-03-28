import { createContext, useState } from "react";

export const SessionContext = createContext();

function SessionProvider({ children }) {
    const defaultUser = { id: "1", name: "guest" }
    const [userLoggedIn, setUserLoggedIn] = useState(defaultUser);


    return (
        <SessionContext.Provider value={{
            userLoggedIn, setUserLoggedIn
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export { SessionProvider }