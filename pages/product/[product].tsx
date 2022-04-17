import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Product from "../../types/Product";

const ProductDetail: NextPage = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    category: "",
    description: "",
    avatar: "",
    developerEmail: "",
    id: "",
  });
  const router = useRouter();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await fetch(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/" +
        router.query.product
    );
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="p-10">
          <div className="flex flex-col w-full max-w-screen-lg gap-2 mx-auto">
            <div className="flex justify-start gap-10 pb-4 border-b-4 border-black">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${product.avatar}`}
                  alt={product.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col justify-between">
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <span className="text-xl font-semibold">$ {product.price}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">Description</h2>
              <p className="text-l">{product.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
