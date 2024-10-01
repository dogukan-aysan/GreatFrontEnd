"use client";

import clsx from "clsx";

function RadioCard({
  children,
  id,
  name,
  size = "md",
  iconLeft = null,
  iconRight = null,
  iconOnly = null,
  disabled = false,
  selected = false,
  onClickFunc = null,
}) {
  const baseUtils = "h-fit w-fit flex justify-center items-center font-medium rounded focus:outline-none";

  const sizeUtils = {
    sm: "px-3 py-2 gap-1 text-sm",
    md: "px-3.5 py-2.5 gap-1 text-sm",
    lg: "px-4 py-2.5 gap-1.5 text-base",
    xl: "px-5 py-3 gap-1.5 text-base",
    xxl: "px-6 py-4 gap-2.5 text-lg",
  };

  function getColorRelatedUtils() {
    let result = "";

    if (disabled) {
      result += " bg-neutral-100 text-neutral-400 cursor-not-allowed ";
      return result;
    }

    result += " text-neutral-900 bg-white shadow-[0_0_0_1px] cursor-pointer";

    if (selected) result += " shadow-indigo-600";
    else
      result +=
        " shadow-neutral-200 hover:bg-neutral-50 hover:text-neutral-950 focus:bg-neutral-50 focus:text-neutral-950 focus:shadow-[0_0_0_1px_#E6E6E6,0_0_0_4px_rgba(68,76,231,.12)]";
    return result;
  }

  const iconContainerSize = size === "xxl" ? "h-6" : "h-5";
  const iconSize = size === "xxl" ? "h-5" : "h-[16.67px]";

  function handleClick(radioValue) {
    if (onClickFunc !== undefined) onClickFunc(radioValue);
  }

  return (
    <>
      <label htmlFor={id} className={clsx(baseUtils, sizeUtils[size], getColorRelatedUtils())} tabIndex={0}>
        {iconOnly ? (
          <div className={clsx(iconContainerSize, "aspect-square flex items-center justify-center")}>
            <div className={clsx(iconSize, "aspect-square")}>{iconOnly}</div>
          </div>
        ) : (
          <>
            {iconLeft && (
              <div className={clsx(iconContainerSize, "aspect-square flex items-center justify-center")}>
                <div className={clsx(iconSize, "aspect-square")}>{iconLeft}</div>
              </div>
            )}
            <p className="px-0.5">{children}</p>
            {iconRight && (
              <div className={clsx(iconContainerSize, "aspect-square flex items-center justify-center")}>
                <div className={clsx(iconSize, "aspect-square")}>{iconRight}</div>
              </div>
            )}
          </>
        )}
      </label>
      <input
        onClick={(e) => {
          handleClick(e.target.value);
        }}
        type="radio"
        id={id}
        name={name}
        value={id}
        hidden={true}
        aria-checked={selected}
      />
    </>
  );
}

export default RadioCard;
