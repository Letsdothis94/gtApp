import React from 'react'
import { useEffect } from 'react'

function Logout() {
    useEffect(() => {
        localStorage.removeItem('token')
        window.location = '/';
    }, []);

  return (
    <div>
        <h1>Logout Page</h1>
    </div>
  )
}

export default Logout