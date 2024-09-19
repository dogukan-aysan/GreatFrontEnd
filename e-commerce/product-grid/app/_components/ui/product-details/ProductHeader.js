import { useContext } from "react";

import ProductContext from "@/app/_contexts/ProductContext";

import StarRating from "./StarRating";

function ProductHeader() {
  const { productData, color, size, quantity } = useContext(ProductContext);

  const variant = productData.inventory.find((product) => product.color === color && (size ? product.size === size : true));

  const roundedRating = Number.parseFloat(productData.rating.toFixed(1));
  return (
    <div className="flex flex-col gap-5">
      <h2 className="sm:text-5xl text-3xl font-semibold text-neutral-900">{productData.name}</h2>
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-baseline">
            <p className="text-3xl font-medium text-neutral-600">${quantity * variant.sale_price}</p>
            {variant.sale_price !== variant.list_price && (
              <p className="text-lg font-medium text-neutral-400 line-through">${quantity * variant.list_price}</p>
            )}
          </div>
          {variant.sale_price !== variant.list_price && (
            <p className="w-fit px-2.5 py-[3px] text-sm text-center border border-amber-200 rounded-full bg-amber-50 text-amber-700">
              {`${variant.discount_percentage}% OFF`}
            </p>
          )}
        </div>
        <div className="w-fit flex gap-x-2 items-center flex-wrap gap-y-1">
          <p className="text-xl text-neutral-900">{roundedRating}</p>
          <div className="flex gap-1 items-center">
            <StarRating rating={roundedRating} />
          </div>
          {roundedRating !== 0 ? (
            <button className="p-0.5 text-indigo-700 hover:text-indigo-800 text-sm font-medium rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]">{`See all ${productData.reviews} reviews`}</button>
          ) : (
            <p className="p-0.5 text-indigo-700 text-sm font-medium">
              <span className="text-neutral-900 font-normal">No reviews yet. </span>
              <button className="hover:text-indigo-800 rounded focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]">
                Be the first
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
