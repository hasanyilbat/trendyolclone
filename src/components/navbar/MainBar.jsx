import React from "react";
import trendyol_icon from "../../assets/trendyol_icon.png";
import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import GirisYap from "./GirisYap";

const MainBar = () => {
  return (
    <div className="w-[1200px] mx-auto flex justify-between items-center">
      <div>
        <img src={trendyol_icon} alt="" style={{ width: "146px" }} />
      </div>
      <div className="relative">
        <input
          type="text"
          className=" p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-100 outline-orange-400 w-[600px] h-11 "
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        />

        <span className="absolute inset-y-0 inline-flex items-center right-4">
          <button className="font-bold">
            <BsSearch color="orange" style={{ strokeWidth: "1" }} />
          </button>
        </span>
      </div>
      <div className="flex">
        <div>
          <button className="flex p-2 justify-center items-center hover:text-orange-600 group">
            <IoPersonOutline style={{ fontSize: "1.1rem" }} />
            <p className="text-sm font-semibold ml-2">Giriş Yap</p>
            <div className="relative hidden group-hover:block z-20">
              <GirisYap />
            </div>
          </button>
        </div>
        <div>
          <button className="flex p-2 justify-center items-center hover:text-orange-600 ">
            <IoHeartOutline style={{ fontSize: "1.1rem" }} />
            <p className="text-sm font-semibold ml-2">Favorilerim</p>
          </button>
        </div>
        <div>
          <button className="flex p-2 justify-center items-center hover:text-orange-600">
            <IoCartOutline style={{ fontSize: "1.1rem" }} />
            <p className="text-sm font-semibold ml-2">Sepetim</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
