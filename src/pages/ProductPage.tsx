import React from "react";
import { Link } from "react-router-dom";
import { GrLike } from "react-icons/gr";

const ProductPage = () => {
  return (
    <div className="text-black text-xl ">
      <Link className="text-white inline-block mb-4" to={`/`}>К товарам</Link>
      <div className="flex gap-14 mb-5">
        <div className="slider max-w-2xl">
          <div className="flex flex-col gap-10">
            <img src="https://bel-produkt.ru/image/cache/catalog/i/nb/og/0824117b046b9793a44c470b40606648-1200x800.jpg"
                 alt="" />
            <div className="flex justify-between">
              <img className="w-1/5"
                   src="https://bel-produkt.ru/image/cache/catalog/i/nb/og/0824117b046b9793a44c470b40606648-1200x800.jpg"
                   alt="" />
              <img className="w-1/5"
                   src="https://bel-produkt.ru/image/cache/catalog/i/nb/og/0824117b046b9793a44c470b40606648-1200x800.jpg"
                   alt="" />
              <img className="w-1/5"
                   src="https://bel-produkt.ru/image/cache/catalog/i/nb/og/0824117b046b9793a44c470b40606648-1200x800.jpg"
                   alt="" />
              <img className="w-1/5"
                   src="https://bel-produkt.ru/image/cache/catalog/i/nb/og/0824117b046b9793a44c470b40606648-1200x800.jpg"
                   alt="" />
            </div>
          </div>
        </div>
        <div className="product-info bg-white px-10 py-4 ">
          <h2 className="text-4xl">Товар 1</h2>
          <span className="text-2xl">Цена: 543 312 ₽</span>
          <div className="flex ">
            <div className="flex flex-col">
              <span>Забрать</span>
              <span className="text-blue-600">сегодня</span>
              <span>Доставка</span>
              <span className="text-blue-600">через 3 дня</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span>21 просмотр</span>
            <span className="inline-flex items-center">10 <GrLike className="ml-2 " /></span>
          </div>
        </div>
      </div>

      <nav className="nav bg-white p-4">
        <ul className="flex gap-3 text-lg ">
          <li>
            <button>О товаре</button>
          </li>
          <li>
            <button>Характеристики</button>
          </li>
          <li>
            <button>Услуги <span className="font-bold">5</span></button>
          </li>
          <li>
            <button>Обзоры <span className="font-bold">3</span></button>
          </li>
          <li>
            <button>Отзывы <span className="font-bold">26</span></button>
          </li>
          <li>
            <button>Вопрос-ответ <span className="font-bold">15</span></button>
          </li>
          <li>
            <button>Инструкции и документы <span className="font-bold">5</span></button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductPage;