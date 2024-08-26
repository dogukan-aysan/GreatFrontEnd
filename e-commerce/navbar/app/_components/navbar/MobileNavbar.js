import clsx from "clsx";
import Logo from "../Logo";
import NavLink from "./NavLink";

function MobileNavbar({ links, isMobileOpen, onClick }) {
  return (
    <div
      className={clsx(
        isMobileOpen && "translate-x-0",
        !isMobileOpen && "-translate-x-full",
        "w-[359px] h-[812px] bg-white pl-8 pr-4 pt-8 pb-4 absolute top-0 left-0 flex flex-col gap-6 transition-transform duration-[400ms] ease-linear"
      )}
    >
      <header className="flex items-center justify-between">
        <Logo />
        <button
          className="h-5 aspect-square cursor-pointer text-neutral-600 focus:rounded focus:outline-none focus:ring-4 focus:ring-indigo-600/[.12]"
          onClick={onClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
          </svg>
        </button>
      </header>
      <div className="flex flex-col gap-2">
        {links.map((link) => {
          return (
            <NavLink key={link.id} href={link.href} mobile={true}>
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default MobileNavbar;
