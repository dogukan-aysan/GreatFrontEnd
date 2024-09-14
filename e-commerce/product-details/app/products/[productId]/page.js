import MainContainer from "@/app/_components/MainContainer";
import ProductDetails from "@/app/_components/ProductDetails";
import SectionContainer from "@/app/_components/SectionContainer";

async function page({ params }) {
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

export default page;
