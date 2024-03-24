import React from 'react'
import UserContext from './UserContext'



const UserContextProvider= ({children})=>{
    //do the API calls here
    const [user, setUser]= React.useState(null)
return (
    //throw the things to access here
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
)
}
export default UserContextProvider

