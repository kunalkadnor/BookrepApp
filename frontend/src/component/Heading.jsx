import React from 'react'
import book from "/book.png"
function Heading() {
  return(
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row text-black">
        <div className="order-2 md:order-1 mt-14 w-full md:w-1/2  md:mt-24 ">
            <div className="space-y-12">
                <h1 className="text-4xl font-bold ">
            Learn and read from any where and any time at our site</h1>
            <p>Welcome to our Bookstore site - Your Gateway to Literary Adventures! Discover a world of books that inspire, educate, and entertain.</p>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow text-white" placeholder="Email" />
</label>
            </div>
            <button className="btn btn-active  mt-4 hover:bg-green-400 hover:text-white cursor-pointer ">Submit</button>
            </div>
        <div className="w-full md:w-1/2 order-1">
            <img src={book} className='mt-20 md:mt-10 w-92 h-92 p-3'/>
            </div>
    </div>
    </>
  )
  
}

export default Heading