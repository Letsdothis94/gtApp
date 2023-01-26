import { useEffect, useState } from "react"
import Events from "./Events"
import { Link } from 'react-router-dom'

import './Css/Home.css'

// import jwtDecode from 'jwt-decode'


// let logUser;
// if (localStorage.token) {
//     const jwt = localStorage.getItem('token')
//     logUser = jwtDecode(jwt)
// // }
function Home({eventData, setEventData, selEvent, setSelEvent, user}) {

    //WebSockets Starts Here:
    useEffect(() => {
        const request = async () => {
            let req = await fetch(`http://127.0.0.1:3000/events`)
            let res = await req.json()
            setEventData(res)
            console.log(res)

        }
        const connect = async () => {
            let ws;
            ws = new WebSocket("ws://localhost:3000/cable")
            ws.onopen = () => {
                console.log("WS is on!")
                ws.send(JSON.stringify({ "command": "subscribe", "identifier": `{\"channel\": \"LiveFeedChannel\"}` }))
            }
            ws.onmessage = (event) => {
                const { data } = event;
                let payload = JSON.parse(data)
                if (payload.type === "ping" || payload.type === "message") return;
                let x = JSON.parse(event.data)
                console.log("It still works :s", x)
                if (x.type === "confirm_subscription") return;
                const post = x?.message?.post
                if (post) {
                    setEventData(prevState => {
                        return [...prevState, post]
                    })
                }
        }
    }
        request();
        connect();
    }, [])

    //WebSockets Ends Here

    // const [user, setUser] = useState(logUser) 
    // console.log(user)

    // useEffect(() => {
    //     const request= async() => {
    //         let req = await fetch('http://127.0.0.1:3000/events')
    //         let res = await req.json()
    //         setEventData(res)
    //         // console.log(eventData)
    //     }
    //     request()
    // }, [])




    // console.log(user.token)
    return (
        <div style={{backgroundColor:'#1A1A1D'}} className="home-cont">  
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