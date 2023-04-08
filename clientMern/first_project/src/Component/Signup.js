
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {

  const [user, setUser] = useState({
    name:"",
    phone:"",
    email:"",
    work:"",
    password:"",
    cpassword:""
  })
  const navigate = useNavigate()

  let key,value;
  const handleInput = (e) => {
    key= e.target.name;
    value = e.target.value;
    setUser({...user,[key]:value})
  }

  const registerUser = async (e) =>  {
    e.preventDefault()
    const {name, phone, email, work, password, cpassword} = user
    console.log("before making api call")
    
    const res = await fetch("http://localhost:3000/register",{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, phone, email, work, password, cpassword
      })
    })
    console.log("after making api call")
    
    console.log(res)
    const data = await res.json()
    
    
    if(res.status!==200){
      console.log(data)  
      window.alert(data.msg)
    }else{
      window.alert(data.msg)
      navigate("/signin")
    }

  }

  return (
    <>
    <section className="vh-100" style={{"background-color": "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{"border-radius": "25px;"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" for="name">Your Name</label>
                      <input type="text" id="name" name="name" value={user.name} onChange={handleInput} className="form-control" />
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="email">Your Email</label>
                      <input type="email" id="email" name="email" value={user.email} onChange={handleInput} className="form-control" />
                      
                    </div>
                    
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="phone">Your Phone</label>
                      <input type="test" id="phone" name="phone" value={user.phone} onChange={handleInput} className="form-control" />
                      
                    </div>
                    
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="prof">Your Profession</label>
                      <input type="text" id="prof" name="work" value={user.work} onChange={handleInput} className="form-control" />
                      
                    </div>
                    
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="password">Password</label>
                      <input type="password" id="password" name="password" value={user.password} onChange={handleInput} className="form-control" />
                      
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" for="cpassword">Confirm password</label>
                      <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInput} className="form-control" />
                      
                    </div>
                  </div>

                  

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={registerUser}>Register</button>
                    
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <NavLink to="/signin">already have account?</NavLink>
                    
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

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

export default Signup