import { SocialPiece } from "@/design-system/components/social-piece";
import walkingGroup from "@/design-system/assets/photos/walking-group.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";

export function SocialSection() {
  return <section id="social" className="ds-section" aria-labelledby="social-title">
    <h2 id="social-title" className="ds-heading">15 / Stories with room to breathe</h2>
    <p className="ds-guide-intro">One idea, one photograph and a familiar signature. Solid copy regions preserve contrast and keep words away from eyes and snouts.</p>
    <div className="ds-grid ds-social-examples">
      <div className="ds-stack"><h3 className="ds-title-small">Feed / 4:5</h3>
        <SocialPiece title="Better together." series="Walk diaries / NYC" photo={walkingGroup} alt="Dogs walking together on a park path" />
        <p className="ds-brand-note">1080 × 1350 reference canvas. Editorial copy and photo have separate regions.</p></div>
      <div className="ds-stack"><h3 className="ds-title-small">Story / 9:16</h3>
        <SocialPiece format="story" title="Small paws. Big city." series="Small moments / NYC" photo={brownDog} alt="Brown and white dog beside green leaves" guides />
        <p className="ds-brand-note">1080 × 1920 reference canvas. Dashed guides illustrate 20% top / bottom and 6% left / 15% right clearance.</p></div>
      <div className="ds-stack"><h3 className="ds-title-small">Landscape / 16:9</h3>
        <SocialPiece format="landscape" title="Little walks. Big joy." series="Walk diaries / NYC" photo={walkingGroup} alt="A group of dogs on a neighborhood walk" />
        <p className="ds-brand-note">1280 × 720 reference canvas. Keep the title short and check the crop at its actual destination.</p></div>
    </div>
    <p className="ds-brand-note">Responsive HTML specimens, not export files. Guides are editorial aids: platform controls and crops change. Check the final platform preview. Photos and copy are examples; confirm names and account details before publication.</p>
  </section>;
}
