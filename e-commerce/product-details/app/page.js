import MainContainer from "./_components/MainContainer";
import ProductDetails from "./_components/ProductDetails";
import SectionContainer from "./_components/SectionContainer";

export default function Home() {
  return (
    <MainContainer>
      <SectionContainer>
        <ProductDetails />
      </SectionContainer>
    </MainContainer>
  );
}
