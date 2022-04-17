import Image from "next/image";
import { useRouter } from "next/router";
import Product from "../../types/Product";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  const deleteProduct = async (id: string) => {
    const url = `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.status === 200) {
      window.location.reload();
    } else {
      console.log(response);
    }
  };
  return (
    <div className="relative flex flex-col gap-1 font-semibold text-center cursor-pointer">
      <div
        className="overflow-hidden bg-white rounded-2xl "
        style={{ fontSize: "0" }}
        onClick={() => router.push(`/product/${product.id}`)}
      >
        <Image
          src={`/api/imageproxy?url=${encodeURIComponent(product.avatar)}`}
          alt={product.name}
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
      <div
        className="absolute px-2.5 py-1 font-bold bg-red-500 rounded-lg -top-2 -right-4 "
        onClick={() => {
          deleteProduct(product.id);
        }}
      >
        <span className="font-bold text-white ">X</span>
      </div>
      <span onClick={() => router.push(`/product/${product.id}`)}>
        {product.name}
      </span>
      <span onClick={() => router.push(`/product/${product.id}`)}>
        $ {product.price}
      </span>
    </div>
  );
}
