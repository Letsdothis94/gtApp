import { useState } from "react"
import { Link } from "react-router-dom"
import Map from "./Map"

function SelEvents({confirmEvent, setConfirmEvent, selEvent, setSelEvent}){
    const handleSelEvent = (e) => {
        if(selEvent.number <= 0 || confirmEvent.includes(e)) return console.log('cant confirm')
        setConfirmEvent([...confirmEvent, e])
        console.log('event confirmed')
    }
    const handleBack = (e) => {
        const home = selEvent.filter((event)=> { return event.id != e.id})
        setSelEvent(home)
    }
    return(
        <div style={{padding: '3%'}}>
            {
                selEvent.map((event, i)=> {
                    return(
                        <div key={i}style={{background: 'red'}}>
                            <h2>event data</h2>
                            <ul>
                                <li>{event.title}</li>
                                <li>{event.date}</li>
                                <li>{event.location}</li>
                                <li>{event.about}</li>
                            </ul>
                            <div>
                                <h2>{event.going} going</h2>
                            </div>
                            <Link to={'/'}><button onClick={()=> handleSelEvent(event)}>Join</button></Link>
                            <Link to={'/'}><button onClick={()=> handleBack(event)}>Go back</button></Link>
                        </div>
                    )
                })
            }
            <Map selEvent={selEvent} />
        </div>
    )
}

export default SelEvents