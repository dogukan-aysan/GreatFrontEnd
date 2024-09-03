import clsx from "clsx";

function Tabs({ specifications, activeTabId, onClick }) {
  return (
    <div className="text-base text-neutral-600 font-medium shadow-tab-default flex items-center flex-wrap gap-6">
      {specifications.map((specification) => (
        <button
          onClick={() => onClick(specification.id)}
          className={clsx(
            "px-2 pb-3 cursor-pointer focus:outline-none",
            activeTabId !== specification.id && "hover:text-neutral-900 focus:text-neutral-900",
            activeTabId === specification.id &&
              "text-indigo-700 shadow-tab-active hover:shadow-tab-active-hover/focus hover:text-indigo-800 focus:shadow-tab-active-hover/focus focus:text-indigo-800"
          )}
          key={specification.id}
        >
          {specification.feature}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
