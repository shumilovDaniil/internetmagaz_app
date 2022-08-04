import React from "react";

const Search = () => {
  return (
    <div className="flex  items-center gap-10 mt-10 mb-14">
      <h2 className="text-2xl text-white">Найдено 1241 товаров по запросу “Обувь”</h2>
      <input className="h-10 p-2 text-xl px-4" type="text" placeholder="поиск" />
      <select className="h-10 px-2" name="select">
        <option value="value1" defaultValue={"по цене"}>по цене</option>
        <option value="value2">по лайкам</option>
        <option value="value3">по просмотрам</option>
        <option value="value3">по рейтингу</option>
        <option value="value3">по отзывам</option>
        <option value="value3">по названию</option>
      </select>
    </div>
  );
};

export default Search;