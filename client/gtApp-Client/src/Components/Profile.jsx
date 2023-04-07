import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import http from '../utils/http'
import DeleteIcon from '@mui/icons-material/Delete';


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
                <div style={{ borderTop: '1px solid black' }}>
                    <h1 className='robotomedium'>Profile Page</h1>
                    <h4 className='robotoRegular' style={{justifyContent:'right'}}>User: {userData}</h4>
                    <Button variant="contained" color="success" onClick={() => { logout() }}>
                        Logout
                    </Button>
                </div>
            </div>
            <div style={{border:'1px solid black'}}>
                <h2 className='robotomedium'>Post Form</h2>
                <div>
                    <Box style={{ border: '1px solid white', margin: 'auto', backgroundColor:'white', width:'60vw', height:'40vh', borderRadius:'10px' }}>
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
                <h2 className='robotomedium'>Your Events</h2>
                <div style={{border:'1px solid white', height:'33vh', overflow:'auto'}}>
                    {
                        filteredEvents.map((x, i) => {
                            return(
                                <div key={i} style={{ border: '1px solid black', margin:'10px', backgroundColor:' azure', color:'black', padding:'8px' }}>
                                    <h2 className='robotomedium'>Title: {x.title}</h2>
                                    <h4 className='robotomedium'>About: {x.about}</h4>
                                    <p className='robotoRegular'>Location: {x.location}</p>
                                <p>MAP GOES HERE!</p>
                                <p>Attendees: {x.going}</p>
                                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => { cancelEvent(x) }}>
                                        Cancel Event
                                    </Button>
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