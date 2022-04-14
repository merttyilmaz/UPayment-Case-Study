import Category from "../../types/Category";
import Product from "../../types/Product";
import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  category,
  shownProductIndexes,
}: {
  products: Array<Product>;
  category: Category;
  shownProductIndexes: Array<number>;
}) {
  const viewProductList = () => {
    return shownProductIndexes.map((index) => {
      if (
        (category.name === "" && category.id === "") ||
        products[index].category === category.name
      ) {
        return (
          <ProductCard product={products[index]} key={products[index].id} />
        );
      }
    });
  };

  return (
    <div className="flex flex-wrap justify-center max-w-screen-lg gap-6 mx-auto mt-20 al md:justify-start sm:justify-center">
      {viewProductList()}
    </div>
  );
}
