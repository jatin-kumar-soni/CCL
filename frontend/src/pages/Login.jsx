import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const {backendUrl,token,setToken} = useContext(AppContext)

  const navigate = useNavigate()

  const [state,setState] = useState('Sign Up');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler= async (event)=>{
  event.preventDefault()

  try {

    if(state === 'Sign Up')
    {

      const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email})
      if(data.success)
      {
        localStorage.setItem('token',data.token)
        setToken(data.token)
      }
      else
      {
        toast.error(data.message)
      }

    }
    else
    {
       const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
      if(data.success)
      {
        localStorage.setItem('token',data.token)
        setToken(data.token)
      }
      else
      {
        toast.error(data.message)
      }
    }
    
  } catch (error) {

    toast.error(error.message)
    
  }

  }

  useEffect(()=>
  {
    if(token)
    {
        navigate('/')
    }
  })
  return (
   <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-sl text-zinc-600 text-sm shadow-lg'>
      <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" :"Login"}</p>
      <p>
         Please {state === 'Sign Up' ? "Sign Up" :"Log in"} to book Appointment
      </p>
      {
        state === "Sign Up" && 
      
      <div className='w-full'>
        <p>Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 m-1' type='text' onChange={(e)=>setName(e.target.value)} value={name} />
      </div>
}
       <div  className='w-full'>
        <p>Email</p>
        <input className='border border-zinc-300 rounded w-full p-2 m-1'  type='email' onChange={(e)=>setEmail(e.target.value)} value={email} />
      </div>
       <div  className='w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 m-1'  type='password' onChange={(e)=>setPassword(e.target.value)} value={password} />
      </div>
      <button type='submit' className='bg-blue-500 text-white w-full py-2 rounded-md text-base' >{state === 'Sign Up' ? "Create Account" :"Login"}</button>
      {state === "Sign Up"
      ? <p> Already have an Account? <span  onClick={()=>setState('Login')}className='text-blue-500 underline cursor-pointer'> login Here</span></p>
      : <p> Create a new Account? <span onClick={()=>setState('Sign Up')} className='text-blue-500 underline cursor-pointer'>Click Here</span></p>
      }
    </div>
   </form>
  )
}

export default Login