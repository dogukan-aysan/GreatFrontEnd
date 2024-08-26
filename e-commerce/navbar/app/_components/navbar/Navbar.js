import NavLink from "./NavLink";

function Navbar({ links }) {
  return (
    <div className="hidden lg:flex items-center gap-8 grow">
      {links.map((link) => {
        return (
          <NavLink key={link.id} href={link.href}>
            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navbar;
