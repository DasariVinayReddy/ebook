import React from "react";
import { Link } from "react-router-dom";
export const DropdownLoggedOut = ({ setDropdown }) => {
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
          <li>
            <Link
              onClick={() => setDropdown(false)}
              to="/products"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              ALL-EBooks
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropdown(false)}
              to="/login"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropdown(false)}
              to="/register"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
