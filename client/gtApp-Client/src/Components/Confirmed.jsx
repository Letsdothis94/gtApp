import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PlaceIcon from '@mui/icons-material/Place';


function Confirmed({confirmEvent, setConfirmEvent}){
    let going = confirmEvent[0].going
    const handledelete = (event) => {
            let patching = {going: going - 0.50};
            fetch(`http://127.0.0.1:3000/events/${confirmEvent[0].id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    patching
                )
            })
                .then((r) => r.json())
                .then(console.log('success'))
            console.log('deleted')

            const deleted = confirmEvent.filter((x)=>{return x.id !== event.id})
            setConfirmEvent(deleted)
        }
    return (
        <>
            <hr style={{width: '90%'}}/>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '5%'}}>
                <h1>Confirmed Events</h1>
                
                {
                confirmEvent.map((confirmed)=> {
                    return(
                        <div key={confirmed.id}>
                            <Box sx={{ width: '40vw', bgcolor: 'background.paper' }}>
                                <nav style={{color: 'black'}} aria-label="main mailbox folders">
                                    <List>
                                    <ListItem >
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <Link to={'/'}><CancelIcon style={{ color: 'red' }} onClick={()=> handledelete(confirmed)}/></Link>
                                        </ListItemIcon>
                                        <ListItemText primary={confirmed.title} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem >
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <PlaceIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={confirmed.location} />
                                        </ListItemButton>
                                    </ListItem>
                                    </List>
                                </nav>
                                <Divider />
                            </Box>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}
export default Confirmed;
