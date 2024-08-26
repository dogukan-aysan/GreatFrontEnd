"use client";

import { useState } from "react";
import CardButton from "./button/CardButton";
import HamburgerButton from "./button/HamburgerButton";
import Logo from "./Logo";
import MobileNavbar from "./navbar/MobileNavbar";
import Navbar from "./navbar/Navbar";

const links = [
  {
    id: crypto.randomUUID(),
    name: "Shop all",
    href: "#",
  },
  {
    id: crypto.randomUUID(),
    name: "Latest arrivals",
    href: "#",
  },
];

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="max-w-[1440px] mx-auto pt-7 pb-3 flex items-center gap-[103px] h-[84px] min-[1440px]:h-fit px-4 md:px-8 min-[1440px]:px-28">
      <Logo />
      <Navbar links={links} />
      <div className="flex justify-center items-center gap-4 ml-auto">
        <CardButton />
        <HamburgerButton onClick={() => setIsMobileOpen(!isMobileOpen)} />
      </div>
      <MobileNavbar links={links} isMobileOpen={isMobileOpen} onClick={() => setIsMobileOpen(!isMobileOpen)} />
    </header>
  );
}

export default Header;
