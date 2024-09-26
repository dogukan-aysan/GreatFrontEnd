import Button from "./button/Button";

function FooterLinksCol({ links, header }) {
  return (
    <ul className="h-fit lg:basis-[280px] sm:basis-1/2 flex flex-col gap-3">
      <h3 className="mb-1 text-sm text-neutral-500">{header}</h3>
      {links.map((link) => (
        <li key={link} className="w-fit">
          <a className="text-base text-neutral-600 font-medium">
            <Button size="lg" variant={"linkGray"}>
              {link}
            </Button>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinksCol;
