import React, { use, useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [emailId, setEmailId]=useState("prabhas@gmail.com");
    const [password, setPassword]=useState("Prabhas@123");
    const [error, setError]=useState("")
    const navigate=useNavigate()

    const dispatch=useDispatch()

    const handleLogin= async()=>{
        
        try{
            const res=await axios.post(BASE_URL+'/login',{
                emailId,password
            },{withCredentials:true}
        )
        console.log(res.data)
        dispatch(addUser(res.data))
        navigate('/')

        }
        catch(err){
            console.error(err);
            setError(err?.response?.data ||"Something went wrong")
        }
    }
    

  return (
    <div className='flex justify-center my-10'>
        <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">Email id</legend>
  <input type="text" className="input" value={emailId} 
  onChange={(e)=>setEmailId(e.target.value)}
  />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" value={password}
  onChange={(e)=>setPassword(e.target.value)}
  />
  
</fieldset>
    </div>
    <p classname="text-red-500">{error}</p>
    <div className="card-actions justify-center my-2">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login