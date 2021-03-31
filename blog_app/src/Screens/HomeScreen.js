
import React, { useState, useEffect } from 'react';
import './HomeScreen.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const Homescreen = () => {

    const [postList, setPostList] = useState([]);
    let history = useHistory();


    useEffect(() => {


        Axios.get("http://localhost:9999/api/user/display").then((data) => {
            setPostList(data.data.response);


        })
        {/**     const result = await fetch("http://localhost:9999/api/user/display", {

            method: "GET",
            headers: {

                "Content-type": "application/json",
                "Accept": "application/json"
            }
        }).then((result) => result.json())
            .catch((error) => console.error(error));
        console.log(result);
        history.push("/"); */}

    });


    return (

        <div className="homescreen_products">
            {postList.map((val, key) => {
                return (
                    <div className="product" key={key} onClick={() => {
                        history.push(`/post/${val._id}`)
                    }}>
                        <div className="product_info">

                            <p className="info_name">{val.title}</p>
                            <p className="info_description"><span>Thoughts</span><br></br>
                                {val.posttext.length > 180
                                    ? val.posttext.substring(0, 180) + " ..."
                                    : val.posttext}</p>


                            <p className="info_price1"> <span className='ind'> Author: </span> {val.username}</p>

                        </div>
                    </div>

                )

            })}



        </div>




    )
}

export default Homescreen;
