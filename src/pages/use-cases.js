import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SiteHero from "@site/src/components/Layout/SiteHero";
import UseCasesGrid from "@site/src/components/UseCasesGrid";
import BoundaryBox from "@site/src/components/Layout/BoundaryBox";
import OpenGraphInfo from "@site/src/components/Layout/OpenGraphInfo";
import TitleWithText from "@site/src/components/Layout/TitleWithText";
import SpacerBox from "@site/src/components/Layout/SpacerBox";
import BackgroundWrapper from "@site/src/components/Layout/BackgroundWrapper";
import {translate} from '@docusaurus/Translate';
import Divider from "@site/src/components/Layout/Divider";

function HomepageHeader() {
  return (
    <SiteHero
      title={translate({id: 'useCases.hero.title', message: 'Use Cases'})}
      description={translate({id: 'useCases.hero.description', message: 'How Cardano blockchain solves real-world problems across industries.'})}
      bannerType="fluidBlue"
    />
  );
}

export default function Home() {
  return (
    <Layout
      title={translate({id: 'useCases.layout.title', message: 'Use cases for enterprise | cardano.org'})}
      description={translate({id: 'useCases.layout.description', message: 'An open platform designed to empower billions without economic identity by offering decentralized applications for managing identity, value, and governance.'})}
    >
      <OpenGraphInfo pageName="use-cases-for-enterprise" />
      <HomepageHeader />
      <main>
        <BackgroundWrapper backgroundType={"zoom"}>
          <BoundaryBox>
          <TitleWithText
              description={[
                translate({id: 'useCases.intro.description', message: "Explore blockchain applications across industries. From identity verification to supply chain tracking, Cardano provides secure, scalable solutions for real-world challenges."}),
              ]}
            />

            <UseCasesGrid />

            <SpacerBox size="medium" />

            <Divider text={translate({id: 'useCases.divider.enterprise', message: 'Enterprise Solutions'})} id="enterprise" />
            <TitleWithText
              description={[
                translate({id: 'useCases.enterprise.description', message: "Looking for proven enterprise deployments? Explore case studies and real-world implementations by the Cardano Foundation and partners."}),
              ]}
            />
            <p style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Link
                to="/solutions"
                className="button button--primary button--lg"
              >
                {translate({id: 'useCases.enterprise.button', message: 'View Enterprise Solutions'})}
              </Link>
            </p>
          </BoundaryBox>
        </BackgroundWrapper>
        <SpacerBox size="medium" />
      </main>
    </Layout>
  );
}
