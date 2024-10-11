import clsx from "clsx";

function IconContainer({ children, size }) {
  return (
    <div className={clsx("flex items-center justify-center", size === "xxl" ? "w-6 h-6" : "w-5 h-5")}>
      <div className={clsx(size === "xxl" ? "h-5 aspect-square" : "h-[17px] aspect-square")}>{children}</div>
    </div>
  );
}

export default IconContainer;
