import clsx from "clsx";
import Link from "next/link";

const variantClasses = {
  primary: clsx("w-full h-[580px] row-span-2"),
  secondary: clsx("h-[337px] md:h-[276px]"),
};

function CollectionCard({ imageUrl, name, description, variant }) {
  if (!imageUrl) return;
  return (
    <Link
      href={"/"}
      className={clsx(
        "rounded-lg relative cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]",
        variantClasses[variant]
      )}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 rounded-lg absolute inset-0 bg-collection flex flex-col justify-end text-white">
        <p className="text-sm">{name}</p>
        <p className="text-lg font-medium">{description}</p>
      </div>
    </Link>
  );
}

export default CollectionCard;
