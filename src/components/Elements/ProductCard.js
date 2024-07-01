import React, { useEffect, useState } from "react";
import { Rating } from "./Rating";
import { useCart } from "./../../context/CartContext";
import { PlusIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();

  const { id, name, poster, price, overview, best_seller, rating } = product;

  const [isIncart, setInCart] = useState(false);
  console.log(product);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl ">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <Link to={`/products/${id}`}>
          {best_seller && (
            <span className=" absolute text-[red] ml-2 mt-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
              BestSeller
            </span>
          )}
          <img
            className="w-full h-64 rounded-t-lg mb-3"
            src={poster}
            alt="name"
          />
        </Link>
        <div className="px-5 pb-5">
          <Link to={`/products/${id}`}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
            <span className="flex   text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  dark:text-blue-800 ms-3">
              <div className="flex items-center mb-4 text-yellow-300">
                <Rating rating={rating} />
              </div>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            {/* <button
              // onClick={() => dispatch(addProduct(product))}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};
