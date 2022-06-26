import { useEffect } from "react";
import axios from "axios";

export default function Logout() {
    useEffect(() => {
        axios.get("http://localhost:3001/logout").then((res) => {
            console.log("Logged out.");
        })
    })
    return (
        <div className='logout-div'>
            <h1>Successfully logged you out.</h1>
        </div>
    )
}