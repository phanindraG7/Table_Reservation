import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'; // Import shared styles

function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const toggleSignup = () => {
        setIsSignup(!isSignup);
    };

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/signup", {
                email,
                password
            });

            if (res.data === "exist") {
                alert("User already exists");
            } else if (res.data === "notexist") {
                history("/home", { state: { id: email } });
            }
        } catch (e) {
            alert("Wrong details");
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
            <form action="POST">
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <div className="form-block__toggle-bar" onClick={toggleSignup}>
                <span>{isSignup ? 'Already' : "Don't"} have an account? Click here &#8594;</span>
            </div>
            <Link to={isSignup ? "/" : "/signup"} className="signup-button">{isSignup ? 'Login' : 'Signup'}</Link>
        </div>
    );
}

export default Signup;