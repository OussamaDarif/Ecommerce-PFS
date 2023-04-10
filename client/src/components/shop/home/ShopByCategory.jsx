import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "laptops",
    description: "buy new professional and gaming laptops",
  },
  { id: 2, name: "clothes", description: "buy new clothes" },
  {
    id: 3,
    name: "women's clothes",
    description: "new stylish collections for womens",
  },
  {
    id: 4,
    name: "iphones & ipads",
    description: "new apple products are available",
  },
  {
    id: 5,
    name: "android smartphones",
    description: "new samsung and oppo are available",
  },
  {
    id: 6,
    name: "asian clothes",
    description: "new korean, chineese and japaneese collections are available",
  },
];

const ShopByCategory = () => {
  return (
    <section >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 space-y-5 flex flex-col items-center">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Shop by categories</h2>

          <p className="mt-4 ">
            Browse our products by categories
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories?.map((category) => (
            <Link
            key={category?.id}
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              to={`/category/${category?.name}`}
            >
              
              <h2 className="mt-4 text-xl font-bold ">
                {category?.name}
              </h2>

              <p className="mt-1 text-sm">
                {category?.description}
              </p>
            </Link>
          ))}
        </div>
        <Link
          to={"/categories"}
          className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          See More Categories
        </Link>
      </div>
    </section>
  );
};

export default ShopByCategory;
