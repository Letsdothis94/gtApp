import { useState } from "react"
import { Link } from "react-router-dom" 
import './Css/Home.css'
import Filter from './Filter'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);


function Events({selEvent, setSelEvent, eventData, setEventData}){
    const [searchEvent, setSearchEvent] = useState("")

    console.log(eventData)
    const handleEvent = (e) => {
        if(selEvent.includes(e)) return
        setSelEvent([...selEvent, e])
        console.log('event added')
    }
    const handleFilterName = (name) => {
    const filteredData = eventData.filter((item) => {
      const fullName = `${item.title}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setEventData(filteredData);
  };
  const handleFilterDate = (date, field) => {
    const filteredData = eventData.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setEventData(filteredData);
  };
function refreshPage() {
    window.location.reload(false);
  }
    // const handleEventSearch = (e) => setSearchEvent(e.target.value)
    return(
        <div className="event-cont" style={{padding: '5%', background: 'rgba(113, 108, 108, 0.46)', borderRadius: '2%', display: 'flex', flexDirection: 'column'}}>
            <Filter onNameFilter={handleFilterName} onDateFilter={handleFilterDate} refreshPage={refreshPage}/>
            {
                eventData.map((event, i)=> {
                    return(
                        <div className='card-cont' key={event.id}>
                            <Card style={{background:'none', borderRadius: '15px', color: '#fff', }} sx={{ mmaxWidth: 200 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                                    {event.location}
                                    </Typography>
                                    <hr></hr>
                                    <Typography variant="h5" component="div">
                                    Event: {event.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }}>
                                    {event.about}
                                    </Typography>
                                    <Typography variant="body2">
                                    Date: {event.date}
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <Link to={'/selEvent'}><Button style={{color: '#fff', textDecoration: 'none'}} size="large" onClick={()=> handleEvent(event)}>Learn More</Button></Link>
                                </CardActions>
                            </Card>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Events
