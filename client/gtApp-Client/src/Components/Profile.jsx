import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import http from '../utils/http'


function Profile({user}) {
    //This caontains the current user_id
    console.log(user);

    const [yourevents, setYourevents] = useState([])
    const [title, setTitle] = useState('')
    const [about, setAbout] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const navigate = useNavigate()

    const handleClick = (x) => {
        navigate(`/`)
    }
    //error?????
    const userData = user.user_data

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
                user_id: userData,
            })
        })
    }

    
    //Fetching events data
    useEffect(() => {
        let request = async () => {
            let req = await fetch(`http://localhost:3000/events`)
            let res = await req.json()
            setYourevents(res)
        }
        console.log(yourevents)
        request()
    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        window.location = '/';
    };
    
    //Filtering through all events and returning the one that matches current user_id
    let filteredEvents = yourevents.filter(x => x.user_id === userData);
    console.log(filteredEvents)
    
    //delete request for event
    const cancelEvent = (x) => {
        console.log('Cancelled event')
        fetch(`http://127.0.0.1:3000/events/${x.id}`, {
            method: 'DELETE'
        })
    }
    
    // const dismissUnit = (unit) => {
    //     setParty([...party.filter((member) => { return member.id !== unit.id })])
    // }
    return (
        <div>
            <div>
                <div>
                    <h1>Profile Page</h1>
                    <h3>user_id: {userData}</h3>
                </div>
                <div>
                    <button onClick={() => { logout() }}>Logout</button>
                </div>
            </div>
            <div style={{border:'1px solid black'}}>
                <h1>Post Form</h1>
                <div>
                    <Box style={{ border: '1px solid white', margin: 'auto', backgroundColor:'white', width:'60vw', height:'30vh', borderRadius:'10px' }}>
                            <h3 style={{color:'black', textAlign:'center'}}>Add Event!</h3>

                        <FormControl onSubmit={handleOnSubmit}  style={{margin:'10px', display:'flex'}}>

                            <TextField variant="outlined" label="Title of Event" value={title} onChange={(e) => setTitle(e.target.value)}></TextField>


                            <TextField variant="outlined" label="About" value={about} onChange={(e) => setAbout(e.target.value)}></TextField>


                            <TextField variant="outlined" label="Date Format: 00/00/2023" value={date} onChange={(e) => setDate(e.target.value)}></TextField>


                            <TextField variant="outlined" label="Location" value={location} onChange={(e) => setLocation(e.target.value)}></TextField>

                            <Button style={{margin:'10px'}} variant="contained" onClick={handleOnSubmit}>Submit</Button>
                        </FormControl><br />
                    </Box>
                </div><br />
            </div>
            <div style={{ border: '1px solid black' }}>
                <h1>Your Events</h1>
                <div style={{border:'1px solid white'}}>
                    {
                        filteredEvents.map((x, i) => {
                            return(
                                <div key={i} style={{ border: '1px solid black', margin:'10px', backgroundColor:' azure', color:'black', padding:'8px' }}>
                                <h2>Title: {x.title}</h2>
                                <h3>About: {x.about}</h3>
                                <p>Location: {x.location}</p>
                                <p>MAP GOES HERE!</p>
                                <p>Attendees: {x.going}</p>
                                    <button onClick={()=>{cancelEvent(x)}} >Cancel</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;