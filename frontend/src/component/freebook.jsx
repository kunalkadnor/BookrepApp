import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import list from "../../public/list.json";
import Cards from './Cards';

function FreeBook() {
    const freeData=list.filter((data)=>data.price==="free")
    console.log(freeData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-bold text-xl text-black">Free available books</h1>

    </div>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-3 mt-5">
    <div className='pb-5'>
    <Slider {...settings}>
        {freeData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook