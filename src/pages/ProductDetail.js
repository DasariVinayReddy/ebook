import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components/Elements/Rating";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CartContext";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
export const ProductDetail = ({ rating }) => {
  const [product, setProduct] = useState({});
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isIncart, setInCart] = useState(false);
  console.log(product);
  const { id } = useParams(); // Assuming your route is '/products/:id'
  useTitle(product.name);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`http://localhost:8000/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        // Optionally, set a default or handle the error state here
      }
    }

    fetchProduct();
  }, [id]); // This useEffect will run every time 'id' changes

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              )}
              {/* Add other conditional renders here */}
            </p>
            <p className="my-3">
              {!isIncart ? (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={!product.in_stock}
                >
                  Add To Cart <PlusIcon className="ml-1 h-5 w-5" />
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={!product.in_stock}
                >
                  Remove Item <TrashIcon className="ml-1 h-5 w-5" />
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description || "No description available."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
