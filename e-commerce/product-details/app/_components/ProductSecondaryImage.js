function ProductSecondaryImage({ url }) {
  return (
    <div
      className="h-full w-20 min-[400px]:w-[188px] lg:w-40 rounded-lg shrink-0"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default ProductSecondaryImage;
