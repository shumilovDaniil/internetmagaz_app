import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-neutral-900 px-4 py-2 mb-10">
      <div className=" justify-between flex items-center  py-2">
        <div className="flex items-center gap-4">
          <button><GiHamburgerMenu className="text-3xl" /></button>

          <Link to={"/"} className="uppercase text-2xl font-medium">Интернет магазин</Link>
        </div>

        <div className="flex gap-6">
          <Link to={"/create-ad"}>Создать объявление</Link>
          <Link to={"/cart"}>Корзина</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;