import React from "react";
import BigMenu from "./BigMenu";

const MenuBar = () => {
  return (
    <div className="relative">
      <div className="w-[1200px] mx-auto flex gap-6 h-10 ">
        <div
          href=""
          className=" relative block text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10 kadin-link group no-underline"
        >
          KADIN
          <div className=" absolute text-black font-normal bottom-[312px] hidden group-hover:block group-hover:translate-y-[317px]">
            <BigMenu />
          </div>
        </div>

        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          ERKEK
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          ÇOCUK
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          EV & MOBİLYA
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          SUPERMARKET
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          KOZMETİK
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          AYAKKABI & ÇANTA
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          SAAT & AKSESUAR
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          ELEKTRONİK
        </a>
        <a
          href=""
          className="text-sm font-semibold p-2  hover:border-orange-500 hover:border-b-4 hover:text-orange-500 z-10"
        >
          SPOR&OUTDOOR
        </a>
      </div>
      <div className="border-b-4 border-gray  w-full absolute top-[37px]"></div>
    </div>
  );
};

export default MenuBar;
