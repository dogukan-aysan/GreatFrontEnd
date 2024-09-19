import { useContext, useEffect, useState } from "react";

import ProductContext from "@/app/_contexts/ProductContext";

import ProductPrimaryImage from "./ProductPrimaryImage";
import ProductSecondaryImage from "./ProductSecondaryImage";

function ProductImages() {
  const { primaryImg, setPrimaryImg, images } = useContext(ProductContext);

  function handleImageClick(url) {
    const selectedImg = images.find((image) => {
      return image.image_url === url;
    });
    setPrimaryImg(selectedImg);
  }

  return (
    <div className="h-fit flex flex-col gap-6 overflow-x-hidden">
      <ProductPrimaryImage url={primaryImg.image_url} />
      <div className="h-[120px] sm:h-[190px] flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <ProductSecondaryImage key={index} url={image.image_url} onImageClick={handleImageClick} primaryImg={primaryImg} />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
