"use client";

import { useRef, type KeyboardEvent, type MouseEvent } from "react";
import { ActionLink } from "@/design-system/components/action";

const links = [
  ["#walks", "The walks"], ["#care", "Care & Meet & Greet"],
  ["#neighborhood", "The neighborhood"], ["#faq", "Good questions"],
];

export function LandingNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);

  function closeOnEscape(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Escape" || !menu.current?.open) return;
    event.preventDefault();
    menu.current.open = false;
    menu.current.querySelector("summary")?.focus();
  }

  function followLink(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (menu.current) menu.current.open = false;
  }

  return <>
    {links.map(([href, label]) => <a className="lp-nav-link" href={href} key={href}>{label}</a>)}
    <ActionLink href="#contact" className="lp-nav-contact" size="sm" arrow>Let’s meet</ActionLink>
    <details className="lp-mobile-menu" ref={menu}
      onBlur={event => {
        // A tap can blur the summary without identifying the next focus target.
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}>
      <summary onKeyDown={closeOnEscape}>Menu <span aria-hidden="true">+</span></summary>
      <div className="lp-menu-panel">
        {links.map(([href, label]) => <a href={href} key={href} onClick={followLink} onKeyDown={closeOnEscape}>{label}<span aria-hidden="true">↗</span></a>)}
        <a href="#motion-settings" className="lp-menu-motion" onClick={followLink} onKeyDown={closeOnEscape}>Motion settings</a>
        <ActionLink href="#contact" arrow onClick={followLink} onKeyDown={closeOnEscape}>Let’s meet your dog</ActionLink>
      </div>
    </details>
  </>;
}
