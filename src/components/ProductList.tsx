import React from "react";
import { useGetProductsQuery } from "../redux/goodsApi";
import { IProduct } from "../types";
import ProductItem from "./ProductItem";

const ProductList = () => {
  // @ts-ignore
  const { data = [], isLoading } = useGetProductsQuery();
  console.log(data);
  if (data) {
    return (
      <>
        {/*<div className="flex gap-5 flex-wrap mb-5 grow-0 max-w-6xl	">*/}
        {/*  /!*@ts-ignore*!/*/}
        {/*  {data.map((item: IProduct) => <ProductItem {...item} />)}*/}
        {/*</div>*/}

      </>
    );
  }
};

export default ProductList;