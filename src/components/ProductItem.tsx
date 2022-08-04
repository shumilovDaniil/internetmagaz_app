import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Popup from "./Popup";

const ProductItem = () => {
  const [togglePopup, setTogglePopup] = useState(false);

  return (
    <>
      <div className="relative p-4 max-w-[30%] bg-white flex flex-col gap-2">
        <Link to={"/page"}
              className="absolute cursor-pointer z-20 top-2  right-2 p-4 onSinglePage"><AiOutlineRight /></Link>
        <div className="relative">
          <img className="w-40 h-40 m-auto"
               src="https://ogorod-foodmarket.ru/image/cache/catalog/molochnye-produkty/moloko/6/428083220-moloko-prostokvashino-2-5-930-ml-650x650.png"
               alt="" />
          <div
            className="discount px-4 py-1.5 rounded-sm bg-orange-600 text-white font-medium absolute top-20 left-0">-50%
          </div>
        </div>
        <div className="price">
          <strong className="font-medium text-3xl">44,50 ₽</strong>
        </div>
        <p>Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...</p>
        <div className="rating">rating: 4/5</div>
        <button
          className="text-green-600 hover:bg-green-600 hover:text-white transition-colors border-2 border-green-600 w-full p-2 font-medium">В
          корзину
        </button>
        <button
          onClick={() => setTogglePopup(true)}
          className="text-green-600 hover:bg-green-600 hover:text-white transition-colors border-2 border-green-600 w-full p-2 font-medium">
          Быстрый просмотр
        </button>
      </div>

      {togglePopup ? <Popup setTogglePopup={setTogglePopup} /> : ""}
    </>
  );
};

export default ProductItem;