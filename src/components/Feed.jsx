import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
import { addfeed } from '../utils/feedSlice'
import axios from 'axios'
import Usercard from './Usercard'

const Feed = () => {

  const feed=useSelector((store)=>store.feed)
  console.log(feed)
  const dispatch=useDispatch()
  const getFeed=async()=>{
    if(feed) return
    try{
      const res=await axios.get(BASE_URL+'/feed',{withCredentials:true})
      dispatch(addfeed(res.data))
    }catch(err)
    {
          console.error(err);
          setError(err?.response?.data ||"Something went wrong")
        }
  }
  useEffect(()=>{
    getFeed()
  },[])
  return (
    feed &&(
    <div className='flex justify-center my-10'>
      <Usercard user={feed[0]} />
      </div>
      )
  )
}

export default Feed