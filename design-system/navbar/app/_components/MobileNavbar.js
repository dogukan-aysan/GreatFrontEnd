import Image from "next/image";

import logoMark from "@/app/public/abstractly.svg";

import Button from "./button/Button";
import clsx from "clsx";

function MobileNavbar({ onIconClick, isHidden }) {
  const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
    </svg>
  );
  return (
    <nav
      className={clsx(
        "w-[359px] h-[812px] absolute top-0 px-4 pt-8 pb-4 flex flex-col gap-6 bg-white transition-all duration-500",
        isHidden ? "-left-full" : "left-0"
      )}
    >
      <div className="flex items-center justify-between">
        <Image src={logoMark.src} width={logoMark.width} height={logoMark.width} alt="Company's logo." />
        <div>
          <Button variant="linkGray" iconOnly={closeIcon} onClickFunc={onIconClick}></Button>
        </div>
      </div>
      <ul className="basis-full flex flex-col gap-2">
        <li tabIndex={"0"} className="px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12] rounded cursor-pointer">
          <a className="block text-sm text-neutral-900 hover:text-neutral-950">Home</a>
        </li>
        <li tabIndex={"0"} className="px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12] rounded cursor-pointer">
          <a className="block text-sm text-neutral-900 hover:text-neutral-950">Features</a>
        </li>
        <li tabIndex={"0"} className="px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12] rounded cursor-pointer">
          <a className="block text-sm text-neutral-900 hover:text-neutral-950">Pricing</a>
        </li>
        <li tabIndex={"0"} className="px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12] rounded cursor-pointer">
          <a className="block text-sm text-neutral-900 hover:text-neutral-950">About us</a>
        </li>
        <li tabIndex={"0"} className="px-3 py-2 focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12] rounded cursor-pointer">
          <a className="block text-sm text-neutral-900 hover:text-neutral-950">Contact</a>
        </li>
      </ul>
      <div>
        <div>
          <Button variant="secondary" size="lg">
            Learn more
          </Button>
        </div>
        <div className="mt-4">
          <Button size="lg">Try it out</Button>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
