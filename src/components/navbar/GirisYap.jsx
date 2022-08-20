import React from "react";

const GirisYap = () => {
  return (
    <div className="flex flex-col items-center justify-center border-2 absolute right-[-80px] top-5 bg-white gap-3 p-2 rounded-md">
      <a
        className="inline-block px-12 py-3 text-sm w-40 h-10 font-medium text-white bg-orange-600  text-center border-2 rounded-lg flex items-center justify-center"
        href="/download"
      >
        Giriş Yap
      </a>

      <a
        className="inline-block px-12 py-3 text-sm w-40 font-medium text-black bg-white  text-center border-2 rounded-lg flex items-center justify-center h-10"
        href="/download"
      >
        Üye Ol
      </a>
    </div>
  );
};

export default GirisYap;
