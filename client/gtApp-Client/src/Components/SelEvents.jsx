import { useState } from "react"
import { Link } from "react-router-dom"
import Map from "./Map"
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';
import TitleIcon from '@mui/icons-material/Title';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PlaceIcon from '@mui/icons-material/Place';
import Button from '@mui/material/Button';

function SelEvents({confirmEvent, setConfirmEvent, selEvent, setSelEvent}){
// TO ADD TO CONFIRMATION PAGE 
    // const handleSelEvent = (e) => {
    //     if(selEvent.number <= 0 || confirmEvent.includes(e)) return console.log('cant confirm')
    //     setConfirmEvent([...confirmEvent, e])
    //     console.log('event confirmed')
    // // }
// TO DELETE FROM STATE AND GO BACK TO EVENT PAGE
    const handleBack = (e) => {
        const home = selEvent.filter((event)=> { return event.id != e.id})
        setSelEvent(home)
    }
    //to join and update database
    console.log(selEvent[0].id)
    let going = selEvent[0].going

    const handleClick = (event) => {
        // console.log('joining')
        // console.log(event)
        
        if(selEvent.number <= 0 || confirmEvent.includes(event)) return console.log('cant confirm')
        setConfirmEvent([...confirmEvent, event])

        let adding = {going: going + 1};
        fetch(`http://127.0.0.1:3000/events/${selEvent[0].id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                adding
            ),
        })
            .then((r) => r.json())
            .then(console.log('success'))
    }

    return(
        <div className='sel-cont' style={{padding: '3%'}}>
            {
                selEvent.map((event, i)=> {
                    return(
                        <div key={i} className='sel-event-cont'>
                                <Box style={{color: 'black'}} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                    <ListItem >
                                        <ListItemIcon>
                                            <TitleIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={event.title} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            <InfoIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={event.about} />
                                    </ListItem>
                                    </List>
                                </nav>
                                <Divider />
                                <nav aria-label="secondary mailbox folders">
                                    <List>
                                    <ListItem >
                                        <ListItemIcon>
                                            <DateRangeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={event.date} />
                                    </ListItem>
                                    <ListItem >
                                        <ListItemIcon>
                                            <PlaceIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={event.location} />
                                    </ListItem>
                                    </List>
                                </nav>
                                <Divider />
                                <List>
                                    <ListItem style={{display: 'flex', justifyContent: 'space-between', padding: '10%'}}>
                                        <Link style={{textDecoration: 'none'}} to={'/'}>
                                            <Button variant='contained' onClick={() => handleClick(event)}>Join</Button>
                                        </Link>
                                        <Link style={{textDecoration: 'none'}} to={'/'}>
                                            <Button variant='contained' onClick={()=> handleBack(event)}>Go back</Button>
                                        </Link>
                                    </ListItem>
                                </List>
                                
                                </Box>
                                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                                    <Button style={{color:'black', background: 'white', marginTop: '25%', padding: '6% 8%', justifySelf: 'center', }} disabled>{selEvent[0].going} Attending</Button>
                                </div>
                                
                        </div>
                    )
                })
            }
            <Map selEvent={selEvent} />
            
        </div>
    )
}

export default SelEvents

