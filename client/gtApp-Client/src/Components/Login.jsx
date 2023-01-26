import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../utils/http'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
            localStorage.setItem("token", JSON.stringify(data));
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
      <div className='maindiv'>
        <div className='formoutbody'>
              <form onSubmit={handleSubmit} className='formbody'>
                  <h2 className='formlabel'>LOGIN</h2>
                  <p className='pform'>Email</p>
              {/* <input type='text' name='email' placeholder='email' onChange={handleChange} /><br /> */}
              <TextField id="outlined-basic" label="E-mail or username" variant="outlined" name='email' onChange={handleChange} /><br />
                  <p className='pform'>Password</p>
              {/* <input type='password' name='password' placeholder='password' onChange={handleChange} /><br /> */}
              <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name='password' onChange={handleChange} /><br />
              {error && (
                  <div>
                      <p>{error}</p>
                  </div>
              )}
              <Button style={{marginTop:'10px', width:'38%'}} variant="contained" type='submit'>LOGIN</Button><br />
              {/* <button type='submit'>Submit</button> */}
              <hr style={{ width: '80%', margin: '10%' }} />
              <div>
                  <div>
                          <p style={{ color: 'black' }}>Need an account? <Link to='/register'>SIGN UP</Link></p>
                  </div>
              </div>
          </form>
        </div>
      </div>
  )
}

export default Login