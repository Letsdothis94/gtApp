import { useEffect, useState } from "react"
import Events from "./Events"
import { Link } from 'react-router-dom'

import './Css/Home.css'

import jwtDecode from 'jwt-decode'


// let logUser;
// if (localStorage.token) {
//     const jwt = localStorage.getItem('token')
//     logUser = jwtDecode(jwt)
// // }
function Home({eventData, setEventData, selEvent, setSelEvent, user}) {
    useEffect(() => {
        const request= async() => {
            let req = await fetch('http://127.0.0.1:3000/events')
            let res = await req.json()
            setEventData(res)
            // console.log(eventData)
        }
        request()
    }, [])




    // console.log(user.token)
    return (
        <div className="home-cont">  
            <h1>This is the home page</h1>
                {!user && (
                <>
                <Link to={"/login"}>go to login</Link>
                <Link to={"/register"}>register</Link>
                </>
                )}
                {user && (
                    <>
                        <Link to={"/profile"}>Profile</Link>
                        <Link to={"/logout"}>Logout</Link>
                    </>
                )}

                <Link to={"/post"}>form</Link>
                <Events eventData={eventData} setEventData={setEventData} selEvent={selEvent} setSelEvent={setSelEvent} />
        </div>
    )
}

export default Home