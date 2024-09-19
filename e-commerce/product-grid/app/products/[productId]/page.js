import MainContainer from "@/app/_components/layout/MainContainer";
import SectionContainer from "@/app/_components/layout/SectionContainer";
import ProductDetails from "@/app/_components/ui/product-details/ProductDetails";

async function ProductDetailsPage({ params }) {
  const res = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/${params.productId}`);
  if (!res.ok) return;
  const data = await res.json();

  return (
    <MainContainer>
      <SectionContainer>
        <ProductDetails productData={data} />
      </SectionContainer>
    </MainContainer>
  );
}

export default ProductDetailsPage;
