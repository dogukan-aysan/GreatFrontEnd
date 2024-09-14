import { useContext } from "react";

import ProductContext from "../_contexts/ProductContext";

import clsx from "clsx";

import ColorSwatche from "./ColorSwatche";

function ProductOptions() {
  const { productData, color, size, quantity, setSize, setQuantity, selectedVariant, outOfStock } = useContext(ProductContext);

  function decreaseQuantity() {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  }
  function increaseQuantity() {
    if (quantity === selectedVariant.stock) return;
    setQuantity(quantity + 1);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* colors */}
      <div>
        <p className="mb-4 text-sm text-neutral-500">Available Colors</p>
        <div className="flex items-center gap-4">
          {productData.colors.map((item, index) => (
            <ColorSwatche key={index} color={item} selected={color === item} />
          ))}
        </div>
      </div>
      {/* sizes */}
      {productData.sizes.length > 0 && (
        <div>
          <p className="mb-4 text-sm text-neutral-500">Available Sizes</p>
          <div className="flex gap-4 flex-wrap">
            {productData.sizes.map((item) => (
              <button
                key={item}
                className={clsx(
                  "px-5 py-[11px] text-base font-medium rounded bg-white hover:bg-neutral-50 hover:text-neutral-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]",
                  !outOfStock && (size === item ? "border border-indigo-600" : "border border-neutral-200"),
                  outOfStock && "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                )}
                onClick={() => setSize(item)}
              >
                {typeof item === "string" ? item.toUpperCase() : item}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* quantity */}
      <div>
        <p className="mb-4 text-sm text-neutral-500">Quantity</p>
        <div className="w-[125px] px-0.5 py-[1px] flex gap-3 items-center bg-neutral-50 rounded-md border border-neutral-200">
          <button
            className={clsx("w-5 h-5 focus:outline-none", quantity === 0 ? "text-neutral-400 cursor-not-allowed" : "text-neutral-600")}
            onClick={decreaseQuantity}
          >
            <svg width="18" height="17" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8611 7.97217H4.13892V9.36106H13.8611V7.97217Z" />
            </svg>
          </button>
          <p className="w-[49px] px-3 py-1.5 rounded text-center text-sm font-medium text-neutral-600">{quantity}</p>
          <button
            className={clsx(
              "w-5 h-5 focus:outline-none relative after:content-['Insufficient_stock'] after:hidden after:py-2 after:w-[123px] after:absolute after:-top-[35px] after:-left-[55px] after:bg-neutral-950 after:text-xs after:text-white after:font-medium after:rounded-lg",
              quantity === selectedVariant.stock ? "text-neutral-400 cursor-not-allowed hover:after:block" : "text-neutral-600"
            )}
            onClick={increaseQuantity}
          >
            <svg width="18" height="17" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.30558 7.97209V3.80542H9.69447V7.97209H13.8611V9.36098H9.69447V13.5276H8.30558V9.36098H4.13892V7.97209H8.30558Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOptions;
