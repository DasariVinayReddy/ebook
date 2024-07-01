import React from "react";
export const Hero = () => {
  return (
    <div>
      <div className="container mx-auto my-10 ">
        <section className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20 dark:text-slate-100">
          <div className="text max-w-md ">
            <h1 className="text-5xl font-bold dark:text-[blue]">
              The Ultimate eBook Store
            </h1>
            <p className="text-2xl my-7 px-1 dark:text-white">
              CodeBook is the world's most popular and authoritative source for
              computer science ebooks. Find ratings and access to the newest
              books digitally.
            </p>
            <a
              href="/products"
              type="button"
              className="text-white bg-[red] dark:bg-blue-800 focus:ring-4  font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:hover:bg-[red]  focus:outline-none dark:focus:ring-blue-800"
            >
              Explore eBooks
            </a>
          </div>
          <div className="visual lg:max-w-xl">
            <img
              className="rounded-lg max-h-full"
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
              alt="CodeBook Hero Section"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
