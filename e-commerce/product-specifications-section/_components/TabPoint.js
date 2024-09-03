function TabPoint({ point }) {
  return (
    <div className="flex gap-4 items-center w-[259px] md:w-[320px] min-[1440px]:w-[282px]">
      <span className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow">{point.icon}</span>
      <p className="text-base text-neutral-600">{point.label}</p>
    </div>
  );
}

export default TabPoint;
