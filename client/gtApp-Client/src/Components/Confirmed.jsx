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
import { Button } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import SyncIcon from '@mui/icons-material/Sync';
import QRCode from 'react-qr-code'
function Confirmed({user, qr, setQr, confirmEvent, setConfirmEvent}){
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
        console.log(confirmEvent)
    function handleChange(confirmEvent){
      setQr(`${confirmEvent.event_no} - ${confirmEvent.user_id}`)
    }
    return (
        <>
            <hr style={{width: '90%', marginTop: '3%'}}/>
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '5%'}}>
                <h1 style={{fontFamily: "'Work Sans', sans-serif"}}>Confirmed Events</h1>
                {
                confirmEvent.map((confirmed)=> {
                    return(
                        <>
                        <div className={'conf-cont'} key={confirmed.id}>
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
                        {!user && (
                            <>
                                <h2 style={{fontFamily: 'sans-serif'}}>Need a QR code? Create an account!</h2>
                                <Link style={{textDecoration: 'none'}} to={'/register'}><Button variant='contained'>Signup!</Button></Link>
                            </>
                        )}
                        {user && (
                            <div style={{display:'flex', width: '100%', height:'20vh', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{display:'flex', width: '30%', height: '100%', marginTop: '2%', borderRadius:'5px', alignItems: 'center', justifyContent: 'center', gap: '7%', background: '#fff'}}>
                                    <QRCode style={{width:'30%'}} value={qr}/>
                                    <Button variant='contained' onClick={()=>{handleChange(confirmed)}}> <SyncIcon/> </Button>
                                </div>
                                
                            </div>
                        )}
                        </>
                    )
                })
                }
            </div>
        </>
    )
}
export default Confirmed;
