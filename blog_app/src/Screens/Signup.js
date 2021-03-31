
import './Signup.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sign() {
        console.warn(name + email + password);
        let item = { name, email, password };

        await fetch("http://localhost:1005/api/user/signup", {

            method: "POST",
            body: JSON.stringify(item),
            headers: {

                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <label for="name">Name</label><br></br>
                <input type="text" value={name} className="form-control" id="name" name="name" placeholder="name"
                    onChange={(e) => setName(e.target.value)} /><br></br>

                <label for="email">Email Address</label><br></br>
                <input type="email" value={email} className="form-control" id="email" name="email" placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} /><br></br>


                <label for="password">Password</label><br></br>
                <input type="password" value={password} className="form-control" id="password" name="password" placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} /><br></br>


                <button onClick={sign} className="btn btn-primary">Sign up</button>

            </div>


        </div>
    );
}

export default Signup;