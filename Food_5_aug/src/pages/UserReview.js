import React from 'react'
import pic1 from "../assets/pranjal_profile-removebg-preview.png"
import "./UserReview.css";

const UserReview = () => {
  const Handler=()=>{
    console.log('hello')
    document.getElementById('img').style({
      opacity:'0'
    })
  }
  return (
    <div>
    <div className='header'>
       <h2>our happy customers</h2>

    </div>
    <div className='card'>
      {/* <img  src={pic1} alt='' className='img' id="img" onMouseOver={Handler}/> */}
    </div>
    </div>
  )
}

export default UserReview
