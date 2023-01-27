import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>Joined Event</h1>
            <hr></hr>
            {
              confirmEvent.map((confirmed)=> {
                  return(
                    <div key={confirmed.id}>
                          <div>{confirmed.title}</div>
                           <Link to={'/'}><CancelIcon onClick={()=> handledelete(confirmed)}/></Link>
                         
                    </div>
                  )
              })
            }
        </div>
    )
}
export default Confirmed;