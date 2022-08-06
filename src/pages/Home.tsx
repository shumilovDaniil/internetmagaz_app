import React from "react";
import Search from "../components/Search";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import ShowMore from "../ui/ShowMore";

const Home = () => {
  return (
    <div className=" text-black">
      <Search />
      <div className="flex">
        {/*<ProductList />*/}
        <Sidebar />
      </div>
      <ShowMore />

    </div>
  );
};

export default Home;