import { use, useRef, useState } from "react";
import { Link } from "react-router";

// utilitiys function
import {LeaderboardFetch, CheckIfUserExsiss} from "../utility/functionFetch.tsx"
export default function LiginPage()
{
    
    const userName = useRef<HTMLInputElement>(null!)
    const Password = useRef<HTMLInputElement>(null!)
    return(
        <>
        <h1>Hi from login</h1>
        <input id="userName-login" type="text" placeholder="Enter user name" ref={userName} required/>
        <input id="passwordUser-login" type="password" placeholder="Enter password" ref={Password} required/>
        <button onClick={async ()=>{
            console.log(userName.current?.value , Password.current?.value);
        const data = await CheckIfUserExsiss(userName.current?.value , Password.current?.value)
            console.log(data)
        }}>Submit</button>
        <button><Link to="/">Go to homepage</Link></button>
        <button><Link to="/Menu">Go to Menu</Link></button>
        <button><Link to="/AdminPage">If admin login</Link></button>
        </>
    )
}