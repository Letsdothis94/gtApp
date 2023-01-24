import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../utils/http'

function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    let navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await http.post("/login", userDetails)
            localStorage.setItem("token", data)
            navigate('/')
            console.log(data)
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 400) {
                setError(error.response.data)
            }
        }
    };


  return (
      <div>Login
          <form onSubmit={handleSubmit}>
              <input type='text' name='email' placeholder='email' onChange={handleChange} /><br />
              <input type='password' name='password' placeholder='password' onChange={handleChange} /><br />
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

export default Login