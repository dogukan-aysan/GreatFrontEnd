function SectionContainer({ children }) {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1280px] mx-auto min-[1440px]:px-8 py-12 md:py-16 min-[1440px]:py-24">{children}</div>
    </section>
  );
}

export default SectionContainer;
