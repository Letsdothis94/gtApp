import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Postform(){
    const [title, setTitle] = useState('')
    const [about, setAbout] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const handleClick = (x) => {
        console.log('where?')
        navigate(`/`)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/events", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                about: about,
                date: date,
                location: location,
                host_id: 1,
                user_id: 1,
            })
        })
    }

    return (
        <div>
            <h1>Post Your Event</h1>
            <hr></hr>
            <form onSubmit={handleOnSubmit}>
                <input placeholder='Title of event?' value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                <input placeholder='About this event?' value={about} onChange={(e) => setAbout(e.target.value)} /><br />
                <input type={date} placeholder='Date D/M/Y' value={date} onChange={(e) => setDate(e.target.value)} /><br />
                <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} /><br />
                <input type="submit" value="Post Event" onClick={handleClick}/>
            </form>
        </div>
    )
}
export default Postform;