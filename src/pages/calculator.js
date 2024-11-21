import Layout from "@theme/Layout";
import SiteHero from "@site/src/components/Layout/SiteHero";
import BoundaryBox from "@site/src/components/Layout/BoundaryBox";
import TitleWithText from "@site/src/components/Layout/TitleWithText";
import OpenGraphImage from "@site/src/components/Layout/OpenGraphImage";
import SpacerBox from "@site/src/components/Layout/SpacerBox";

function HomepageHeader() {
  const { siteTitle } = "useDocusaurusContext()";
  return (
    <SiteHero
      title="Staking Calculator"
      description="See how much rewards you can possibly earn by staking ada."
      bannerType="dots"
    />
  );
}

export default function Home() {

  return (
    <Layout
    title="Staking Calculator | cardano.org"
    description="See how much rewards you can possibly earn by staking ada."
    >
      <OpenGraphImage pageName="calculator" />
      <HomepageHeader />
      <main>
      <BoundaryBox>
        <TitleWithText
              title="Reward Calculator"
              titleType="black"
              headingDot={true}
            />
      </BoundaryBox>
      <iframe
          src="/reward-calculator/index.html"
          sandbox="allow-scripts allow-same-origin"
          style={{
            width: "100%",
            height: "100vh",
            border: "none"
          }}
          title="Cardano Reward Calculator"
        ></iframe>

        <BoundaryBox>
        <TitleWithText
              title="The Reward Calculator is being revised"
              description={[
                "We're currently enhancing our calculator to bring you a more robust and user-friendly \
                experience. It's temporarily unavailable as we make these improvements. Please check \
                back soon to access the updated tool. We appreciate your patience and are excited to \
                share the improvements with you."
              ]}
              titleType="black"
              headingDot={true}
            />
            <SpacerBox size="medium"/>
        </BoundaryBox>
      </main>
    </Layout>
  );
}
