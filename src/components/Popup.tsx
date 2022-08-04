import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FcLike } from "react-icons/fc";

interface PopupProps {
  setTogglePopup: (arg: boolean) => void;
}

const Popup: FC<PopupProps> = ({ setTogglePopup }) => {
  return (
    <div className="fixed z-50 left-0 top-0 w-full min-h-screen	 bg-black bg-opacity-30">
      <div className="absolute window  bg-white top-32 right-1/2 text-black translate-x-2/4	">
        <div className="flex">
          <div className="slider">
            <img height="600"
                 width="450"
                 src="https://basket-05.wb.ru/vol765/part76523/76523709/images/big/1.jpg"
                 alt="" />
          </div>
          <div className="content p-4 max-w-sm relative">
            <button
              onClick={() => setTogglePopup(false)}
              className="absolute right-2 top-2 text-2xl">
              <IoMdClose />
            </button>
            <h2>BULLCAPTAIN / Купальник жен..</h2>

            <div className="flex gap-2">
              <div className="rating">3/5</div>
              <span>391 отзыв</span>
              <span>Артукул: <span>B1242412</span></span>
            </div>
            <div className="price">
              <span>2 304 Р</span>
              <span>6 400 Р</span>
            </div>
            <div><span>Состав:</span>
              <ul>
                <li>Полиамид 82%</li>
                <li>Эастан 18%</li>
              </ul>
            </div>
            <button className="bg-green-600 px-4 py-2 text-white">Добавить в корзину</button>
            <button className="ml-2 p-3"><FcLike /></button>
            <div className="flex flex-col">
              <span>Бесплатная доставка</span>
              <span>21 день на возврат</span>
            </div>
            <Link
              to="/product"
              className="inline-block p-2 text-white bg-green-600"
            >Больше информации о товаре</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;