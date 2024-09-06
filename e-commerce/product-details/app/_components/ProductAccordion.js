import ProductAccordionItem from "./ProductAccordionItem";

function ProductAccordion() {
  return (
    <div className="flex flex-col gap-8">
      <ProductAccordionItem
        title={"Features"}
        list={[
          "Designed for comfort and durability.",
          "Soft, breathable fabric ideal for travel and adventure.",
          "Large front pocket and adjustable hood.",
          "Minimalist design pairs well with any style.",
          "Made with eco-conscious materials.",
        ]}
      />
      <ProductAccordionItem
        title={"Fabric & Care"}
        list={[
          "Machine wash cold on a gentle cycle.",
          "Tumble dry low or hang to dry.",
          "Do not use fabric softeners or bleach.",
          "Iron on a low setting if necessary.",
        ]}
        border={true}
      />
      <ProductAccordionItem
        title={"Shipping"}
        list={[
          "Free standard shipping on all orders - no minimum spend required.",
          "Expedited shipping available at an additional cost.",
          "Packaged in biodegradable materials to reduce environmental impact.",
        ]}
        border={true}
      />
    </div>
  );
}

export default ProductAccordion;
