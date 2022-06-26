import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
axios.defaults.withCredentials = true;

const headers = {
    'Content-Type' : 'application/json'
};

export default function Login() {
    const navigate = useNavigate();
    const [ username, setUserName] = useState('');
    const [ password, setPassword ] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
    
        switch (name) {
            case "username":
                setUserName(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const loginFunc = async(e) => {
        e.preventDefault()
        const LOGIN_ROUTE = "http://localhost:3001/login";
        const CREDS = {
            username,
            password
        };
        const result = await axios.post(LOGIN_ROUTE, CREDS, headers)
        if (result.data == "Y") {
            navigate("/")
        } else {
            navigate("/login")
        }
    }

    return (
        <div className='login-div'>
            <h1 className='login-header'>Login to your account</h1>
            <div>
                <form className='login-form' onSubmit={loginFunc}>
                    <p className='login-label'>Username</p>
                    <input className='login-input' type="text" name='username' value={username} onChange={handleChange}/>
                    <p className='login-label'>Password</p>
                    <input className='login-input' type="text" name='password' value={password} onChange={handleChange}/>
                    <br/>
                    <button className='login-btn' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
