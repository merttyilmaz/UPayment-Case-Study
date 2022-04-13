import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import ProductList from "../components/products/ProductList";
import Searchbar from "../components/Searchbar";
import Category from "../types/Category";
import Product from "../types/Product";

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category>({ name: "", id: "" });

  const router = useRouter();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
    );
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <Head>
        <title>Welcome to My Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="relative p-10">
          <div className="w-full max-w-screen-xl mx-auto">
            <div className="flex justify-between">
              <Searchbar products={products} setProducts={setProducts} />
              <Dropdown setCategory={setCategory} />
            </div>
            <ProductList products={products} category={category} />
          </div>
          <div
            className="fixed flex items-center justify-center bg-black rounded-full cursor-pointer w-14 h-14 bottom-5 right-5"
            onClick={() => router.push("/createProduct")}
          >
            <span className="pb-3 text-6xl text-white">+</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
