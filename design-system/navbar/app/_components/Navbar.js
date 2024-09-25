"use client";

import Image from "next/image";

import logoMark from "@/app/public/abstractly.svg";

import Button from "./button/Button";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

const hamburgerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
  </svg>
);

function Navbar({ logo = null, linksArr = [], buttonArr = [] }) {
  const [isMobileHidden, setIsMobileHidden] = useState(true);

  function handleIconClick() {
    setIsMobileHidden(!isMobileHidden);
  }

  return (
    <div className="relative">
      <nav className="max-w-[1440px] mx-auto px-4 pt-[34px] pb-[18px] sm:px-8 lg:pt-7 lg:pb-3 lg:px-28 flex items-center gap-24">
        <Image src={logoMark.src} width={logoMark.width} height={logoMark.width} alt="Company's logo." />
        <ul className="hidden min-[1236px]:flex gap-8">
          <li>
            <a className="text-base text-neutral-600 font-medium">
              <Button size="lg" variant="linkGray">
                Home
              </Button>
            </a>
          </li>
          <li>
            <a className="text-base text-neutral-600 font-medium">
              <Button size="lg" variant="linkGray">
                Features
              </Button>
            </a>
          </li>
          <li>
            <a className="text-base text-neutral-600 font-medium">
              <Button size="lg" variant="linkGray">
                Pricing
              </Button>
            </a>
          </li>
          <li>
            <a className="text-base text-neutral-600 font-medium">
              <Button size="lg" variant="linkGray">
                About us
              </Button>
            </a>
          </li>
          <li>
            <a className="text-base text-neutral-600 font-medium">
              <Button size="lg" variant="linkGray">
                Contact
              </Button>
            </a>
          </li>
        </ul>
        <div className="hidden min-[1236px]:flex gap-4 ml-auto">
          <div>
            <Button size="lg" variant="secondary">
              Learn more
            </Button>
          </div>
          <div>
            <Button size="lg">See pricing</Button>
          </div>
        </div>
        <div className="ml-auto min-[1236px]:hidden">
          <Button variant="linkGray" iconOnly={hamburgerIcon} onClickFunc={handleIconClick}></Button>
        </div>
      </nav>
      {<MobileNavbar isHidden={isMobileHidden} onIconClick={handleIconClick} />}
    </div>
  );
}

export default Navbar;
