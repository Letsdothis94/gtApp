import React from 'react'
import http from '../utils/http'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register(){
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails((prev) => {
            return {...prev, [name]: value};
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { data } = await http.post("/signup", userDetails)
             localStorage.setItem("token", data)
             navigate('/')
             console.log(data)
    
        // try {
        //     const {data} = await http.post("/signup", userDetails)
        //     localStorage.setItem("token", data)
        //     navigate('/')
        //     console.log(data)
        // } catch (error) {
        //     console.error(error);
        //     if (error.response && error.response.status === 400) {
        //         setError(error.response.data)
        //     }
        // }

    };
  return (
    <div>Register
        <form onSubmit={handleSubmit}>
            <input type='text' name='email' placeholder='email' onChange={handleChange}/><br />
            <input type='password' name='password' placeholder='password' onChange={handleChange}/><br />
            {error && (
                <div>
                    <p>{error}</p>
                </div>
            )}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register