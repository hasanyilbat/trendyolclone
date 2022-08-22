import React from "react";

const topBar = () => {
  return (
    <div className=" w-[1200px] mx-auto flex justify-end text-xs gap-x-3 text-gray-500  p-2">
      <a href="" className="hover:text-black">
        İndirim Kuponları
      </a>
      <a href="" className="hover:text-black">
        Trendyol'da Satış Yap
      </a>
      <a href="" className="hover:text-black">
        Yardım & Destek
      </a>
    </div>
  );
};

export default topBar;
