import React, { useEffect, useState } from 'react'

const Contact = () => {


    
    const [userData, setuserData] = useState({name:"", email:"", subject:"", msg:""})
    const getData = async ()=>{
        const res = await fetch('http://localhost:3000/getData',{
            method: "GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials: "include"
        })
        const data = await res.json()
        console.log(res)
       
        if(res.status===200){
            
            setuserData({...userData, name:data.name, email: data.email})
        }
        
    }
    let key, value;
    const handleInput = (e) => {
        key = e.target.name;
        value = e.target.value;
        setuserData({...userData, [key]:value})
    }

    useEffect( () => {
        getData()
    }, [])

    const sendComment = async (e) => {
        e.preventDefault()
        console.log("saveComment")
        const {name, email, subject, msg} = userData
        const res = await fetch("http://localhost:3000/saveComment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify({
                name, email, subject, msg
            })
        }
        
        )
        console.log(res)
        if(res.status===200){
            alert("Comment posted successfully");
            setuserData({...userData, subject:"", msg:""})

        }else{
            alert("Some error Occured")
        }
    }


  return (
    <>

<section className="mb-4 container">

    
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

       
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">

               
                <div className="row">

                  
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" value={userData.name} onChange={handleInput} className="form-control"/>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                        <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" value={userData.email} onClick={handleInput} className="form-control"/>
                            
                        </div>
                    </div>
                    

                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                        <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" value={userData.subject} onChange={handleInput} className="form-control"/>
                            
                        </div>
                    </div>
                </div>
                

               
                <div className="row">

                   
                    <div className="col-md-12">

                        <div className="md-form">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" name="msg" rows="2" value={userData.msg} onChange={handleInput} className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
                
                <div className="text-center text-md-left">
                <button type="button" className="btn btn-primary" onClick={sendComment}>Send2</button>
            </div>
            </form>

            
            <div className="status"></div>
        </div>
 

      
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>

    </>
  )
}

export default Contact