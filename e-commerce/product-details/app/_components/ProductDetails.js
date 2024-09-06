import ProductHeader from "./ProductHeader";
import ProductOptions from "./ProductOptions";
import ProductAccordion from "./ProductAccordion";
import ProductImages from "./ProductImages";

function ProductDetails() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
      <ProductImages />
      <div className="flex flex-col gap-10">
        {/* details */}
        <div className="flex flex-col gap-8">
          <ProductHeader />
          {/* description */}
          <p className="text-base text-neutral-600">
            The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always
            searching for the next adventure.
          </p>
          <ProductOptions />
          <button className="px-5 py-3 sm:px-6 sm:py-4 rounded bg-indigo-700 text-base sm:text-lg font-medium text-white">
            Add to Cart
          </button>
        </div>
        <ProductAccordion />
      </div>
    </div>
  );
}

export default ProductDetails;
