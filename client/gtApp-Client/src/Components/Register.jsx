import React from 'react'
import http from '../utils/http'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';



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
            //  localStorage.setItem("token", JSON.stringify(data)); 
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
    <div className='maindiv'>
        <div className='formoutbody'>
            <form onSubmit={handleSubmit} className='formbody'>
                <h2 className='formlabel'>SIGN UP</h2>
                  <p className='pform'>Email</p>
                <TextField id="outlined-basic" label="E-mail or username" variant="outlined" name='email' onChange={handleChange} /><br />
                {/* <input type='text' name='email' placeholder='email' onChange={handleChange}/><br /> */}
                <p className='pform'>Password</p>
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' name='password' onChange={handleChange} /><br />
                {/* <input type='password' name='password' placeholder='password' onChange={handleChange}/><br /> */}
                {error && (
                    <div>
                        <p>{error}</p>
                    </div>
                )}
                <Button style={{marginTop:'10px', width:'38%'}} variant="contained" type='submit'>Submit</Button>
                {/* <button type='submit'>Submit</button> */}
                <hr  style={{width:'80%', margin:'10%'}}/>
                <div>
                    <p style={{color:'black'}}>Already a user? <Link to='/login'>LOGIN</Link></p>
                </div>
            </form>
      </div>
    </div>
  )
}

export default Register