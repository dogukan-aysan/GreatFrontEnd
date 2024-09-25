"use client";

import clsx from "clsx";

import IconContainer from "./IconContainer";

function Button({ children, size, variant, iconLeft = null, iconRight = null, iconOnly = false, disabled = false, onClickFunc = null }) {
  const isLink = variant.includes("link");
  const buttonOrLink = isLink ? "link" : "button";
  const iconBoth = iconLeft && iconRight;

  const sizeUtils = {
    md: {
      common: "flex items-center justify-center rounded",
      button: {
        labelVisible: "px-3.5 py-2.5 gap-1 text-sm font-medium",
        iconOnly: "p-2.5 gap-2",
      },
      link: { labelVisible: "gap-1 text-sm font-medium", iconOnly: "gap-2" },
    },
    lg: {
      common: "flex items-center justify-center rounded",
      button: {
        labelVisible: "px-4 py-2.5 gap-1.5 text-base font-medium",
        iconOnly: "p-3 gap-2",
      },
      link: { labelVisible: "gap-1.5 text-base font-medium", iconOnly: "gap-2" },
    },
    xl: {
      common: "flex items-center justify-center rounded",
      button: {
        labelVisible: "px-5 py-3 gap-1.5 text-base font-medium",
        iconOnly: "p-3.5 gap-2",
      },
      link: { labelVisible: "gap-1.5 text-base font-medium", iconOnly: "gap-2" },
    },
    xxl: {
      common: "flex items-center justify-center rounded",
      button: {
        labelVisible: "px-6 py-4 gap-2.5 text-lg font-medium",
        iconOnly: "p-4 gap-2",
      },
      link: { labelVisible: "gap-2.5 text-lg font-medium", iconOnly: "gap-2" },
    },
  };

  const variantUtils = {
    primary: "bg-indigo-700 text-white shadow-primaryBtn focus:ring-indigo-600/[.12] hover:bg-indigo-800 focus:bg-indigo-800",
    secondary:
      "bg-white text-neutral-900 shadow-borderSecondaryBtn shadow-neutral-200 focus:ring-indigo-600/[.12] hover:bg-neutral-50 focus:bg-neutral-50 text-neutral-950",
    tertiary: "text-indigo-700 focus:ring-indigo-600/[.12] hover:bg-neutral-50 focus:bg-neutral-50",
    linkColor: "text-indigo-700 focus:ring-indigo-600/[.12] hover:text-indigo-800 focus:text-indigo-800 focus:bg-white",
    linkGray: "text-neutral-600 focus:ring-indigo-600/[.12] hover:text-neutral-900 focus:text-neutral-900 focus:bg-white",
    destructive: "bg-red-600 text-white focus:ring-red-600/[.12] hover:bg-red-700 focus:bg-red-700",
    disabled: `text-neutral-400 focus:ring-0 cursor-not-allowed ${["primary", "secondary"].includes(variant) && "bg-neutral-50"}`,
  };

  function handleClick() {
    if (disabled || onClickFunc === null) return;
    onClickFunc();
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "w-full h-fit focus:outline-none focus:ring-4",
        disabled ? variantUtils.disabled : variantUtils[variant],
        sizeUtils[size].common,
        iconOnly ? sizeUtils[size][buttonOrLink].iconOnly : sizeUtils[size][buttonOrLink].labelVisible
      )}
    >
      <>
        {iconOnly ? (
          <IconContainer size={size}>{iconOnly}</IconContainer>
        ) : iconBoth ? (
          <>
            <IconContainer size={size}>{iconLeft}</IconContainer>
            <p className="px-0.5">{children}</p>
            <IconContainer size={size}>{iconRight}</IconContainer>
          </>
        ) : iconLeft ? (
          <>
            <IconContainer size={size}>{iconLeft}</IconContainer>
            <p className="px-0.5">{children}</p>
          </>
        ) : iconRight ? (
          <>
            <p className="px-0.5">{children}</p>
            <IconContainer size={size}>{iconRight}</IconContainer>
          </>
        ) : (
          <p className="px-0.5">{children}</p>
        )}
      </>
    </button>
  );
}

export default Button;
