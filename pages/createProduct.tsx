import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Category from "../types/Category";

interface Product {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}

const ProductDetail: NextPage = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    category: "",
    description: "",
    avatar: "",
    developerEmail: "myyilmaz97@gmail.com",
  });
  const [category, setCategory] = useState<Category>({ name: "", id: "" });

  const router = useRouter();

  const createProduct = async (e) => {
    e.preventDefault();

    setProduct({ ...product, category: category.name });
    await fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    ).then((res) => {
      if (res.status === 201) {
        router.push("/");
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Create Product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-10 text-center">
          <form className="flex flex-col w-full max-w-screen-sm gap-8 mx-auto ">
            <h2 className="text-4xl font-semibold">Create Product</h2>
            <input
              placeholder="Product Name"
              type="text"
              className="p-2 bg-white shadow-md rounded-xl "
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
              placeholder="Description"
              type="text"
              className="flex items-end px-2 py-3 pb-16 bg-white shadow-md rounded-xl "
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <input
              placeholder="Image Url"
              type="text"
              className="p-2 bg-white shadow-md rounded-xl "
              value={product.avatar}
              onChange={(e) =>
                setProduct({ ...product, avatar: e.target.value })
              }
            />
            <Dropdown setCategory={setCategory} width={"100%"} />
            <input
              placeholder="Price"
              type="number"
              className="p-2 bg-white shadow-md rounded-xl "
              onChange={(e) =>
                setProduct({ ...product, price: +e.target.value })
              }
            />
            <button
              className="p-2 text-lg font-semibold bg-white rounded-md"
              onClick={(e) => createProduct(e)}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
