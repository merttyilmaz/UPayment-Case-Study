import Category from "../../types/Category";
import Product from "../../types/Product";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  category,
}: {
  products: Array<Product>;
  category: Category;
}) {
  const viewProductList = () => {
    if (category.name === "" && category.id === "") {
      return products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      });
    } else {
      return products.map((product) => {
        if (product.category === category.name) {
          return <ProductCard product={product} key={product.id} />;
        }
      });
    }
  };
  return (
    <div className="flex flex-wrap justify-start max-w-screen-lg gap-10 mx-auto mt-20 al">
      {viewProductList()}
    </div>
  );
}
