import React from "react";
import SideBar from "../SideBar";
import { Routes,Route } from "react-router-dom";
import Login from "../Login";
import SignUp from "../SignUp";
const MainComponent=()=>{
    return(
        <>
          <div className=' d-flex flex-row  justify-content-start vw-100'>
              <SideBar/>
          <div>
               <Routes>
                    <Route path='/home' element={
                        <>
                            <h1 className='mt-4 p-4'>Welcom to Home Page</h1>
                            <Login/>
                        </>
                    }></Route>
                    <Route path='/about' element={
                        <>
                            <h1 className='mt-4 p-4'>Welcom to About Page</h1>
                        </>
                    }></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/signup' element={<SignUp/>}></Route>
               </Routes>
            </div>
              
         
          </div>
            
        </>
    )
}

export default MainComponent;