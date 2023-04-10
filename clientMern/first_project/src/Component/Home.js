import React, { useEffect, useReducer, useState } from 'react'
import { UserContext } from '../App'

const Home = () => {
  const {state, dispatch} = useReducer(UserContext)

  const [name, setName] = useState("")
  const [islogin, setisLogin] = useState(false)

  const verifyUser = async ()=>{
    const res = await fetch("http://localhost:3000/getData", {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
      credentials:'include'
    })

    const data = await res.json()

    if(res.status===200){
      console.log(data)
      setName(data.name)
      console.log("dispatch is getting called...")
      dispatch({type:"USER", islogin:true})
      setisLogin(true)
    }
  }

  useEffect(()=>{
    verifyUser()
  }, [])
  return (
    <div className='container'>
      <h2 style={{textAlign: 'center', marginTop:'100px'}}> Welcome </h2>
      <h1 style={{textAlign: 'center'}}> {name}</h1>
      <h3  style={{textAlign: 'center'}}>{islogin? 'Happy, to see you back ' : 'We Are the MERN Developer'}</h3>
      

    </div>
  )
}

export default Home