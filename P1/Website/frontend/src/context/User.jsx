import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    function restoreUser(setIsLoaded) {
        fetch('api/session')
        .then(res => res.json())
        .then(data => {
            if (data) {
            setUser(data.user);
            setIsLoaded(true)
            }
        })
        .catch(err => {
            console.error('Error fetching shows:', err);
        });
    }

    function logout() {
        fetch('api/session', {method: 'DELETE'})
        .catch(err => {
            console.error('Error fetching shows:', err);
        });
    }

    return (
        <UserContext.Provider value={{user, setUser, restoreUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);