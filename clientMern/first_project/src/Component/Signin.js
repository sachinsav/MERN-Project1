import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { UserContext } from '../App';

const Signin = () => {
  const navigate = useNavigate()
  const cookies = new Cookies();
  const {state, dispatch} = useContext(UserContext)

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  let key,val;
  const handleInput = (e) => {
    key= e.target.name;
    val= e.target.value;
    setUser({...user, [key]:val})
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const {email, password} = user

    const res = await fetch("http://localhost:3000/signin",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email, password
      })

    })
    const data = await res.json()
    if(res.status === 200){
      console.log("login successfull")
      dispatch({type:"USER", islogin: true})
      cookies.set("jwtoken", data.token)
      window.alert(data.msg)
      navigate("/")
    }else{
      console.log("login failed")
      window.alert(data.msg)
    }

  }
  return (
    <>
     <section class="vh-100" style={{"background-color": "#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{"border-radius": "25px;"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>

                <form class="mx-1 mx-md-4">

                  
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="email">Your Email</label>
                      <input type="email" id="email" name="email" onChange={handleInput} class="form-control" />
                      
                    </div>
                    
                  </div>
                 
                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <label class="form-label" for="password">Password</label>
                      <input type="password" id="password" name="password" onChange={handleInput} class="form-control" />
                      
                    </div>
                  </div>


                  

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={handleLogin}>Login</button>
                    
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <NavLink to="/signup">create an account</NavLink>
                    
                  </div>
                  <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Signin