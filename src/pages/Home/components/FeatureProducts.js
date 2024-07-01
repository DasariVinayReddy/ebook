import React, { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../services/productServices";
import { toast } from "react-toastify";

export const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto my-10 ">
      <div className="text-center text-2xl underline text-[red] font-bold dark:text-[blue]">
        Feature Products
      </div>
      <div className="flex flex-wrap  items-center justify-between mx-auto max-w-screen-xl px-4 py-2 pt-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
