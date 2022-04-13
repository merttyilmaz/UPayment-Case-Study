import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Product from "../types/Product";

export default function Searchbar({
  products,
  setProducts,
}: {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}) {
  const [tempProductList, setTempProductList] = useState([]);
  useEffect(() => {
    setTempProductList(products);
  }, []);

  const filterProducts = (e: string) => {
    if (e.length > 0) {
      let arr = [];
      products.map((product) => {
        if (product.name.toLowerCase().includes(e.toLowerCase())) {
          arr.push(product);
        }
      });
      setProducts(arr);
    } else {
      setProducts(tempProductList);
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
