import React from "react";

function Products() {
  return (
    <section className="mx-8 md:container md:flex gap-40 items-center my-8 md:my-32 ">
      <div className="left self-center">
        <h1 className="text-xl md:text-4xl font-semibold my-2">Craving <span className=" text-red-900">Burger?</span></h1>
        <h4 className="my-4 text-lg md:text-2xl">Lorem ipsum dolor sit.</h4>
        <p className="font-thin leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Ea obcaecati vero dignissimos minus esse culpa sunt alias in harum voluptatum?
        </p>
        <div className="my-4 md:my-8 space-x-2 md:space-x-10 text-white ">
          <button className="py-1 px-1 md:px-4 bg-red-900 hover:bg-yellow-700 rounded-md">Button</button>
          <button className="py-1 px-1 md:px-4 bg-red-900 hover:bg-yellow-700 rounded-md">Button 2</button>
        </div>
      </div>
      <div className="right">
        <img className="" src="./burger/hero.png" alt="" />
      </div>
    </section>
  );
}

export default Products;
