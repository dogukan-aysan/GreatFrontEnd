import clsx from "clsx";
import { useContext } from "react";
import ProductContext from "../_contexts/ProductContext";

function ColorSwatche({ swatcheSize = "lg", theme = "light", color = "orange", selected }) {
  const { productData, size, setColor, setPrimaryImg } = useContext(ProductContext);

  const colorVariants = {
    white: "bg-white border border-black",
    black: "bg-black",
    red: "bg-red-600",
    orange: "bg-orange-600",
    yellow: "bg-yellow-500",
    green: "bg-emerald-500",
    purple: "bg-purple-600",
    brown: "bg-yellow-600",
    beige: "bg-yellow-400",
    pink: "bg-pink-600",
    blue: "bg-blue-600",
  };
  const finalColor = ["brown", "beige"].includes(color) ? "yellow" : color === "green" ? "emerald" : color;

  function handleColorClick() {
    setColor(color);
    setPrimaryImg(productData.images.filter((image) => image.color === color)[0]);
  }

  // based on to the selected size and swatche's color
  const productVariant = productData.inventory.find((product) => product.color === color && (size ? product.size === size : true));
  const outOfStock = productVariant.stock === 0;

  return (
    <div className={clsx("cursor-pointer", swatcheSize === "md" ? "p-1" : "p-[9.33px]")} onClick={handleColorClick}>
      <button
        className={clsx(
          "relative rounded-full focus:outline-none focus-visible:ring-8 focus-visible:ring-indigo-600/[.12] hover:ring-4 hover:ring-indigo-600/[.12]",
          colorVariants[color],
          selected &&
            "border-[2.33px] border-white shadow-swatche flex items-center justify-center hover:border-none hover:shadow-none focus:border-none focus:shadow-none",
          swatcheSize === "md" ? "w-4 h-4" : "w-[38px] h-[38px]"
        )}
      >
        {selected && !outOfStock && (
          <svg
            width={swatcheSize === "md" ? "12" : "28"}
            height={swatcheSize === "md" ? "12" : "28"}
            viewBox="0 0 28 28"
            className={clsx(theme === "dark" || finalColor === "white" ? "fill-neutral-900" : "fill-white")}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.6673 17.6993L22.3918 6.97485L24.0417 8.62477L11.6673 20.9991L4.24268 13.5745L5.89259 11.9246L11.6673 17.6993Z" />
          </svg>
        )}
        {outOfStock && (
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {swatcheSize === "md" ? (
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15.0002" width="1" height="20" transform="rotate(45 15.0002 0)" fill="#525252" />
              </svg>
            ) : (
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="32.3999" y="0.199951" width="2.1" height="44.8" transform="rotate(45 32.3999 0.199951)" fill="#525252" />
              </svg>
            )}
          </div>
        )}
      </button>
    </div>
  );
}

export default ColorSwatche;
