import Image from "next/image";
import { ActionLink } from "@/design-system/components/action";
import { Tag } from "@/design-system/components/content";
import { Spark } from "@/design-system/components/graphics";
import { MascotSignature } from "@/design-system/components/logo";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";
import crew from "@/design-system/assets/photos/park-crew.jpg";

const moments = [
  { number: "01", label: "THE GREAT OUTDOORS", title: "A whole world of smells.", text: "To you, it’s a familiar street. To them, it’s the most interesting place on earth.", image: brownDog, alt: "A spaniel next to bright green leaves", caption: "Every leaf has a story." },
  { number: "02", label: "THE LITTLE THINGS", title: "Take the scenic route.", text: "A shady path. A curious pause. A little fresh air in the middle of a big-city day.", image: parkDog, alt: "A small tricolor dog looking up on a park path", caption: "The best view is down here." },
  { number: "03", label: "THE HAPPY PART", title: "More joy. Per square block.", text: "Because sometimes the smallest adventures make the biggest difference.", image: crew, alt: "Two small dogs standing together on a park path", caption: "Small paws. Big main-character energy." },
];

export function WalkStory() {
  return <section className="lp-story lp-shell lp-section" id="walks" tabIndex={-1} aria-labelledby="walks-heading">
    <div className="lp-section-heading" data-reveal>
      <p className="lp-eyebrow">01 / A dog’s-eye view</p>
      <h2 id="walks-heading">Their favorite part<br />of <span>the day.</span></h2>
      <p>Less ordinary. More outdoors.<br />See the city from a little closer to the ground.</p>
    </div>
    <div className="lp-story-grid ds-scroll-stagger">
      {moments.map(moment => <article className="lp-story-card" key={moment.number} data-reveal>
        <figure><Image src={moment.image} alt={moment.alt} sizes="(max-width: 48rem) 88vw, 30vw" />
          <figcaption>{moment.caption}</figcaption><span className="lp-photo-number" aria-hidden="true">{moment.number}</span>
        </figure>
        <p className="lp-eyebrow">{moment.label}</p><h3>{moment.title}</h3><p>{moment.text}</p>
      </article>)}
    </div>
  </section>;
}

export function WalkDetails() {
  return <section className="lp-care" id="care" tabIndex={-1} aria-labelledby="care-heading">
    <div className="lp-shell lp-care-grid">
      <div className="lp-care-intro" data-reveal>
        <p className="lp-eyebrow">02 / Made personal</p>
        <h2 id="care-heading">Your dog.<br />Their world.<br /><span>Let’s talk.</span></h2>
        <p>A happy walking relationship starts with getting to know each other. Tell Bruno what makes your dog, your dog.</p>
        <ActionLink href="#contact" arrow tactile>Start with a Meet &amp; Greet</ActionLink>
        <div className="lp-care-signature"><MascotSignature base="cream" size="md" decorative /><span>Good walks begin<br />with a good hello.</span></div>
      </div>
      <div className="lp-care-list">
        <article data-reveal><span className="lp-step">01</span><div><p className="lp-eyebrow">Dog walking</p><h3>A little adventure.<br />A lot to look forward to.</h3><p>Let’s talk about your dog’s pace, personality and routine, and the kind of walk you’re looking for.</p></div><span className="lp-care-icon" aria-hidden="true">↗</span></article>
        <article data-reveal><span className="lp-step">02</span><div><p className="lp-eyebrow">Pet care</p><h3>Small details.<br />Big peace of mind.</h3><p>Share what care you need. Bruno can discuss the options, timing and details with you directly.</p></div><span className="lp-care-icon" aria-hidden="true">♡</span></article>
        <article data-reveal><span className="lp-step">03</span><div><p className="lp-eyebrow">Meet &amp; Greet</p><h3>People meet.<br />Tails do the talking.</h3><p>Introduce yourself and your dog. Ask your questions and discuss the next steps together.</p></div><span className="lp-care-icon" aria-hidden="true">✳</span></article>
      </div>
    </div>
  </section>;
}

export function Neighborhood() {
  return <section className="lp-neighborhood lp-shell lp-section" id="neighborhood" tabIndex={-1} aria-labelledby="neighborhood-heading">
    <div className="lp-neighborhood-copy" data-reveal>
      <p className="lp-eyebrow">03 / Right around the corner</p>
      <h2 id="neighborhood-heading">Big city.<br /><span>Neighborhood heart.</span></h2>
      <p>Bruno Dog Walker.<br />Upper East Side. Manhattan. New York.</p>
      <p>A neighborhood full of possibility, one walk at a time. Share your cross streets with Bruno to check coverage for your block.</p>
      <ActionLink href="#contact" variant="secondary" arrow>Say hello to Bruno</ActionLink>
    </div>
    <div className="lp-neighborhood-art" data-reveal>
      <div className="lp-city-label"><Tag>Upper East Side</Tag><span className="lp-eyebrow">MANHATTAN / NYC</span></div>
      <div className="lp-city-grid" aria-hidden="true"><span className="lp-city-park">A little green.</span><span className="lp-city-river">A little blue.</span><span className="lp-city-route" /><span className="lp-city-pin"><MascotSignature size="lg" base="cream" decorative /></span><Spark className="lp-city-spark" /></div>
      <p className="lp-city-caption">Your city. Their playground.</p>
    </div>
  </section>;
}
