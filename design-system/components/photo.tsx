import Image, { type StaticImageData } from "next/image";
import { GlassSurface } from "@/design-system/components/surfaces";

export function BrandPhoto({ src, alt, caption, captionTreatment = "plain", ratio = "square", position = "center", sizes = "(max-width: 40rem) calc(100vw - 3rem), (max-width: 64rem) 50vw, 33vw" }: {
  src: StaticImageData; alt: string; caption?: string; captionTreatment?: "plain" | "glass";
  ratio?: "square" | "portrait" | "landscape"; position?: "center" | "top" | "bottom"; sizes?: string;
}) {
  return <figure className="ds-photo" data-caption={caption && captionTreatment === "glass" ? "glass" : undefined}
    tabIndex={caption && captionTreatment === "glass" ? 0 : undefined}>
    <div className="ds-photo-frame" data-ratio={ratio} data-position={position}>
      <Image src={src} alt={alt} sizes={sizes} />
    </div>
    {caption ? <figcaption className="ds-photo-caption">{captionTreatment === "glass" ? <GlassSurface elevation={1}>{caption}</GlassSurface> : caption}</figcaption> : null}
  </figure>;
}
