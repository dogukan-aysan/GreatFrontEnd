import clsx from "clsx";

function SectionContainer({ children }) {
  return <section className={clsx("w-full flex py-12 md:py-16 min-[1440px]:py-24 px-4 min-[1440px]:px-24")}>{children}</section>;
}

export default SectionContainer;
