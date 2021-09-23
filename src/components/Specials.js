import React from "react";

function Specials() {
  return (
    <section className="mx-8 md:container bg-gray-50">
      <div className="top md:text-center py-6 md:w-1/2 md:mx-auto">
        <h2 className="text-lg md:text-4xl my-6 font-semibold text-red-900">
          Get our specials now
        </h2>
        <h4 className="md:text-2xl">One time specials for you</h4>
        <p className=" font-light my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          corrupti consectetur tenetur modi, tempore repellendus animi quidem a
          fuga nulla amet sed aut reiciendis placeat!
        </p>
      </div>
      <div className="specials md:flex gap-2 space-y-6 my-2 md:my-16 md:py-8">
        <div className="left md:text-center shadow-lg rounded-md hover:bg-white ">
          <h5 className="md:text-2xl my-2 ">Lorem ipsum dolor sit amet.</h5>
          <h6>Lorem, ipsum dolor.</h6>
          <p className="text-sm md:text-center font-light my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, commodi.
          </p>
          <img src="./burger/s1.png" alt="" />
        </div>
        <div className="center md:text-center mb-4 -mt-6 shadow-lg rounded-md hover:bg-white  ">
          <h5 className="md:text-2xl my-2 ">Lorem ipsum dolor sit amet.</h5>
          <h6>Lorem, ipsum dolor.</h6>
          <p className="text-sm font-light my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, commodi.
          </p>
          <img src="./burger/s2.png" alt="" />
        </div>
        <div className="right md:text-center mb-8 -mt-12 shadow-lg rounded-md hover:bg-white  ">
          <h5 className="md:text-2xl my-2 ">Lorem ipsum dolor sit amet.</h5>
          <h6>Lorem, ipsum dolor.</h6>
          <p className="text-sm font-light my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, commodi.
          </p>
          <img src="./burger/s1.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Specials;
