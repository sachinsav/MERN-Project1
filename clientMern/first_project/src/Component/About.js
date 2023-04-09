import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  
  const [userdata, setuserData] = useState({name:"", email:"",phone:"", work:""})
  const navigate = useNavigate()
  const callAboutPage = async () => {

    const res = await fetch("http://localhost:3000/about", {
      method: "GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials: "include"
    })

    const data = await res.json()
    console.log(data)
    setuserData(data)
    if(res.status !== 200){
      console.log(res)
      navigate('/signin')
    }
  }
  useEffect(()=>{
    callAboutPage()
  }, [])
  return (
    <>
    <div className='container'>
    <div className='row mt-3'>
        <div className='col-3'>
          <label>Name: </label>
        </div>
        
        <div className='col-8'>
          <p>{userdata.name}</p>
        </div>
      
    </div>
    <div className='row mt-3'>
        <div className='col-3'>
          <label>Email: </label>
        </div>
        
        <div className='col-8'>
          <p>{userdata.email}</p>
        </div>
      
    </div>

    <div className='row mt-3'>
        <div className='col-3'>
          <label>Phone: </label>
        </div>
        
        <div className='col-8'>
          <p>+{userdata.phone}</p>
        </div>
      
    </div>

    <div className='row mt-3'>
        <div className='col-3'>
          <label>Profession: </label>
        </div>
        
        <div className='col-8'>
          <p>{userdata.work}</p>
        </div>
      
    </div>




    </div>

    </>
  )
}

export default About