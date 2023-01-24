import { useState } from "react"
import { Link } from "react-router-dom" 
function Events({selEvent, setSelEvent, eventData, setEventData}){
    const [searchEvent, setSearchEvent] = useState("")

    console.log(eventData)
    const handleEvent = (e) => {
        if(selEvent.includes(e)) return
        setSelEvent([...selEvent, e])
        console.log('event added')
    }


    const handleEventSearch = (e) => setSearchEvent(e.target.value)
    return(
        <div>
            <h1>event page</h1>
            <input type="text" onChange={handleEventSearch} />
            {
                eventData.filter(event => event.title.includes(searchEvent)).map((event, i)=> {
                    return(
                        <div >
                        
                            <h2>event data</h2>
                            <ul>
                                <li key={event.id}>{event.title}</li>
                                <li>{event.date}</li>
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