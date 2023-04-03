import { createContext, useState } from "react";
import { MyCustomTheme } from "../mui_css/muiStyles";

export const SessionContext = createContext();
const arrUsers = [{ "id": 1, "name": "guest", "email": "anonymous@uta.edu", "pass": "anonymouspass", "role": "guest", "timestamploggedin": null, "createdAt": "2023-03-23T13:59:55.325Z", "updatedAt": "2023-03-23T13:59:55.325Z" }, { "id": 2, "name": "John Snow", "email": "jsnow@uta.edu", "pass": "jsnow1234", "role": "admin", "timestamploggedin": null, "createdAt": "2023-03-23T13:59:55.326Z", "updatedAt": "2023-03-23T13:59:55.326Z" }, { "id": 3, "name": "Laura Hoton", "email": "lhorton@uta.edu", "pass": "lhorton1234", "role": "user", "timestamploggedin": null, "createdAt": "2023-03-23T13:59:55.326Z", "updatedAt": "2023-03-23T13:59:55.326Z" }, { "id": 4, "name": "Daniel Forts", "email": "dforts@uta.edu", "pass": "dforts1234", "role": "user", "timestamploggedin": null, "createdAt": "2023-03-23T13:59:55.326Z", "updatedAt": "2023-03-23T13:59:55.326Z" }]


function SessionProvider({ children }) {
    const [userLoggedIn, setUserLoggedIn] = useState(arrUsers[0]);
    const [showAdminPortal, setShowAdminPortal] = useState(false);
    const { myTheme, setTheme } = MyCustomTheme();


    function userLogin() {
        setUserLoggedIn(arrUsers[1])
        setShowAdminPortal(true)

    }
    function userLogoff() {
        setUserLoggedIn(arrUsers[0])
        setShowAdminPortal(false)
    }

    return (
        <SessionContext.Provider value={{
            userLoggedIn, myTheme, setTheme,
            userLogin, userLogoff, showAdminPortal
        }}>
            {children}
        </SessionContext.Provider>
    )
}



export { SessionProvider }