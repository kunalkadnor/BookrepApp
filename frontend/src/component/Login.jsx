import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <Link to="/">
          <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          </Link>
        
        <h3 className="font-bold text-lg mb-5">Login</h3>
        <span >Email</span><br></br>
        <input type="email" placeholder="Email ID" className="w-80 px-3 border mt-1 bg-white rounded-md" {...register("email", { required: true })} />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        <br/>
        <div className="mt-5">
        <span >Password</span><br></br>
        <input type="password" placeholder="Password" className="w-80 px-3 border mt-1 bg-white rounded-md" {...register("password", { required: true })} />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className="flex justify-around mt-5">
        <button className="bg-black text-white p-2 rounded-md"> Login</button> <p className="p-2">Not registered? <a href="/signup" className="text-blue-400 underline cursor-pointer">sign up</a></p>
        </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
