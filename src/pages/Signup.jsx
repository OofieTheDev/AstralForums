import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const headers = {
    'Content-Type' : 'application/json'
};

export default function SignUp() {
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ username, setUserName] = useState('');
    const [ password, setPassword ] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;
    
        switch (name) {
            case "email":
                setEmail(value);
                break;
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

    const signUpFunc = (e) => {
        e.preventDefault()
        const SIGNUP_ROUTE = "http://localhost:3001/signup";
        const CREDS = {
            email,
            username,
            password
        };
        axios.post(SIGNUP_ROUTE, CREDS, headers)
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
        navigate("/login");
    }

    return (
        <div className='signup-div'>
            <h1 className='signup-header'>Signup for an account</h1>
            <div>
                <form className='signup-form' onSubmit={signUpFunc}>
                    <p className='signup-label'>Email</p>
                    <input className='signup-input' type="text" name='email' value={email} onChange={handleChange}/>
                    <p className='signup-label'>Username</p>
                    <input className='signup-input' type="text" name='username' value={username} onChange={handleChange}/>
                    <p className='signup-label'>Password</p>
                    <input className='signup-input' type="text" name='password' value={password} onChange={handleChange}/>
                    <br/>
                    <button className='signup-btn' type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}