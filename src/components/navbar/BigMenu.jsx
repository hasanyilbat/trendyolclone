import React from "react";
import navbarMenuPic1 from "../../assets/navbarMenuPic1.png";
import navbarMenuPic2 from "../../assets/navbarMenuPic2.png";

const BigMenu = () => {
  return (
    <div className="w-[1200px] flex text-sm mx-auto gap-16 p-5 absolute bg-white z-100">
      <div className="flex flex-col">
        <p className="font-bold pb-1">Giyim</p>
        <div className="underlineHover flex flex-col text-gray-700 gap-y-0.5">
          <a href="">Tişört</a>
          <a href="">Şort</a>
          <a href="">Gömlek</a>
          <a href="">Eşofman</a>
          <a href="">Pantolon</a>
          <a href="">Ceket</a>
          <a href="">Kot Pantolon</a>
          <a href="">Yelek</a>
          <a href="">Kazak</a>
          <a href="">Mont</a>
          <a href="">Takım Elbise</a>
          <a href="">Sweatshirt</a>
          <a href="">Forma</a>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold pb-1">Ayakkabı</p>
        <div className="underlineHover flex flex-col text-gray-700 gap-y-0.5">
          <a href="">Topuklu Ayakkabı</a>
          <a href="">Sneaker</a>
          <a href="">Günlük Ayakkabı</a>
          <a href="">Babet</a>
          <a href="">Sandalet</a>
          <a href="">Terlik</a>
          <p className="font-bold mt-3">Aksesuar & Çanta</p>
          <a href="">Çanta</a>
          <a href="">Saat</a>
          <a href="">Takı</a>
          <a href="">Şapka</a>
          <a href="">Cüzdan</a>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold pb-1">İç Giyim</p>
        <div className="underlineHover flex flex-col text-gray-700 gap-y-0.5">
          <a href="">Pijama Takımı</a>
          <a href="">Gecelik</a>
          <a href="">Sütyen</a>
          <a href="">İç Çamaşırı Takımları</a>
          <a href="">Fantezi Giyim</a>
          <a href="">Çorap</a>
          <p className="font-bold mt-3">Lüks & Designer</p>
          <a href="">Lüks Çanta</a>
          <a href="">Lüks Giyim</a>
          <a href="">Lüks Ayakkabı</a>
          <a href="">Tasarım Giyim</a>
          <a href="">Tasarım Ayakkabı</a>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold pb-1">Kozmetik</p>
        <div className=" underlineHover flex flex-col text-gray-700 gap-y-0.5">
          <a href="">Parfüm</a>
          <a href="">Göz Makyajı</a>
          <a href="">Cilt Bakım</a>
          <a href="">Saç Bakım</a>
          <a href="">Makyaj</a>
          <a href="">Ağız Bakım</a>
          <a href="">Cinsel Sağlık</a>
          <a href="">Vücut Sağlık</a>
          <a href="">Hijyenik Ped</a>
          <a href="">Duş Jeli & Kremleri</a>
          <a href="">Epilasyon Ürünleri</a>
          <a href="">Ruj</a>
          <a href="">Güneş Kremi</a>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold pb-1">Spor & Outdoor</p>
        <div className="flex flex-col text-gray-700 gap-y-0.5 underlineHover">
          <a href="">Sweatshirt</a>
          <a href="">Tişört</a>
          <a href="">Spor Sütyeni</a>
          <a href="">Tayt</a>
          <a href="">Eşofman</a>
          <a href="">Koşu Ayakkabısı</a>
          <a href="">Spor Çantası</a>
          <a href="">Spor Ekipmanları</a>
          <a href="">Outdoor Ayakkabı</a>
          <a href="">Kar Botu</a>
          <a href="">Outdoor Ekipmanları</a>
          <a href="">Sporcu Besinleri</a>
          <a href="">Sporcu Aksesuarları</a>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <a href="">
          <img src={navbarMenuPic1} alt="" />
        </a>
        <a href="">
          <img src={navbarMenuPic2} alt="" />
        </a>
      </div>
    </div>
  );
};

export default BigMenu;
