import React from 'react';
import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "../component/Cards";
function Course() {
  return(
    <>
    <div className='bg-white max-w-screen text-2xl container mx-auto md:px-20 px-4  top-0 z-10 text-black'>
      <div className='mt-28 item:justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl p-9'>Welcome to Our Courses</h1>
        <p>Our comprehensive catalog of courses is designed to cater to learners of all levels. Whether you're looking to advance your career, pick up a new hobby, or deepen your understanding of a specific subject, we have something for you. Browse through our courses and find the perfect match for your educational needs.</p>
        <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-7"> Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-2 md:grid-cols-3 p-3 gap-y-10 text-white'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
      </div>
    </div>
    </>
  );
}

export default Course