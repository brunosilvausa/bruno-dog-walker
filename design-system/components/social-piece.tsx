import Image, { type StaticImageData } from "next/image";
import { Tag } from "@/design-system/components/content";
import { MascotSignature } from "@/design-system/components/logo";

/** Responsive editorial preview; its ratio does not imply a pixel-size export. */
export function SocialPiece({ format = "feed", title, series, photo, alt, guides = false }: {
  format?: "feed" | "story" | "landscape";
  title: string; series: string; photo: StaticImageData; alt: string; guides?: boolean;
}) {
  return <figure className="ds-social-piece" data-format={format} data-guides={guides || undefined}>
    <div className="ds-social-copy"><Tag size="sm" variant={format === "landscape" ? "plain" : "sunshine"}>{series}</Tag>
      <p className="ds-social-title">{title}</p>
    </div>
    <div className="ds-social-photo"><Image src={photo} alt={alt}
      sizes="(max-width: 40rem) calc(100vw - 3rem), 33vw" /></div>
    <figcaption className="ds-social-signature"><MascotSignature size="sm" base="cream" decorative />
      <span>Bruno Dog Walker</span>
    </figcaption>
    {guides ? <span className="ds-social-guides" aria-hidden="true" /> : null}
  </figure>;
}
