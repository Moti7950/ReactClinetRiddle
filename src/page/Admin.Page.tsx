import { Link } from "react-router";
export default function AdminPage(){
    return(
        <>
        <h1>Hi from admin page</h1>
        <button><Link to="/">Go to homepage</Link></button>
        </>
    )
}