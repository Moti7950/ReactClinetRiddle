import { Link } from "react-router";
export default function LiginPage()
{
    return(
        <>
        <h1>Hi from login</h1>
        <label htmlFor="userName-login">User name</label>
        <input id="userName-login" type="text" />
        <label htmlFor="passwordUser-login">Password</label>
        <input id="passwordUser-login" type="password" />
        <button><Link to="/">Go to homepage</Link></button>
        <button><Link to="/Menu">Go to Menu</Link></button>
        <button><Link to="/AdminPage">If admin login</Link></button>
        </>
    )
}