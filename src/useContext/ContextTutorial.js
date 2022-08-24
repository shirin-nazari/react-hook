import { createContext, useState } from "react"
import Login from "./Login"
import User from "./User"
// use props 
// const ContextTutorial = () => {
//     const [username, setUsername] = useState('')
//     // you don`t use many props it maintainable it use context api because mange your state 
//     return (
//         <div>
//             <Login setUserName={setUsername} /><User username={username} />
//         </div>
//     )
// }
// use context 
export const AppContext = createContext(null)
const ContextTutorial = () => {
    const [username, setUsername] = useState('')
    // you don`t use many props it maintainable it use context api because mange your state 
    return (
        <AppContext.Provider value={{ username, setUsername }}>
            <Login /><User />
        </AppContext.Provider>
    )
}
export default ContextTutorial