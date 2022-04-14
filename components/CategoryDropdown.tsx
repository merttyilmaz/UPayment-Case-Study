import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Category from "../types/Category";

export default function CategoryDropdown({
  setCategory,
  width,
  noFetch,
}: {
  setCategory: Dispatch<SetStateAction<Category>>;
  width?: string;
  noFetch?: boolean;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const url =
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories";
    const response = await fetch(url);
    const data = await response.json();
    setCategories(data);
  };

  const getCategoryProducts = async (id: string) => {
    const url = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/${id}`;

    if (!noFetch) {
      const response = await fetch(url);
      const data = await response.json();
      setCategory(data);
    } else {
      categories.map((category) => {
        if (category.id === id) {
          setCategory(category);
        }
      });
    }
  };

  return (
    <select
      className="w-full p-2 bg-white shadow-md md:w-1/4 rounded-xl"
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
