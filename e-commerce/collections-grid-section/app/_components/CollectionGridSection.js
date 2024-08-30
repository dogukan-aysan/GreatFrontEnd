"use client";

import { useEffect, useState } from "react";
import CollectionGrid from "./CollectionGrid";

function CollectionGridSection() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCollections() {
      try {
        const res = await fetch("https://www.greatfrontend.com/api/projects/challenges/e-commerce/collections");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setCollections(data.data);
      } catch (err) {
        console.dir(err);
        setError(err.message);
      }
    }
    fetchCollections();
  }, []);
  if (error !== "")
    return <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-neutral-900 font-semibold">{error}</p>;
  if (collections.length === 0) return;

  return (
    <div className="w-full max-w-[1280px] mx-auto px-3 md:px-4 lg:px-8 py-12 md:py-0">
      <h2 className="text-3xl text-neutral-900 font-semibold mb-8">Our Collections</h2>
      <CollectionGrid collections={collections} />
    </div>
  );
}

export default CollectionGridSection;
