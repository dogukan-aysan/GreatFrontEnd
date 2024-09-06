import ProductPrimaryImage from "./ProductPrimaryImage";
import ProductSecondaryImage from "./ProductSecondaryImage";

function ProductImages() {
  return (
    <div className="h-fit flex flex-col gap-6 overflow-x-hidden">
      <ProductPrimaryImage
        url={
          "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg"
        }
      />
      <div className="h-[120px] sm:h-[190px] flex gap-4 overflow-x-auto">
        <ProductSecondaryImage url="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg" />
        <ProductSecondaryImage url="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg" />
        <ProductSecondaryImage url="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg" />
        <ProductSecondaryImage url="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/autumnal-knitwear/autumnal-knitwear-1.jpg" />
      </div>
    </div>
  );
}

export default ProductImages;
