import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

export default function BasicMenu({user, setConfirmEvent, confirmEvent}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' style={{ color: '#fff' }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          style: {
            height: '40vh'
        }}}
      >
          {!user && (
            <>
              <Link to={'/confirmed'} style={{textDecoration: 'none', color: 'black'}}><MenuItem style={{margin: '10% 0', fontSize: '20px'}} onClick={handleClose}>Confirmed Events</MenuItem></Link>     
              <Link to={"/login"} style={{textDecoration: 'none', color: 'black'}}><MenuItem style={{margin: '10% 0', fontSize: '20px'}} onClick={handleClose}>Login</MenuItem></Link>
              <Link to={'/register'} style={{textDecoration: 'none', color: 'black'}}><MenuItem style={{margin: '10% 0', fontSize: '20px'}} onClick={handleClose}>Register</MenuItem></Link>
            </>
            )}
          {user && (
            <>
              <Link to={'/confirmed'} style={{textDecoration: 'none', color: 'black'}}><MenuItem style={{margin: '10% 0', fontSize: '20px'}} onClick={handleClose}>Confirmed Events</MenuItem></Link>        
              <Link to={'/profile'} style={{textDecoration: 'none', color: 'black'}} ><MenuItem style={{margin: '10% 0', fontSize: '20px'}} onClick={handleClose}>Profile</MenuItem></Link>
              <Link to={'/logout'} style={{textDecoration: 'none', color: 'black'}} ><MenuItem style={{margin: '10% 0', fontSize: '20px'}} onClick={handleClose}>Logout</MenuItem></Link> 
            </>
          )}
      </Menu>
    </div>
  );
}


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// function BasicModal({confirmEvent, setConfirmEvent}) {

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  

//   return (
//     <div key={confirmEvent.id}>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style} style={{color:'black'}}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Events Reserved
//           </Typography>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             {
//               confirmEvent.map((confirmed)=> {
//                   return(
//                     <div key={confirmed.id}>
//                           <div>{confirmed.title}</div>
//                           <CancelIcon onClick={()=> handledelete(confirmed)}/>
//                     </div>
//                   )
//               })
//             }
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }