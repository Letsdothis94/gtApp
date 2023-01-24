import { useState } from "react"
import { Link } from "react-router-dom" 
function Events({selEvent, setSelEvent, eventData, setEventData}){
    const [searchEvent, setSearchEvent] = useState("")
    const [dateSearch, setDateSearch] = useState ("")
    // console.log(eventData)
    const handleEvent = (e) => {
        if(selEvent.includes(e)) return
        setSelEvent([...selEvent, e])
        console.log('event added')
    }
    // const handleDateSearch = (dateSearch) => {
    //     let date = eventData.filter(event => event.date.matches(dateSearch))
    //     setDateSearch(date)
    // }

    const handleEventSearch = (e) => setSearchEvent(e.target.value)

    // const day = eventData[0].date
        // console.log(eventData[1].date)
    // console.log(eventData[0].date)
    return(
        <div>
            <h1>event page</h1>
            <input type="text" onChange={handleEventSearch} />
            {/* <input type='text' onClick={handleDateSearch} /> */}
            {
                eventData && eventData.filter(event => event.title.includes(searchEvent)).map((event, i)=> {
                    return(
                        <div key={i}>
                        
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