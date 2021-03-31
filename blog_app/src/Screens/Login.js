import './Login.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';







function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function log() {
        console.warn(email + password);
        let item = { email, password };

        if (email == "admin@gmail.com" && password == "admin") {
            history.push('/addProducts')
        }

        await fetch("http://localhost:1005/api/user/login", {

            method: "POST",
            body: JSON.stringify(item),
            headers: {

                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        history.push("/");

    }





    return (
        <div className="card">
            <div className="card-body">
                <h1>Login</h1>


                <label for="email">Email Address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} /><br></br>

                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} /><br></br>


                <button onClick={log} className="btn btn-primary">Login</button>


            </div>
        </div>
    );
}

export default Login;