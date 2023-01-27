import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
      <div className='footer-cont' style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', padding: '1%', backgroundImage: "linear-gradient( #1A1A1D, #000)" }}>
        <h4 style={{display: 'flex', alignItems: 'center', gap: '5px'}}>Copyright <CopyrightIcon/> GT APP</h4>
    </div>
  )
}

export default Footer