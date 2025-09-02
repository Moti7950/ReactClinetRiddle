import { Link } from "react-router";
export default function SiginPage()
{
    return(
        <>
        <h1>Hi from sigin</h1>
        <label htmlFor="userName-login">User name</label>
        <input id="userName-login" type="text" />
        <label htmlFor="passwordUser-login">Password</label>
        <input id="passwordUser-login" type="password" />
        <button><Link to="/">Go to homepage</Link></button>
        </>
    )
}