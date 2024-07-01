import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer";

const filerInitialState = {
  productsList: [],
  onlyInstock: false,
  bestSelleronly: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filerInitialState);

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filerInitialState);

  // data from products
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }

  //filtering the data from bestSeller

  function bestSeller(products) {
    return state.bestSelleronly
      ? products.filter((product) => product.best_seller === true)
      : products;
  }

  // filtering the data from Instock
  function inStock(products) {
    return state.onlyInStock
      ? products.filter((product) => product.in_stock === true)
      : products;
  }

  // sorting in data
  function sort(products) {
    if (state.sortBy === "lowtohigh") {
      return products.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === "hightolow") {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  }
  //rating stars
  function rating(products) {
    if (state.ratings === "4STARTSABOVE") {
      return products.filter((product) => product.rating >= 4);
    }
    if (state.ratings === "3STARTSABOVE") {
      return products.filter((product) => product.rating >= 3);
    }
    if (state.ratings === "2STARTSABOVE") {
      return products.filter((product) => product.rating >= 2);
    }
    if (state.ratings === "1STARTSABOVE") {
      return products.filter((product) => product.rating >= 1);
    }
    return products;
  }
  // all filtered Product List
  const filteredProductList = rating(
    sort(inStock(bestSeller(state.productsList)))
  );
  const value = {
    state,
    dispatch,
    products: filteredProductList,
    initialProductList,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
