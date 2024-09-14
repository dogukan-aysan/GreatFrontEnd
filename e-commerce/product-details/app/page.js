import MainContainer from "./_components/MainContainer";
import ProductDetails from "./_components/ProductDetails";
import SectionContainer from "./_components/SectionContainer";

export default async function Home() {
  const res = await fetch(`https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie`);
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
