import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


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
            {/* <form onSubmit={handleOnSubmit}>
                <input placeholder='Title of event?' value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                <input placeholder='About this event?' value={about} onChange={(e) => setAbout(e.target.value)} /><br />
                <input type={date} placeholder='Date D/M/Y' value={date} onChange={(e) => setDate(e.target.value)} /><br />
                <input placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} /><br />
                <input type="submit" value="Post Event" onClick={handleClick}/>
            </form> */}
            <div>
                <Box style={{border:'1px solid white', margin: '2%'}}>

                    <FormControl onSubmit={handleOnSubmit}>
                    
                        <TextField variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)}></TextField>
              
                        
                        <TextField variant="outlined" value={about} onChange={(e) => setAbout(e.target.value)}></TextField>
                 
                        
                        <TextField variant="outlined" value={date} onChange={(e) => setDate(e.target.value)}></TextField>
                  
                        
                        <TextField variant="outlined"  value={location} onChange={(e) => setLocation(e.target.value)}></TextField>
            
                        <Button variant="outlined" onClick={handleOnSubmit}>Outlined</Button>
                    </FormControl><br />
                </Box>
            </div>
        </div>
    )
}
export default Postform;