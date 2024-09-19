"use client";

import { useEffect, useState } from "react";

import ProductContext from "@/app/_contexts/ProductContext";

import ProductImages from "./ProductImages";
import ProductHeader from "./ProductHeader";
import ProductOptions from "./ProductOptions";
import ProductAccordion from "./ProductAccordion";
import clsx from "clsx";

function ProductDetails({ productData }) {
  const [color, setColor] = useState(productData.colors[0]);
  const [size, setSize] = useState(productData.sizes.length > 0 ? productData.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = productData.inventory.find((product) => product.color === color && (size ? product.size === size : true));
  const outOfStock = selectedVariant.stock === 0;

  const images = productData.images.filter((image) => image.color === color);
  const [primaryImg, setPrimaryImg] = useState(images[0]);

  useEffect(() => {
    if (outOfStock) setQuantity(0);
  }, [outOfStock]);

  return (
    <ProductContext.Provider
      value={{
        productData,
        selectedVariant,
        outOfStock,
        color,
        size,
        quantity,
        images,
        primaryImg,
        setColor,
        setSize,
        setQuantity,
        setPrimaryImg,
      }}
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
        <ProductImages />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <ProductHeader />
            <p className="text-base text-neutral-600">{productData.description}</p>
            <ProductOptions />
            {outOfStock && <p className="text-neutral-900 text-xl font-semibold">Sorry, this item is out of stock</p>}
            <button
              className={clsx(
                "px-5 py-3 sm:px-6 sm:py-4 rounded text-base sm:text-lg font-medium hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12]",
                outOfStock ? "bg-neutral-100 text-neutral-400 cursor-not-allowed" : "bg-indigo-700 text-white"
              )}
            >
              Add to Cart
            </button>
          </div>
          <ProductAccordion />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default ProductDetails;
