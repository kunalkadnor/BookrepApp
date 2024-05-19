import React from 'react';
import { useForm } from "react-hook-form";
import Login from './Login';

function Contact() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='bg-white max-w-screen text-2xl container mx-auto md:px-20 px-4  top-0 z-10 text-black mt-8'>
      <div className='mt-10 item:justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl p-9'>Contact Us</h1>
        <p className='text-sm'>If you have any questions, feedback, or need assistance, please don't hesitate to get in touch with us. We're here to help and would love to hear from you.</p>
        
        <div className='flex h-screen items-center justify-center '>
    <div id="my_modal_3" className="border-2 shadow-md p-9 rounded-xl text-black w-[750px]">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        
       
        <span >Name</span><br></br>
        <input type="text" placeholder="Enter your name" className="w-10/12 px-3 border mt-0 bg-white rounded-md" {...register("name", { required: true })}/>
        <br/>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        <br>
        </br>
        <h3 className="font-bold text-lg mb-5"></h3>
        <span >Email</span><br></br>
        <input type="email" placeholder="Email ID" className="w-10/12 px-3 border mt-1 bg-white rounded-md" {...register("email", { required: true })}/><br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        <br>
        </br>
        <div className="mt-5">
        <span >What can we help you with?</span><br></br>
        <input type="text" placeholder="Suggestion" className="w-10/12 h-40 px-3 border mt-1 bg-white rounded-md" />
        </div>
        <div className="flex justify-around mt-5">
        <button className="bg-black text-white p-2 rounded-md"> Submit</button> 
        <Login/>
        </div>
        </form >
      </div>
      
    </div>
    
    </div>
        
      </div>
    </div>
    </>
  )
}

export default Contact