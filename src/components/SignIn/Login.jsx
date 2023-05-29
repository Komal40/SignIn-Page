import React, { useEffect, useState } from 'react'
import './Login.css'
import { Typography, Button, TextField } from '@mui/material'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { TfiTwitterAlt } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

export default function Login() {

    const [userData, setUserData] = useState()

    useEffect(()=>{
        localStorage.setItem('value', userData)
    },[userData])


    function getData(e){
        e.preventDefault()
        const data = localStorage.getItem('value')
        console.log(data)
    }

    return (
        <div className='container'>
            <div className='twitter-icon'>
                <TfiTwitterAlt />
            </div>
            <div className='inner-container'>
                <Typography component="h1" variant="h5" style={{ margin: 'auto' }}>
                    Sign In To Twitter
                </Typography>

                <div onClick={()=>alert('clicked')} className='sign-container'>
                    <div className='google'>
                        <span className='icon'><FcGoogle /></span>
                        <span>Sign in with Google</span>
                    </div>
                </div>

                <div className='sign-container'>
                    <div className='google'>
                        <span className='icon'><BsApple /></span>
                        <span style={{ fontSize: '18px' }}>Sign in with Apple</span>
                    </div>
                </div>

                <form >
                    <TextField id="outlined-basic"
                        label="Phone, userName or email"
                        variant="outlined"
                        style={{ width: '25vw', margin: '30px 0px' }}
                        onChange={(e)=>setUserData(e.target.value)}
                    />
                    <button className='btn' onClick={getData}>
                        Next
                    </button>

                    <div className='sign-container'>
                        <div className='google'>
                            <span style={{ fontSize: '18px' }}>Forgot password?</span>
                        </div>
                    </div>
                </form>

            </div>
            <div className='signUp'>
                <div className='space'>
                    <span>Don't have an account? </span>
                    <span><Link to='/signup'>SignUp</Link></span>
                </div>
            </div>
        </div>
    )
}


