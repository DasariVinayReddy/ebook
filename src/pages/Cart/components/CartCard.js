import React from "react";

import { useCart } from "../../../context/CartContext";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  const { name, poster, price } = product;

  return (
    <div>
      <div className="container mx-auto my-10 mt-8">
        <div className="flow-root">
          <ul className="-my-6 divide-y divide-gray-200">
            <li key={product.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={poster}
                  alt={"poster"}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <a href="!">{name}</a>
                    </h3>
                    <p className="ml-4">${price}</p>
                  </div>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  {/* <p className="text-gray-500">Qty {product.quantity}</p> */}

                  <div className="flex">
                    <button
                      onClick={() => removeFromCart(product)}
                      type="button"
                      className="font-bold text-[red] hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
