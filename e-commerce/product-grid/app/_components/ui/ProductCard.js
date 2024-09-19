"use client";

import clsx from "clsx";

import { useState } from "react";
import Link from "next/link";

import ColorSwatche from "./ColorSwatche";

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [hovered, setHovered] = useState(false);

  const currentVariant = product.inventory.find((product) => product.color === selectedColor);
  const filteredImages = product.images.filter((image) => image.color === selectedColor);

  return (
    <div>
      <Link tabIndex={"-1"} href={`/products/${product.product_id}`}>
        <div
          className="w-full h-[225px] md:h-[300px] rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url(${filteredImages[0].image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "100%",
          }}
          onMouseEnter={() => {
            setHovered(!hovered);
          }}
          onMouseLeave={() => {
            setHovered(!hovered);
          }}
        ></div>
      </Link>
      <div className="h-[168px] py-4">
        <h3 className="mb-0.5 text-xs text-neutral-600">{selectedColor[0].toUpperCase() + selectedColor.slice(1)}</h3>
        <h2 className={clsx("text-lg font-medium", hovered ? "text-indigo-700" : "text-neutral-900")}>{product.name}</h2>
        <div className="my-3 flex gap-2 items-baseline">
          <p className="text-lg text-neutral-500">${currentVariant.sale_price}</p>
          {currentVariant.sale_price !== currentVariant.list_price && (
            <p className="text-xs text-neutral-600 line-through">${currentVariant.list_price}</p>
          )}
        </div>
        <div className="flex items-center gap-1">
          {product.colors.map((color) => (
            <ColorSwatche
              key={color}
              swatcheSize="md"
              color={color}
              product={product}
              onColorSelect={setSelectedColor}
              selected={selectedColor === color}
              cardVersion={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
