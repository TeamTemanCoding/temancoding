import PageContainer from "~/components/layouts/PageContainer";
import SectionContainer from "~/components/layouts/SectionContainer";

const Home = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <h1 className="text-4xl font-bold text-center">Hero</h1>
      </SectionContainer>
      <SectionContainer>
        <h1 className="text-4xl font-bold text-center">Benefit</h1>
      </SectionContainer>
    </PageContainer>
  );
}

export default Home;