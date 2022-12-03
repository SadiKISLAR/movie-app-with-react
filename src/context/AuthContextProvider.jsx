import React, { createContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    return <AuthContext.Provider value={null}>
        {children}
    </AuthContext.Provider>

}

export default AuthContextProvider