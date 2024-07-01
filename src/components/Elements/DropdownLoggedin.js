import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";

export const DropdownLoggedin = ({ setDropdown }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("name");
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("name");
    navigate("/products");
    setDropdown(false);
  };

  return (
    <div>
      {/* <!-- Dropdown menu --> */}
      <div
        id="dropdown"
        className="z-10 absolute right-0 top-10 mt-2 mr-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <p className="text-[red] m-[13px]">{token}</p>
          <li>
            <Link
              to="/products"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              ALL eBooks
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <div
              onClick={handleLogout}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              SignOut
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
