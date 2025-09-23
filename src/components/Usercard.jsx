import React from 'react'

const Usercard = ({user}) => {
    const {firstName, lastName, photoUrl, age, gender, about}=user
    console.log(user)
  return (
    <div>
        
        <div className="card bg-base-300 w-96 shadow-sm ">
  <figure>
    <img
      src={user.photoUrl}
      alt="photo url" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " "+ lastName}</h2>
    <p>{about}</p>
    <div className="card-actions justify-between my-4 ">
      <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Usercard