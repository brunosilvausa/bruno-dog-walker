import { Logo, MascotSignature } from "@/design-system/components/logo";
import { ContactForm } from "@/components/landing/contact-form";

const questions = [
  ["Where do you walk?", "Bruno Dog Walker is based on Manhattan’s Upper East Side. Share your cross streets when you get in touch so Bruno can confirm coverage for your address."],
  ["How do we get started?", "Introduce yourself and your dog through the contact form below, then discuss a Meet & Greet with Bruno. A request does not confirm a booking."],
  ["What should I share about my dog?", "Their name, personality, usual routine and the care you’re looking for are a great place to start. You can discuss any specific needs directly with Bruno."],
  ["What are the rates and available times?", "Ask Bruno for current pricing and availability. You can agree on the service, timing and details together before making arrangements."],
];

export function Questions() {
  return <section className="lp-faq lp-shell lp-section" id="faq" tabIndex={-1} aria-labelledby="faq-heading">
    <div data-reveal><p className="lp-eyebrow">04 / Good to know</p><h2 id="faq-heading">Good questions.<br /><span>Good beginnings.</span></h2><p>Curiosity isn’t just for dogs.</p></div>
    <div className="lp-faq-list">{questions.map(([question, answer]) => <details key={question} name="questions">
      <summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p>
    </details>)}</div>
  </section>;
}

export function Contact() {
  return <section className="lp-contact" id="contact" tabIndex={-1} aria-labelledby="contact-heading">
    <div className="lp-shell lp-contact-inner">
      <div className="lp-contact-copy">
      <p className="lp-eyebrow">One hello. A whole new adventure.</p>
      <h2 id="contact-heading">Let’s make<br /><span>tails wag.</span></h2>
      <p>Your dog’s next chapter starts with a conversation.<br />Say hello to Bruno and ask about a Meet &amp; Greet.</p>
      <div className="lp-contact-mascot" aria-hidden="true"><Logo variant="mascot" size="lg" decorative /></div>
      </div>
      <ContactForm />
    </div>
  </section>;
}

export function LandingFooter() {
  return <footer className="lp-footer lp-shell">
    <a href="#top" className="lp-footer-brand"><MascotSignature base="cream" size="sm" decorative /><span>Bruno Dog Walker<small>Small paws. Big city.</small></span></a>
    <nav aria-label="Footer navigation"><a href="#walks">The walks</a><a href="#care">Care &amp; Meet &amp; Greet</a><a href="#neighborhood">Our neighborhood</a><a href="#faq">FAQ</a><a href="#contact">Get in touch ↗</a><a href="#motion-settings">Motion settings</a></nav>
    <div className="lp-footer-bottom"><span>© 2026 Bruno Dog Walker</span><span>Upper East Side, Manhattan, NYC</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}
