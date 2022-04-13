import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Product from "../types/Product";

export default function Searchbar({
  products,
  setShownProductIndexes,
}: {
  products: Product[];
  setShownProductIndexes: Dispatch<SetStateAction<number[]>>;
}) {
  const filterProducts = (e: string) => {
    if (e.length > 0) {
      let arr = [];
      products.map((product, i) => {
        if (product.name.toLowerCase().includes(e.toLowerCase())) {
          arr.push(i);
        }
      });
      setShownProductIndexes(arr);
    } else {
      setShownProductIndexes(products.map((product, i) => i));
    }
  };

  return (
    <input
      type="text"
      placeholder="Apple Watch, Samsung S21, Macbook Pro,.."
      className="w-1/4 p-2 bg-white shadow-md rounded-xl "
      onChange={(e) => filterProducts(e.target.value)}
    />
  );
}
