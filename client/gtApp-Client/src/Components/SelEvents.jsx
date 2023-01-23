import { useState } from "react"
import { Link } from "react-router-dom"

function SelEvents({eventData, setEventData, selEvent, setSelEvent}){
    const [confirmEvent, setConfirmEvent] = useState([])
    const handleSelEvent = (e) => {
        if(selEvent.number <= 0 || confirmEvent.includes(e)) return console.log('cant confirm')
        setConfirmEvent([...selEvent, e])
        console.log('event confirmed')
    }
    const handleBack = (e) => {
        const home = selEvent.filter((event)=> { return event.id != e.id})
        setSelEvent(home)
        console.log(selEvent)
    }
    return(
        <div style={{background: 'yellow', padding: '3%'}}>
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
                            <button onClick={()=> handleSelEvent(event)}>Join</button>
                            <Link to={'/'}><button onClick={()=> handleBack(event)}>Go back</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SelEvents