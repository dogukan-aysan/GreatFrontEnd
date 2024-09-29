"use client";

import clsx from "clsx";

import { useState } from "react";

function Textarea({
  id,
  value = "",
  setValue = "",
  label = "",
  placeholder = "",
  errorMessage = "",
  hintText = true,
  isDisabled = false,
  charLimit = 500,
}) {
  const [charCount, setCharCount] = useState(0);

  const isCharLimitExceeded = charCount >= charLimit;
  const isError = errorMessage !== "";

  function getDynamicTextAreaUtils() {
    let result = "px-3.5 py-3 basis-full bg-neutral-50 shadow-[0_0_0_1px] rounded-lg focus:outline-none";

    if (isDisabled) {
      result += " shadow-neutral-100 cursor-not-allowed focus:ring-0 placeholder:text-neutral-400 ";
      return result;
    }
    result += " text-neutral-900 focus:ring-4 placeholder:text-neutral-500";

    if (errorMessage !== "" || charCount >= charLimit) {
      result += " shadow-red-300 focus:shadow-[#D92D20] focus:ring-[#D92D20]/[.12]";
    } else {
      result += " shadow-neutral-200 focus:shadow-[#444CE7] focus:ring-[#444CE7]/[.12]";
    }

    return result;
  }

  function getHintTextUtils() {
    let result = "text-sm";

    if (isCharLimitExceeded || !isError) result += " text-right";

    if (isCharLimitExceeded || isError) {
      result += " text-red-600";
    } else {
      result += " text-neutral-500";
    }

    return result;
  }

  function handleChange(e) {
    setCharCount(e.target.value.length);

    if (isDisabled) return;
    setValue(e.target.value);
  }

  return (
    <div className="w-full h-40 flex flex-col gap-1.5">
      {label !== "" && (
        <label className="text-sm text-neutral-700 font-medium" htmlFor={id}>
          {label}
        </label>
      )}

      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        aria-describedby="hint-text"
        className={clsx(
          "px-3.5 py-3 basis-full text-sm  placeholder:text-sm bg-neutral-50 shadow-[0_0_0_1px] rounded-lg focus:outline-none",
          getDynamicTextAreaUtils()
        )}
      ></textarea>

      {(hintText || errorMessage !== "") && (
        <p id="hint-text" className={clsx(getHintTextUtils())}>
          {isCharLimitExceeded ? `${charCount}/${charLimit}` : isError ? errorMessage : `${charCount}/${charLimit}`}
        </p>
      )}
    </div>
  );
}

export default Textarea;
