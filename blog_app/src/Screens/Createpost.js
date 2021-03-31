
import React, { useState, useEffect } from 'react';
import './Createpost.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';


const Createpost = () => {



    const [username, setUserName] = useState("");
    const [title, setTitle] = useState("");
    const [posttext, setText] = useState("");
    const history = useHistory();

    async function submitPost() {
        console.log(username + title + posttext);
        let item = { title, posttext, username };

        await fetch("http://localhost:9999/api/user/createpost", {

            method: "POST",
            body: JSON.stringify(item),
            headers: {

                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        history.push("/");



    };
    return (
        <div className="CreatePost">
            <div className="uploadPost">
                <label>UserName</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <label>Title</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label>Post Text</label>
                <textarea
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />

                <button onClick={submitPost}> Submit Post</button>


            </div>

        </div>

    )
}

export default Createpost;