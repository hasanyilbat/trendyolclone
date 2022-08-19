import React from "react";
import trendyol_icon from "../../assets/trendyol_icon.png";

const MainBar = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <div>
        <img src={trendyol_icon} alt="" style={{ width: "146px" }} />
      </div>
    </div>
  );
};

export default MainBar;
