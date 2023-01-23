import { useState } from "react"
import { Link } from "react-router-dom" 
function Events({selEvent, setSelEvent, eventData, setEventData}){
    
    const handleEvent = (e) => {
        if(selEvent.includes(e)) return
        setSelEvent([...selEvent, e])
        console.log('event added')
    }
    return(
        <div>
            <h1>event page</h1>
            {
                eventData.map((event, i)=> {
                    return(
                        <div key={i}>
                        {        console.log(selEvent)}
                            <h2>event data</h2>
                            <ul>
                                <li key={event.id}>{event.title}</li>
                            </ul>
                            <Link to={'/selEvent'}><button onClick={()=> handleEvent(event)}>Interested
                            ?</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Events