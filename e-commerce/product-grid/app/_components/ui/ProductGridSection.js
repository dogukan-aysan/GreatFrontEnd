import ProductCard from "./ProductCard";

function ProductGridSection({ products }) {
  return (
    <div>
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900">Latest Arrivals</h1>
        <button className="px-4 py-2.5 bg-white text-base font-medium text-neutral-900 rounded shadow-button hover:shadow-buttonHover hover:bg-neutral-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] focus:bg-neutral-50">
          View all
        </button>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <li
            key={product.product_id}
            className="focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] rounded-lg"
            tabIndex="0"
          >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductGridSection;
