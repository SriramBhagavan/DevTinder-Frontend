import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { addfeed } from '../utils/feedSlice'
import Usercard from './Usercard'

const Feed = () => {
  const [error, setError] = useState(null)
  const feed = useSelector((store)=>store.feed)
  const dispatch = useDispatch()

  const getFeed = async () => {
    if (feed && feed.length > 0) return; 
    try {
      const res = await axios.get(`${BASE_URL}/feed`, { withCredentials: true })
      dispatch(addfeed(res.data))
    } catch (err) {
      console.error(err);
      setError(err?.response?.data || "Something went wrong");
    }
  }

  useEffect(()=>{ getFeed() }, [])

  if (error) return <h1 className="flex justify-center my-10">{error}</h1>
  if (!feed) return null
  if (feed.length <= 0) return <h1 className="flex justify-center my-10">No new users found</h1>

  return (
    <div className="flex justify-center my-10">
      <Usercard user={feed[0]} />
    </div>
  )
}

export default Feed
