// use props 
// const Login = ({ setUserName }) => {
//     return (
//         <input onChange={(e) => {
//             setUserName(e.target.value)
//         }} />
//     )
// }
// use context 
import { useContext } from "react"
import { AppContext } from "./ContextTutorial"
const Login = () => {
    const { setUsername } = useContext(AppContext)
    return (
        <input onChange={(e) => {
            setUsername(e.target.value)
        }} />
    )
}

export default Login