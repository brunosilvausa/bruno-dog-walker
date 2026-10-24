import Image from "next/image";
import { ActionLink } from "@/design-system/components/action";
import { Tag } from "@/design-system/components/content";
import { Spark } from "@/design-system/components/graphics";
import { MascotSignature } from "@/design-system/components/logo";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";

export function HeroCopy() {
  return <div className="lp-hero-copy">
    <p className="lp-eyebrow"><span className="lp-location-dot" /> Upper East Side, NYC</p>
    <h1 id="hero-heading">Big adventures.<br /><span>Little paws.</span></h1>
    <p className="lp-hero-intro">A big city. A thousand things to sniff.<br />A walk worth wagging about.</p>
    <p className="lp-hero-description">Dog walking &amp; pet care with Bruno.<br />Right here on Manhattan’s Upper East Side.</p>
    <div className="lp-hero-actions">
      <ActionLink href="#contact" tactile arrow>Let’s meet your dog</ActionLink>
      <a className="lp-text-link" href="#walks">Explore the walks <span aria-hidden="true">↓</span></a>
    </div>
    <div className="lp-hero-note"><span className="lp-note-line" /> For the dogs. And the people who love them.</div>
  </div>;
}

export function HeroArt() {
  return <div className="lp-hero-art">
    <div className="lp-hero-orbit" aria-hidden="true" />
    <svg className="lp-leash" viewBox="0 0 600 620" fill="none" aria-hidden="true">
      <path d="M40 530C-30 350 170 550 250 490S565 385 550 180 365 5 340 100 550 190 590 40" />
    </svg>
    <div className="lp-main-photo ds-spatial-layer" data-depth="near">
      <Image src={parkDog} alt="A curious tricolor dog on a leafy park path" loading="eager" fetchPriority="high" sizes="(max-width: 48rem) 74vw, 32vw" />
    </div>
    <div className="lp-mini-photo ds-spatial-layer" data-depth="far">
      <Image src={brownDog} alt="A brown and white dog exploring the greenery" sizes="(max-width: 48rem) 30vw, 14vw" />
      <span>Sniff. Smile. Repeat.</span>
    </div>
    <div className="lp-hero-sticker ds-parallax-front"><Tag expressive size="lg">More than a walk.</Tag></div>
    <div className="lp-hero-mascot ds-spatial-layer" data-depth="far"><MascotSignature base="cream" size="lg" decorative /></div>
    <Spark className="lp-hero-spark" />
  </div>;
}
