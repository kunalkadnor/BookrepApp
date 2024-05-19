import React from "react";

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              className="h-80 mt-4 rounded-md"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline hover:bg-green-400 hover:text-white duration-400 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
