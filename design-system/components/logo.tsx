import Image from "next/image";
import primary from "@/design-system/assets/logos/bdw-primary.png";
import alternate from "@/design-system/assets/logos/bdw-alternate.png";
import wordmark from "@/design-system/assets/logos/bdw-wordmark.png";
import mascot from "@/design-system/assets/logos/bdw-mascot.png";

const logos = { primary, alternate, wordmark, mascot };

export function Logo({ variant = "primary", size = "md", decorative = false, avatar = false }: {
  variant?: keyof typeof logos; size?: "sm" | "md" | "lg"; decorative?: boolean; avatar?: boolean;
}) {
  return <span className="ds-logo" data-size={size} data-avatar={avatar || undefined}>
    <Image src={logos[variant]} sizes="12rem"
      alt={decorative ? "" : "Bruno Dog Walker"} />
  </span>;
}

export function MascotSignature({ base = "blue", size = "md", decorative = false }: {
  base?: "blue" | "cream"; size?: "sm" | "md" | "lg"; decorative?: boolean;
}) {
  return <span className="ds-signature" data-base={base} data-size={size}>
    <Image src={mascot} alt={decorative ? "" : "Bruno Dog Walker mascot"}
      sizes="9rem" />
  </span>;
}
