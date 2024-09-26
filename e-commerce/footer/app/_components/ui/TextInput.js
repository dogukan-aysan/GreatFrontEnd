"use client";

import clsx from "clsx";

function TextInput({
  value = "",
  setValue = "",
  type = "text",
  label = "",
  placeholder = "",
  hintText = null,
  iconLeft = null,
  iconRight = null,
  isDisabled = false,
  errorMessage = "",
}) {
  return (
    <div className="w-full h-fit flex flex-col gap-1.5">
      {label !== "" && (
        <label className="text-sm text-neutral-700 font-medium" htmlFor={label}>
          {label}
        </label>
      )}
      <div className="relative">
        {iconLeft && <span className="absolute top-2.5 left-3.5 w-5 h-5 shrink-0 text-neutral-400">{iconLeft}</span>}
        <input
          id={label}
          name={label}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isDisabled}
          className={clsx(
            "w-full py-2.5 text-sm rounded text-neutral-900 placeholder:text-neutral-500  bg-neutral-50 focus:outline-none focus:ring-4 shadow-[0_0_0_1px_#E6E6E6]",
            iconLeft ? "pl-10" : "pl-3.5",
            isDisabled && " shadow-neutral-100 placeholder:text-neutral-400 cursor-not-allowed",
            errorMessage ? "focus:ring-[#D92D20]/[.12] focus:shadow-[#D92D20]" : "focus:ring-[#444CE7]/[.12] focus:shadow-[#444CE7]"
          )}
        />
        {iconRight && (
          <span className={clsx("absolute top-2.5 right-3.5 w-5 h-5 shrink-0", errorMessage ? "text-red-600" : "text-neutral-400")}>
            {iconRight}
          </span>
        )}
      </div>
      {(hintText !== null || errorMessage !== "") && (
        <p className={clsx("text-sm", errorMessage ? "text-red-600" : "text-neutral-500")}>
          {errorMessage !== "" ? errorMessage : hintText}
        </p>
      )}
    </div>
  );
}

export default TextInput;
