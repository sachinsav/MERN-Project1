import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'


const Logout = () => {
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate()
    const callLogout = async () => {
    const res = await fetch("http://localhost:3000/logout", {
      method: "GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials: "include"
    })
    if(res.status===200){
      dispatch({type:"USER", islogin: false})
        navigate('/')
    }
    }
  useEffect(()=>{
    callLogout()
  }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout