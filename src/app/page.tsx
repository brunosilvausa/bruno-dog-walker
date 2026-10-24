import { SiteHeader } from "@/design-system/components/website";
import { LandingNavigation } from "@/components/landing/navigation";
import { LandingExperience } from "@/components/landing/experience";
import { HeroArt, HeroCopy } from "@/components/landing/hero";
import { WalkStory, WalkDetails, Neighborhood } from "@/components/landing/sections";
import { Contact, Questions, LandingFooter } from "@/components/landing/contact";
import "./landing.css";
import "./landing-sections.css";

export default function Home() {
  return (
    <div className="lp" id="top">
      <a className="ds-skip" href="#main">Skip to content</a>
      <div className="lp-nav-wrap">
        <SiteHeader homeHref="#top" navigationLabel="Main navigation">
          <LandingNavigation />
        </SiteHeader>
      </div>
      <main id="main" tabIndex={-1}>
        <LandingExperience heroCopy={<HeroCopy />} heroArt={<HeroArt />}>
          <div className="lp-ribbon" aria-label="Small paws. Big city. Everyday joy.">
            <span>Small paws. Big city.</span><span aria-hidden="true">✳</span>
            <span>Neighborhood walks. Everyday joy.</span><span aria-hidden="true">✳</span>
            <span>See you on the next walk.</span>
          </div>
          <WalkStory /><WalkDetails /><Neighborhood /><Questions /><Contact />
        </LandingExperience>
      </main>
      <LandingFooter />
    </div>
  );
}
