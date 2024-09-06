function ProductPrimaryImage({ url }) {
  return (
    <div
      className="h-[400px] md:h-[800px] w-full rounded-lg"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default ProductPrimaryImage;
