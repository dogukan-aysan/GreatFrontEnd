import CollectionCard from "./CollectionCard";

function CollectionGrid({ collections }) {
  return (
    <div className="grid md:grid-cols-2 gap-7">
      {collections.map((collection, index) => {
        return (
          <CollectionCard
            key={collection.collection_id}
            name={collection.name}
            description={collection.description}
            imageUrl={collection.image_url}
            variant={index === 0 ? "primary" : "secondary"}
          />
        );
      })}
    </div>
  );
}

export default CollectionGrid;
