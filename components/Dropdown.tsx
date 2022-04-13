import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Category from "../types/Category";

export default function Dropdown({
  setCategory,
  width,
}: {
  setCategory: Dispatch<SetStateAction<Category>>;
  width?: string;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
    );
    const data = await response.json();
    setCategories(data);
  };

  const getCategoryProducts = async (id: string) => {
    const response = await fetch(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/${id}`
    );
    const data = await response.json();
    setCategory(data);
  };

  return (
    <select
      className="w-1/4 p-2 bg-white shadow-md rounded-xl"
      style={{ width: width }}
      onChange={(e) => getCategoryProducts(e.target.value)}
    >
      <option hidden>Categories</option>
      {categories.map((category) => {
        return (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
}
