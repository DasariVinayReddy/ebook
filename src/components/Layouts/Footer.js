import React from "react";
import ebook from "../../assets/ebook.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center space-x-3">
              <Link
                to="/products"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={ebook} className="h-8" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-[red]">
                  EBookStore
                </span>
              </Link>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="!" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="!" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="!" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="!" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              EBookStore™
            </a>
            . All Rights Reserved.<b>Author-DASARI VINAY REDDY</b>
          </span>
        </div>
      </footer>
    </div>
  );
};
