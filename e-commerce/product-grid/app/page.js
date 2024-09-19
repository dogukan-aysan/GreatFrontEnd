import MainContainer from "./_components/layout/MainContainer";
import SectionContainer from "./_components/layout/SectionContainer";

import ProductGridSection from "./_components/ui/ProductGridSection";

export default async function Home() {
  const res = await fetch("https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=latest");
  const data = await res.json();

  return (
    <MainContainer>
      <SectionContainer>
        <ProductGridSection products={data.data} />
      </SectionContainer>
    </MainContainer>
  );
}
