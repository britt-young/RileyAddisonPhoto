import React from 'react'
import { useNavigate } from "react-router-dom";

const PortfolioCards = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/Gallery");
      console.log("Button clicked");
    };

  return (
    <div className="mt-10 bg-white h-auto w-full gap-2 grid grid-cols-1 lg:grid-cols-3">
    {/* portfolio cards */}
{/* First service card */}
<div className="p-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://cindyswansonphotography.com/wp-content/uploads/2019/01/10-8374-post/senior_portraits_in_dallas_for_guys_3.jpg"
              alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>


      {/* First card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink"
          src="https://cindyswansonphotography.com/wp-content/uploads/2019/01/10-8374-post/senior_portraits_in_dallas_for_guys_3.jpg"
          alt="senior portrait"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <h5 className="font-sans lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
              Senior Portrait
            </h5>
            <p className="mt-0 font-sans md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
              Jordan Ryan
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Second card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink"
          src="https://www.mintarrow.com/wp-content/uploads/2021/12/RESIZED-Family-04278-1097x1536.jpg"
          alt="family portrait"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <h5 className="font-sans lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
              Family Portrait
            </h5>
            <p className="mt-0 font-sans md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
              Johnson Family
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
          </div>
        </figcaption>
      </figure>

      {/* Third card */}
      <figure className="relative w-full h-full flex p-1">
        <img
          className="object-cover object-center .max-w-full .h-auto flex-shrink"
          src="https://th.bing.com/th/id/R.b3a33c7d7b01415e22e1ac1a010009eb?rik=dRK0X0qJaNfiBQ&pid=ImgRaw&r=0"
          alt="senior portrait"
        />
        <figcaption className="absolute bottom-4 inset-x-0 mx-4 flex-col lg:flex-row justify-between items-center rounded-xl border border-white bg-white/75 p-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm flex">
          <div className="text-center md:text-left">
            <h5 className="font-sans lg:text-xl text-base font-semibold leading-snug tracking-normal text-blue-gray-900 hidden sm:flex">
              Senior Portrait
            </h5>
            <p className="mt-0 font-sans md:text-base text-sm font-normal leading-relaxed text-gray-700 hidden sm:flex">
              Alex Bush
            </p>
            <button
              onClick={handleClick}
              type="button"
              className="bg-white mt-1 py-1 px-3 md:text-base text-sm shadow-md text-black rounded-lg"
            >
              see more
            </button>
          </div>
        </figcaption>
      </figure>
      </div>
  )
}

export default PortfolioCards