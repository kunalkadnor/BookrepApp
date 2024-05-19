import React from 'react';
import { useForm } from "react-hook-form";
import Login from './Login';

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='flex h-screen items-center justify-center '>
    <div id="my_modal_3" className="border-2 shadow-md p-9 rounded-xl text-black w-[450px]">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        
        <h3 className="font-bold text-lg mb-5">Sign Up</h3>
        <span >Name</span><br></br>
        <input type="text" placeholder="Enter your name" className="w-80 px-3 border mt-1 bg-white rounded-md" {...register("name", { required: true })}/>
        <br/>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        <br>
        </br>
        <h3 className="font-bold text-lg mb-5"></h3>
        <span >Email</span><br></br>
        <input type="email" placeholder="Email ID" className="w-80 px-3 border mt-1 bg-white rounded-md" {...register("email", { required: true })}/><br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        <br>
        </br>
        <div className="mt-5">
        <span >Password</span><br></br>
        <input type="password" placeholder="Password" className="w-80 px-3 border mt-1 bg-white rounded-md" {...register("password", { required: true })}/><br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className="flex justify-around mt-5">
        <button className="bg-black text-white p-2 rounded-md"> Sign Up</button> <p className="p-2">registered <a  className="text-blue-400 underline cursor-pointer"  onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</a></p>
        <Login/>
        </div>
        </form >
      </div>
      
    </div>
    
    </div>
    
  )
}

export default SignUp