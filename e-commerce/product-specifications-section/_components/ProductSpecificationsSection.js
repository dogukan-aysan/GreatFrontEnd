"use client";

import { useState } from "react";

import Tabs from "./Tabs";
import TabContent from "./TabContent";

function ProductsSpecificationsSection({ specifications }) {
  const [activeTabId, setActiveTabId] = useState(1);
  return (
    <div className="max-w-[1280px] grid grid-rows-[auto_auto] min-[1440px]:grid-rows-[156px_auto] gap-16 mx-auto">
      <header>
        <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 mb-6">Discover timeless elegance</h2>
        <p className="text-lg text-neutral-600">
          Step into a world where quality meets quintessential charm with our collection. Every thread weaves a promise of unparalleled
          quality, ensuring that each garment is not just a part of your wardrobe, but a piece of art. Here&apos;s the essence of what makes
          our apparel the hallmark for those with an eye for excellence and a heart for the environment.
        </p>
      </header>
      <div className="flex flex-col gap-8 h-fit">
        <Tabs specifications={specifications} activeTabId={activeTabId} onClick={setActiveTabId} />
        {specifications.map((specification) => (
          <TabContent key={specification.id} specification={specification} display={activeTabId === specification.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSpecificationsSection;
