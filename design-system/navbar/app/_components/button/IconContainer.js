import clsx from "clsx";

function IconContainer({ children, size }) {
  return <div className={clsx(size === "xxl" ? "w-6 h-6" : "w-5 h-5")}>{children}</div>;
}

export default IconContainer;
