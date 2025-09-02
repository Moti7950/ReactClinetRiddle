import { useNavigate } from "react-router";

export function HomePage(){
    let navigate = useNavigate()
    return(
        <>
        <h1>Welcome to Riddle game 🙂</h1>
        <button onClick={()=>{navigate("login")}}>login</button>
        <button onClick={()=>{navigate("sigin")}}>sigin</button>
        </>
    )
}