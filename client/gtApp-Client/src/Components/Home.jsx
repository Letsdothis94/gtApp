import { useEffect, useState } from "react"
import Events from "./Events"
import { Link } from 'react-router-dom'

function Home({eventData, setEventData, selEvent, setSelEvent}) {
    useEffect(() => {
        const request= async() => {
            let req = await fetch('http://127.0.0.1:3000/events')
            let res = await req.json()
            setEventData(res)
            console.log(eventData)
        }
        request()
    }, [])
    return (
        <div>  
        <h1>This is the home page</h1>
            <Link to={"/login"}>go to login</Link>
            <Link to={"/register"}>register</Link>
            <Events eventData={eventData} setEventData={setEventData} selEvent={selEvent} setSelEvent={setSelEvent}/>
        </div>
    )
}

export default Home