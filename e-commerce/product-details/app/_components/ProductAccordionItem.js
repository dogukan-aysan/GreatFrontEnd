"use client";
import { useState } from "react";

function ProductAccordionItem({ title, list, border = false }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={`flex items-start gap-6 ${border && "pt-[23px] border-t border-neutral-200"}`}>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium text-neutral-900">{title}</h3>
        <ul className="pl-2 text-base text-neutral-600">
          {list.map((item, index) => (
            <li className="flex gap-2" key={index}>
              <span className="w-1.5 h-1.5 relative top-2 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                </svg>
              </span>
              <p className="">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-6 h-6 pt-0.5 ml-auto" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-400">
            <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default ProductAccordionItem;
