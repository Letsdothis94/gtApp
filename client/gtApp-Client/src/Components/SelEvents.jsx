import { useState } from "react"

function SelEvent({eventData, setEventData, selEvent, setSelEvent}){
    const [confirmEvent, setConfirmEvent] = useState([])
    const handleSelEvent = (e) => {
        if(selEvent.number <= 0 || confirmEvent.includes(e)) return console.log('cant confirm')
        setConfirmEvent([...selEvent, e])
        console.log('event confirmed')
    }
    return(
        <div>
            {
                eventData.map((event, i)=> {
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SelEvent