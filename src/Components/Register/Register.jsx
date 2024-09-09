import React, { useContext, useState } from 'react'
import { helloapi, registerUserApi } from '../API/FoodApi';
import { FoodContext } from '../ContextAPI/FoodContext';

function Register() {
    const[message,setMessage]=useState('');
    const[registerData,setRegisterData]=useState({
        name : '',
        password : '',
        email : '',
        phone : ''
    });


    const handleChange=(event)=>{
        const {name,value} = event.target;
        setRegisterData(prevData=> ({
          ...prevData,[name] : value
        }))
    }
  const handleSubmit=(e)=>{
    e.preventDefault();
  handleRegisterApi(registerData);  
  }
  const handleRegisterApi=async()=>{
      try{
        const response = await registerUserApi(registerData);
        handleMessage(response.status);
        console.log(response.status);
    } catch(error){
        console.log("error occured");
    }
  }
  const handleMessage=(msg)=>{
    if(msg===200){
        setMessage("User Registered Successfully")
    }
    else{
        setMessage("User Not Registered")
    }
  }
  const hello=async()=>{
    try{
    const response=await helloapi();
    console.log(response.data);
  }
  catch(error){
    console.log(error)
  }
}

  return (
    <>
    <section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <div className='container-fluid d-flex justify-content-center align-items-center text-info'>
                {message ? <p className="text-center h4 text-dark bold">
                    {message}
                </p> : <p className="text-center h4 text-dark bold">Please fill 
                    the Details below</p> } 
                </div>
                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label">Name</label>
                      <input onChange={handleChange} name='name' type="text" id="form3Example1c" className="form-control" />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label">Password</label>
                      <input onChange={handleChange} name='password' type="password" id="form3Example4c" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label">Email</label>
                      <input onChange={handleChange} name='email' type="email" id="form3Example3c" className="form-control" />
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <label className="form-label">Phone</label>
                      <input onChange={handleChange} name='phone' type="number" id="form3Example4cd" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button onClick={handleSubmit}  type="button"  className="data-mdb-button-init data-mdb-ripple-init btn btn-primary btn-lg">Register</button>
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
  //   <div classNameName={style.box}>
  //       <form onSubmit={handleSubmit} classNameName={style.form}>
  //           <h1>Register</h1>
  //           {message!='' && <p>{message}</p>}
  //           <div classNameName={style.form_group}>
  //           <MdDriveFileRenameOutline classNameName={style.nameicon}/>
  //           <input onChange={handleChange} type='text' name='name' placeholder='Enter your name'></input>
  //           </div>
  //           <div classNameName={style.form_group}>
  //           <RiLockPasswordLine classNameName={style.nameicon}/>
  //           <input type='password' onChange={handleChange} placeholder='Enter your password' name='password'></input>
  //           </div>
  //           <div classNameName={style.form_group}>
  //            <MdAlternateEmail classNameName={style.nameicon}/>  
  //             <input type='email' onChange={handleChange} name='email' placeholder='Enter your email'></input>
  //           </div>
  //           <div classNameName={style.form_group}>
  //              <MdOutlinePhone classNameName={style.nameicon}/> 
  //              <input type='number' onChange={handleChange} name='phone' placeholder='Enter your contact no.'></input>
  //           </div>
  //           <div classNameName={style.form_button}>
  //               <button>Register</button>
  //           </div>
  //       </form>

  //   </div>
  // )
)}

export default Register