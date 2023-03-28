import { createContext, useState } from "react";
import { MyCustomTheme } from "../mui_css/muiStyles";

export const SessionContext = createContext();

function SessionProvider({ children }) {
    const defaultUser = { id: "1", name: "guest" }
    const [userLoggedIn, setUserLoggedIn] = useState(defaultUser);
    const { myTheme, setTheme } = MyCustomTheme();

    return (
        <SessionContext.Provider value={{
            userLoggedIn, setUserLoggedIn,
            myTheme, setTheme
        }}>
            {children}
        </SessionContext.Provider>
    )
}

export { SessionProvider }