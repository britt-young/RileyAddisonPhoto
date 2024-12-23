import React from "react";
import { useNavigate } from "react-router-dom";

// saved images
import group from "../assets/img/mason-grad.jpeg";
import fam from "../assets/img/black-fam.jpg";
import grad from "../assets/img/senior-boy.png";

const PortfolioCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Gallery");
    console.log("Button clicked");
  };

  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-4 gap-5 m-10">
      {/* portfolio cards */}

      {/* First card */}
      <figure className="relative w-full h-full flex p-1 ">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink shadow-lg shadow-black/55"
          src={grad}
          alt="senior"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <p className="mt-0 font-body uppercase md:text-base text-sm font-bold leading-relaxed black hidden sm:flex">
              Senior Portraits
            </p>
            <button
              className="group relative inline-block focus:outline-none focus:ring"
              onClick={handleClick}
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-lightp/50 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

              <span className="relative inline-block border-2 border-grey px-2 py-1 text-sm font-semibold font-body">
                see gallery
              </span>
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Second card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink shadow-lg shadow-black/55"
          src={fam}
          alt="family"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <p className="mt-0 font-body uppercase md:text-base text-sm font-bold leading-relaxed black hidden sm:flex">
              Family Portraits
            </p>
            <button
              className="group relative inline-block focus:outline-none focus:ring"
              onClick={handleClick}
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-lightp/50 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

              <span className="relative inline-block border-2 border-grey px-2 py-1 text-sm font-semibold font-body ">
                see gallery
              </span>
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Third card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink shadow-lg shadow-black/55"
          src="https://images.unsplash.com/photo-1631337092192-957d5c86e417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="couples"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <p className="mt-0 font-body uppercase md:text-base text-sm font-bold leading-relaxed black hidden sm:flex">
              Couples Sessions
            </p>
            <button
              className="group relative inline-block focus:outline-none focus:ring"
              onClick={handleClick}
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-lightp/50 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

              <span className="relative inline-block border-2 border-grey px-2 py-1 text-sm font-semibold font-body">
                see gallery
              </span>
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Fourth card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink shadow-lg shadow-black/55"
          src={group}
          alt="group"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <p className="mt-0 font-body font-bold uppercase md:text-base text-sm leading-relaxed black hidden sm:flex">
              Group Sessions
            </p>
            <button
              className="group relative inline-block focus:outline-none focus:ring"
              onClick={handleClick}
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-lightp/50 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></span>

              <span className="relative inline-block border-2 border-grey px-2 py-1 text-sm font-semibold font-body">
                see gallery
              </span>
            </button>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default PortfolioCards;
