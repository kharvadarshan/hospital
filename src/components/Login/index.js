
import React, { useState } from 'react';
import { FcGoogle  } from "react-icons/fc";
import { FaFacebook  } from "react-icons/fa";
function LoginPage() {
  const [loginType, setLoginType] = useState('patient'); // Default to 'patient' login

  return (
    <div className='container-fluid border border-1 mx-5 my-5 p-3 '>
       <div className='px-3 my-3 d-flex flex-row justify-content-between'>
             <button className='fs-3  btn btn-outline-dark'> <FcGoogle /><span className='fs-3 p-2'>Google</span></button>
             <button className='fs-3   btn btn-outline-dark'> <FaFacebook /><span className='fs-3 p-2'>Facebook</span></button>
       </div>
      <div className='mx-3 my-3 d-flex flex-row justify-content-between'>
        {/* Buttons to switch login type */}
        <button
          className={`btn btn-success ${loginType === 'patient' ? 'active' : ''}`}
          onClick={() => setLoginType('patient')}
        >
          Patient Login
        </button>
        <button
          className={`btn btn-success  ${loginType === 'doctor' ? 'active' : ''}`}
          onClick={() => setLoginType('doctor')}
        >
          Doctor Login
        </button>
        <button  
        className={`btn btn-success  ${loginType === 'admin' ? 'active' : ''}`}
        onClick={() => setLoginType('admin')}>
         Admin Login
        </button>
      </div>

      {/* Dynamic Form */}
      <form className='mb-2 mx-3'>
      {loginType === 'patient' && (
        <>
        <h3 className='my-2'>Patient Login</h3>
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
        </>
      )}
        

        {/* Extra field for Doctor Login */}
        {loginType === 'doctor' && (
            <>
            <h3 className='my-2'>Doctor Login</h3>
        <div className='mb-3'>
          <label className='form-label'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>
          <div className='mb-3'>
            <label className='form-label'>Doctor ID</label>
            <input
              type='text'
              className='form-control'
              id='exampleDoctorID'
            />
          </div>
          </>
        )}

        {
            loginType==='admin' && (
               <>
               <h3 className='my-2'>Admin Login</h3>
                  <div className='mb-3'>
                    <label className='form-label'>Email address</label>
                    <input
                      type='email'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <input
                      type='password'
                      className='form-control'
                      id='exampleInputPassword1'
                    />
                  </div>
               </>
            )
        }

        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;




// import React from "react";
// import './style.css';
// import { useState,useEffect } from "react";
// const Login=()=>{
//     const [formData,setFormData]=useState({});

    
//     return (
    
//           <div className='container-fluid border border-1 mx-3 p-3' >
//               <div className='mx-3'>
//                  <button className='btn btn-success'>Patient Login</button>
//                  <button className='btn btn-success m-2'>Doctor Login</button>
//               </div>

//            <form className='mb-2 mx-3'>
//                <div className='mb-3'>
//                <label class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                </div>
//                <div className='mb-3'>
//                <label  class="form-label">Password</label>
//                <input type="password" class="form-control" id="exampleInputPassword1"/>
//                </div>
//                <button type='submit' className='btn btn-primary'>Login</button>
//            </form>

         
//           </div>

//     )
// }

// export default Login;