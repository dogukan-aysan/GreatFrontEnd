import clsx from "clsx";
import TabPoint from "./TabPoint";

function TabContent({ specification, display = false }) {
  if (!display) return;
  return (
    <div className="flex flex-col min-[1440px]:flex-row gap-8">
      {/* image */}
      <div
        className={clsx("w-full min-[1440px]:w-[367px] h-[180px] md:h-[384px] min-[1440px]:h-[256px] rounded-lg shrink-0")}
        style={{
          backgroundImage: `url(${specification.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* left */}
      <div className="flex flex-col gap-8">
        {/* text pair */}
        <div>
          <h3 className="text-2xl text-neutral-900 font-medium mb-2">{specification.slogan}</h3>
          <p className="text-base text-neutral-600">{specification.description}</p>
        </div>
        {/* points */}
        <div className="grid gap-4 pb-1 md:grid-cols-2 md:pb-0 md:w-fit min-[1440px]:gap-8 md:gap-x-12 md:gap-y-8">
          {specification.points.map((point, index) => (
            <TabPoint key={index} point={point} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabContent;
