import clsx from "clsx";

function ProductSecondaryImage({ url, onImageClick, primaryImg }) {
  return (
    <div
      className={clsx(
        "h-full w-20 min-[400px]:w-[188px] lg:w-40 rounded-lg shrink-0 cursor-pointer",
        primaryImg.image_url === url && "shadow-selectedImage"
      )}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => onImageClick(url)}
    ></div>
  );
}

export default ProductSecondaryImage;
