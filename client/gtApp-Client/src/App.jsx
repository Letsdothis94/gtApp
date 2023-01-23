import { useState, useEffect } from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import Login from './Components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SelEvent from './Components/SelEvent'

function App() {
    const [selEvent, setSelEvent] = useState([])
    const [eventData, setEventData] = useState([])
    const [loginData, setLoginData] = useState({
        id: null, 
        username: null 
    })
    useEffect(()=> {
        const request = async() => {
            let req = await fetch ('http://127.0.0.1:3000/users')
            let res = await req.json()
            console.log(res)
            if (req.ok){
                setLoginData({id: res.id, username: res.username})
            }
        }
        request()
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header loginData={loginData} setLoginData={setLoginData}/>
        <Routes>
          <Route path={'/'} element={<Home eventData={eventData} setEventData={setEventData} selEvent={selEvent} setSelEvent={setSelEvent}/>}/>
          <Route path={'/login'} element={<Login loginData={loginData} setLoginData={setLoginData}/>}/> 
          <Route path={'/selEvent'} element={<SelEvent eventData={eventData} setEventData={setEventData} selEvent={selEvent} setSelEvent={setSelEvent}/>}/>
        </Routes>
      </BrowserRouter>
      {/* {console.log(loginData)} */}
    </div>
  )
}

export default App
