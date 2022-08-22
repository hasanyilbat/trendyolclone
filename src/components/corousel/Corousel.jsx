import React from "react";
import guess from "../../assets/guess.png";

const Corousel = () => {
  return (
    <div className="carousel w-[1200px] mx-auto h-20 carousel-style z-0">
      <div id="slide3" className="carousel-item relative w-full z-0">
        <div className="absolute left-12 top-2">
          <div className="cursor-pointer flex flex-row gap-16 bg-white">
            <div className="flex flex-col">
              <img
                src={guess}
                alt=""
                className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
              />
              <p>Guess</p>
            </div>

            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
            <img
              src={guess}
              alt=""
              className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
            />
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-0 ">
          <a href="#slide2">❮</a>
          <a href="#slide4">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full ">
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-0">
          <a href="#slide3">❮</a>
          <a href="#slide1">❯</a>
        </div>
        <div className="cursor-pointer flex flex-row gap-16 absolute left-12 top-2">
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
          <img
            src={guess}
            alt=""
            className="bg-cover bg-center h-16 w-16 rounded-full object-filled"
          />
        </div>
      </div>
    </div>
  );
};

export default Corousel;
