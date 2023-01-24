import { useEffect, useState } from "react"
import Events from "./Events"
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// let logUser;
// if (localStorage.token) {
//     const jwt = localStorage.getItem('token')
//     logUser = jwtDecode(jwt)
// }
function Home({eventData, setEventData, selEvent, setSelEvent}) {
    // const [user, setUser] = useState(logUser) 

    useEffect(() => {
        const request= async() => {
            let req = await fetch('http://127.0.0.1:3000/events')
            let res = await req.json()
            setEventData(res)
            console.log(eventData)
        }
        request()
    }, [])

    // console.log(user)
    return (
        <div style={{background: 'orange'}}>  
        <h1>This is the home page</h1>
            <Link to={"/login"}>go to login</Link>
            <Link to={"/register"}>register</Link>

            <Link to={"/post"}>form</Link>
            <Search eventData={eventData} setEventData={setEventData}/> 


            <Events eventData={eventData} setEventData={setEventData} selEvent={selEvent} setSelEvent={setSelEvent}/>
        </div>
    )
}

export default Home