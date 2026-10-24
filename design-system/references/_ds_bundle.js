/* @ds-bundle: {"format":4,"namespace":"BrunoDogWalkerDesignSystem_0597c9","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CtaStrip","sourcePath":"components/content/CtaStrip.jsx"},{"name":"Highlight","sourcePath":"components/content/Highlight.jsx"},{"name":"Logo","sourcePath":"components/content/Logo.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ThemeSwitch","sourcePath":"components/forms/ThemeSwitch.jsx"},{"name":"Spark","sourcePath":"components/graphics/Spark.jsx"},{"name":"Wave","sourcePath":"components/graphics/Wave.jsx"},{"name":"Mascot","sourcePath":"components/motion/Mascot.jsx"},{"name":"Parallax","sourcePath":"components/motion/Parallax.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"AmbientGlow","sourcePath":"components/spatial/AmbientGlow.jsx"},{"name":"AnimatedMascot","sourcePath":"components/spatial/AnimatedMascot.jsx"},{"name":"FloatingElement","sourcePath":"components/spatial/FloatingElement.jsx"},{"name":"GlassSurface","sourcePath":"components/spatial/GlassSurface.jsx"},{"name":"ScrollReveal","sourcePath":"components/spatial/ScrollReveal.jsx"},{"name":"SpatialCard","sourcePath":"components/spatial/SpatialCard.jsx"},{"name":"SpatialLayer","sourcePath":"components/spatial/SpatialCard.jsx"},{"name":"StaggerContainer","sourcePath":"components/spatial/StaggerContainer.jsx"},{"name":"TactileButton","sourcePath":"components/spatial/TactileButton.jsx"},{"name":"GlassPanel","sourcePath":"components/surfaces/GlassPanel.jsx"},{"name":"ImageTile","sourcePath":"components/surfaces/ImageTile.jsx"},{"name":"CaptionBlock","sourcePath":"components/video/CaptionBlock.jsx"},{"name":"CaptionWord","sourcePath":"components/video/CaptionBlock.jsx"},{"name":"NameCaption","sourcePath":"components/video/NameCaption.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5af718b20435","components/content/Card.jsx":"2bd3378db7c1","components/content/CtaStrip.jsx":"e12f8e36adae","components/content/Highlight.jsx":"4a8b59b65154","components/content/Logo.jsx":"d0ec3be579d7","components/content/Tag.jsx":"0f33a8e2dd16","components/forms/Checkbox.jsx":"c98ca63b5e4b","components/forms/Field.jsx":"7e13c223415c","components/forms/Select.jsx":"ae031a0a4826","components/forms/ThemeSwitch.jsx":"401f3caa9478","components/graphics/Spark.jsx":"7ca57efd0ffc","components/graphics/Wave.jsx":"96fd82bc9f7f","components/motion/Mascot.jsx":"b55074e7cbc5","components/motion/Parallax.jsx":"83bbe4a0d559","components/motion/Reveal.jsx":"438c2faa86ac","components/spatial/AmbientGlow.jsx":"5084b43eb735","components/spatial/AnimatedMascot.jsx":"cc78066f451a","components/spatial/FloatingElement.jsx":"dcd4c331cc0d","components/spatial/GlassSurface.jsx":"06f56324854d","components/spatial/ScrollReveal.jsx":"5bebad193bcc","components/spatial/SpatialCard.jsx":"94f7a5739519","components/spatial/StaggerContainer.jsx":"01a7fe6591ce","components/spatial/TactileButton.jsx":"e8177821bd68","components/surfaces/GlassPanel.jsx":"0de18a95e47f","components/surfaces/ImageTile.jsx":"702ce09b317a","components/video/CaptionBlock.jsx":"30b5c2d8cae9","components/video/NameCaption.jsx":"9369cc7bc727","ui_kits/social/FeedLayouts.jsx":"0bf90bd3fa54","ui_kits/social/Piece.jsx":"839bf20bc85c","ui_kits/social/VideoLayouts.jsx":"da7855c7a6f4","ui_kits/spatial/SpatialSections.jsx":"9d0d6df95fb8","ui_kits/spatial/SpatialShowcase.jsx":"350d16587f11","ui_kits/website/BookPage.jsx":"31d5463a6131","ui_kits/website/HomePage.jsx":"e3a401405990","ui_kits/website/SiteChrome.jsx":"8502f734e5cf"},"inlinedExternals":[],"unexposedExports":[{"name":"useFieldCss","sourcePath":"components/forms/Field.jsx"},{"name":"useRevealPhase","sourcePath":"components/spatial/ScrollReveal.jsx"}]} */

(() => {

const __ds_ns = (window.BrunoDogWalkerDesignSystem_0597c9 = window.BrunoDogWalkerDesignSystem_0597c9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.bdw-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:var(--control-height);padding:0 24px;border-radius:var(--radius-pill);font:var(--weight-action) 16px/1.2 var(--font-sans);text-decoration:none;cursor:pointer;border:2px solid transparent;box-sizing:border-box;white-space:nowrap;transition:background var(--duration-micro) var(--ease-premium),color var(--duration-micro) var(--ease-premium),box-shadow var(--duration-hover) var(--ease-premium),transform var(--duration-hover) var(--ease-spring)}
.bdw-btn:hover,.bdw-btn.is-hover{transform:translateY(var(--lift-button)) scale(var(--scale-hover))}
.bdw-btn:active,.bdw-btn.is-active{transform:translateY(1px) scale(var(--scale-press));transition-duration:var(--duration-micro),var(--duration-micro),var(--duration-micro),90ms}
.bdw-btn__arrow{display:inline-block;transition:transform var(--duration-hover) var(--ease-spring)}
.bdw-btn:hover .bdw-btn__arrow,.bdw-btn.is-hover .bdw-btn__arrow{transform:translate(var(--arrow-nudge),calc(var(--arrow-nudge)*-1))}
.bdw-btn--primary{background:var(--action-primary-bg);color:var(--action-primary-fg)}
.bdw-btn--primary:hover,.bdw-btn--primary.is-hover{background:var(--action-primary-bg-hover);color:var(--action-primary-fg);box-shadow:var(--glow-warm),var(--elevation-1)}
.bdw-btn--glow-neon.bdw-btn--primary:hover,.bdw-btn--glow-neon.is-hover{box-shadow:var(--glow-neon),var(--elevation-1)}
.bdw-btn--glow-none:hover,.bdw-btn--glow-none.is-hover{box-shadow:none}
.bdw-btn--primary:active,.bdw-btn--primary.is-active{background:var(--action-primary-bg-pressed);box-shadow:var(--shadow-contact)}
.bdw-btn--secondary{background:transparent;color:var(--action-secondary-fg);border-color:var(--action-secondary-border)}
.bdw-btn--secondary:hover,.bdw-btn--secondary.is-hover{background:var(--action-secondary-bg-hover);color:var(--action-secondary-fg);box-shadow:var(--elevation-1)}
.bdw-btn--cream{background:var(--bdw-warm-cream);color:var(--bdw-deep-walk)}
.bdw-btn--cream:hover,.bdw-btn--cream.is-hover{background:var(--bdw-white);box-shadow:var(--glow-warm)}
.bdw-btn--cream:active,.bdw-btn--cream.is-active{box-shadow:none}
.bdw-btn--sm{min-height:40px;padding:0 18px;font-size:14px}
.bdw-btn--block{display:flex;width:100%}
.bdw-btn:focus-visible,.bdw-btn.is-focus{outline:var(--focus-ring);outline-offset:var(--focus-offset);box-shadow:var(--glow-warm)}
.bdw-btn:disabled,.bdw-btn[aria-disabled=true]{background:var(--action-disabled-bg);color:var(--action-disabled-fg);border-color:transparent;cursor:not-allowed;transform:none;box-shadow:none}
.bdw-btn[aria-busy=true]{cursor:progress;transform:none;box-shadow:none}
.bdw-btn__spin{width:16px;height:16px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:bdw-spin 700ms linear infinite;flex:none}
@keyframes bdw-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.bdw-btn,.bdw-btn:hover,.bdw-btn:active,.bdw-btn__arrow{transform:none!important}.bdw-btn__spin{animation:none;border-right-color:currentColor;opacity:.5}}
:root[data-reduce-motion] .bdw-btn,:root[data-reduce-motion] .bdw-btn__arrow{transform:none!important}:root[data-reduce-motion] .bdw-btn__spin{animation:none;border-right-color:currentColor;opacity:.5}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-btn-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-btn-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
function Button({
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  block = false,
  state,
  glow = "warm",
  loading = false,
  loadingLabel,
  disabled,
  children,
  className = "",
  ...rest
}) {
  useCss();
  const cls = ["bdw-btn", "bdw-btn--" + variant, "bdw-btn--glow-" + glow, size === "sm" ? "bdw-btn--sm" : "", block ? "bdw-btn--block" : "", state ? "is-" + state : "", className].filter(Boolean).join(" ");
  const body = loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "bdw-btn__spin",
    "aria-hidden": "true"
  }), loadingLabel || children) : /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "bdw-btn__arrow",
    "aria-hidden": "true"
  }, "\u2197"));
  if (href && !disabled && !loading) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest), body);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-busy": loading || undefined
  }, rest, loading ? {
    onClick: e => e.preventDefault()
  } : {}), body);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
const CSS = `.bdw-card{position:relative;background:var(--surface-card);border:1px solid var(--border-translucent);border-radius:var(--radius-card);padding:24px;display:flex;flex-direction:column;gap:12px;color:var(--text-body);box-shadow:var(--elevation-1);overflow:hidden;transition:transform var(--duration-normal) var(--ease-premium),box-shadow var(--duration-normal) var(--ease-premium),border-color var(--duration-normal) var(--ease-premium)}
.bdw-card[data-elev="0"]{box-shadow:var(--elevation-0);border-color:var(--border-card)}
.bdw-card[data-tone=tint]{background:var(--surface-tint);border-color:transparent;box-shadow:none}
.bdw-card[data-tone=cream]{background:var(--bdw-warm-cream)}
.bdw-card--interactive:hover,.bdw-card--interactive:focus-within,.bdw-card--interactive.is-hover{transform:translateY(var(--lift-hover));box-shadow:var(--elevation-2);border-color:var(--border-translucent-strong)}
.bdw-card--tilt{--rx:0deg;--ry:0deg;--mx:50%;--my:0%;--sx:0;--sy:0;transform:perspective(var(--perspective-card)) rotateX(0deg) rotateY(0deg) translateY(0);transition:transform var(--duration-reset) var(--ease-spring-soft),box-shadow var(--duration-hover) var(--ease-premium),border-color var(--duration-hover) var(--ease-premium);will-change:transform}
.bdw-card--tilt.bdw-card--interactive:hover,.bdw-card--tilt.bdw-card--interactive:focus-within,.bdw-card--tilt.is-hover{transform:perspective(var(--perspective-card)) rotateX(var(--rx)) rotateY(var(--ry)) translateY(var(--lift-card));box-shadow:calc(var(--sx)*1px) calc(10px + var(--sy)*1px) 22px rgba(69,32,15,.07),calc(var(--sx)*2.4px) calc(28px + var(--sy)*2.4px) 56px rgba(69,32,15,.13)}
.bdw-card--tilt.is-tracking{transition:transform var(--duration-track) linear,box-shadow var(--duration-track) linear}
.bdw-card--tilt::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:2;background:radial-gradient(circle at var(--mx) var(--my),var(--light-highlight),transparent 58%);opacity:0;transition:opacity var(--duration-hover) var(--ease-premium)}
.bdw-card--tilt:hover::after,.bdw-card--tilt.is-hover::after{opacity:1}
.bdw-card__media{margin:-24px -24px 4px;aspect-ratio:16/10;overflow:hidden;background:var(--surface-tint)}
.bdw-card__media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform var(--duration-slow) var(--ease-premium)}
.bdw-card--interactive:hover .bdw-card__media img,.bdw-card--interactive.is-hover .bdw-card__media img{transform:scale(1.04)}
.bdw-card__eyebrow{font-family:var(--font-label);font-weight:700;font-size:16px;text-transform:uppercase;letter-spacing:.02em}
.bdw-card__title{margin:0;font:900 24px/1.2 var(--font-sans);letter-spacing:-0.02em}
.bdw-card__body{font-size:16px;line-height:1.6}
.bdw-card__foot{margin-top:auto;padding-top:8px}
@media (prefers-reduced-motion:reduce){.bdw-card--interactive:hover,.bdw-card--tilt.bdw-card--interactive:hover,.bdw-card--tilt.bdw-card--interactive:focus-within{transform:none}.bdw-card__media img{transition:none}.bdw-card--tilt::after{display:none}}
:root[data-reduce-motion] .bdw-card--interactive:hover,:root[data-reduce-motion] .bdw-card--tilt.bdw-card--interactive:hover,:root[data-reduce-motion] .bdw-card--tilt.bdw-card--interactive:focus-within{transform:none}
:root[data-reduce-motion] .bdw-card__media img{transition:none;transform:none!important}:root[data-reduce-motion] .bdw-card--tilt::after{display:none}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-card-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-card-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
const finePointer = () => !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;
function Card({
  eyebrow,
  title,
  children,
  footer,
  tone = "white",
  elevation = 1,
  interactive = false,
  tilt = false,
  maxTilt = 4,
  media,
  mediaAlt = "",
  state,
  style
}) {
  useCss();
  const ref = React.useRef(null);
  const isTilt = tilt && interactive;
  const set = o => {
    const el = ref.current;
    if (el) for (const k in o) el.style.setProperty(k, o[k]);
  };
  const onMove = isTilt ? e => {
    if (e.pointerType !== "mouse" || reduced() || !finePointer()) return;
    const el = ref.current,
      r = el.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)),
      py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    const m = Math.min(5, maxTilt);
    el.classList.add("is-tracking");
    set({
      "--ry": ((px - .5) * 2 * m).toFixed(2) + "deg",
      "--rx": ((.5 - py) * 2 * m).toFixed(2) + "deg",
      "--mx": (px * 100).toFixed(1) + "%",
      "--my": (py * 100).toFixed(1) + "%",
      "--sx": ((.5 - px) * 10).toFixed(2),
      "--sy": ((.5 - py) * 6).toFixed(2)
    });
  } : undefined;
  const onLeave = isTilt ? () => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove("is-tracking");
    set({
      "--rx": "0deg",
      "--ry": "0deg",
      "--sx": "0",
      "--sy": "0"
    });
  } : undefined;
  const cls = "bdw-card" + (interactive ? " bdw-card--interactive" : "") + (isTilt ? " bdw-card--tilt" : "") + (state === "hover" ? " is-hover" : "");
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: cls,
    "data-tone": tone,
    "data-elev": String(elevation),
    style: style,
    onPointerMove: onMove,
    onPointerLeave: onLeave
  }, media && /*#__PURE__*/React.createElement("div", {
    className: "bdw-card__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: mediaAlt
  })), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "bdw-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "bdw-card__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "bdw-card__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "bdw-card__foot"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/CtaStrip.jsx
try { (() => {
function CtaStrip({
  eyebrow,
  title,
  text,
  action,
  aside
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-brand-deep)",
      color: "var(--bdw-warm-cream)",
      borderRadius: "var(--radius-block)",
      padding: "36px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      boxShadow: "var(--elevation-2)",
      border: "1px solid rgba(255,255,255,.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0,
      flex: "1 1 320px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 700,
      fontSize: 18,
      textTransform: "uppercase",
      letterSpacing: ".02em"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "900 30px/1.1 var(--font-sans)",
      letterSpacing: "-0.03em",
      textWrap: "balance"
    }
  }, title), text && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 15,
      lineHeight: 1.5
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, aside, action));
}
Object.assign(__ds_scope, { CtaStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CtaStrip.jsx", error: String((e && e.message) || e) }); }

// components/content/Highlight.jsx
try { (() => {
function Highlight({
  children,
  tone = "sunshine"
}) {
  const t = tone === "sunshine" ? {
    background: "var(--bdw-sunshine)",
    color: "var(--bdw-cocoa)"
  } : {
    background: "transparent",
    color: "var(--bdw-deep-walk)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...t,
      padding: tone === "sunshine" ? "0 .08em" : 0,
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone"
    }
  }, children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/content/Logo.jsx
try { (() => {
const FILES = {
  primary: "bdw-primary.png",
  alternate: "bdw-alternate.png",
  wordmark: "bdw-wordmark.png",
  mascot: "bdw-mascot.png"
};
const ALT = {
  primary: "Bruno Dog Walker",
  alternate: "Bruno Dog Walker",
  wordmark: "Bruno Dog Walker",
  mascot: "Bruno Dog Walker mascot"
};
function Logo({
  variant = "primary",
  width = 120,
  base = "assets/logos/",
  avatar = false,
  style
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: base + FILES[variant],
    alt: ALT[variant],
    style: {
      width: avatar ? "78%" : width,
      height: "auto",
      display: "block",
      ...(avatar ? {} : style)
    }
  });
  if (!avatar) return img;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width,
      height: width,
      borderRadius: "50%",
      background: "var(--bdw-warm-cream)",
      display: "inline-grid",
      placeItems: "center",
      overflow: "hidden",
      flex: "none",
      ...style
    }
  }, img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
const V = {
  sunshine: {
    background: "var(--bdw-sunshine)",
    color: "var(--bdw-cocoa)"
  },
  cream: {
    background: "var(--bdw-warm-cream)",
    color: "var(--bdw-cocoa)"
  },
  plain: {
    background: "transparent",
    color: "var(--bdw-deep-walk)",
    padding: 0
  }
};
function Tag({
  variant = "sunshine",
  size = "md",
  children,
  style
}) {
  const fs = size === "lg" ? 20 : size === "sm" ? 13 : 16;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: size === "sm" ? "4px 10px" : "6px 14px",
      borderRadius: 999,
      fontFamily: "var(--font-label)",
      fontWeight: 700,
      fontSize: fs,
      lineHeight: 1.1,
      letterSpacing: ".02em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...V[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      minHeight: 48,
      font: "700 16px/1.3 var(--font-sans)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .6 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: 22,
      height: 22,
      margin: 0,
      accentColor: "var(--bdw-deep-walk)"
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.bdw-field{display:flex;flex-direction:column;gap:8px;font:700 16px/1.3 var(--font-sans);color:var(--text-body)}
.bdw-field input,.bdw-field select,.bdw-field textarea{box-sizing:border-box;min-height:var(--control-height);padding:10px 14px;border:1px solid var(--border-field);border-radius:var(--radius-field);background:var(--bdw-white);color:var(--text-body);font:400 16px/1.4 var(--font-sans);width:100%;transition:border-color var(--duration-fast) var(--ease-premium),box-shadow var(--duration-normal) var(--ease-premium),background var(--duration-fast) var(--ease-premium)}
.bdw-field textarea{min-height:110px;resize:vertical}
.bdw-field input::placeholder,.bdw-field textarea::placeholder{color:var(--text-muted)}
.bdw-field input:hover,.bdw-field select:hover,.bdw-field textarea:hover{border-color:var(--bdw-cocoa-soft)}
.bdw-field input:focus-visible,.bdw-field select:focus-visible,.bdw-field textarea:focus-visible,.bdw-field.is-focus input{outline:var(--focus-ring);outline-offset:2px;border-color:var(--border-focus);box-shadow:var(--glow-warm)}
.bdw-field[data-state=error] input,.bdw-field[data-state=error] textarea,.bdw-field[data-state=error] select{border:2px solid var(--feedback-error)}
.bdw-field[data-state=success] input,.bdw-field[data-state=success] textarea{border:2px solid var(--feedback-success)}
.bdw-field input:disabled,.bdw-field select:disabled,.bdw-field textarea:disabled{background:#F4EEE3;border-color:var(--border-card);color:var(--text-muted);cursor:not-allowed}
.bdw-field[data-disabled=true]{color:var(--text-muted)}
.bdw-field small{font:400 14px/1.4 var(--font-sans);color:var(--text-muted)}
.bdw-field[data-state=error] small.msg{color:var(--feedback-error);font-weight:700}
.bdw-field[data-state=success] small.msg{color:var(--feedback-success);font-weight:700}`;
function useFieldCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-field-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-field-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
let n = 0;
function Field({
  label,
  help,
  error,
  success,
  multiline = false,
  id,
  state,
  disabled,
  ...rest
}) {
  useFieldCss();
  const fid = React.useMemo(() => id || "bdw-f" + ++n, [id]);
  const st = error ? "error" : success ? "success" : undefined;
  const msg = error || success;
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    className: "bdw-field" + (state === "focus" ? " is-focus" : ""),
    "data-state": st,
    "data-disabled": disabled || undefined,
    htmlFor: fid
  }, label, /*#__PURE__*/React.createElement(Tag, _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": help || msg ? fid + "-d" : undefined
  }, rest)), (msg || help) && /*#__PURE__*/React.createElement("small", {
    id: fid + "-d",
    className: msg ? "msg" : "",
    role: error ? "alert" : undefined
  }, msg || help));
}
Object.assign(__ds_scope, { useFieldCss, Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
let n = 0;
function Select({
  label,
  help,
  options = [],
  id,
  ...rest
}) {
  __ds_scope.useFieldCss();
  const fid = React.useMemo(() => id || "bdw-s" + ++n, [id]);
  return /*#__PURE__*/React.createElement("label", {
    className: "bdw-field",
    htmlFor: fid
  }, label, /*#__PURE__*/React.createElement("select", _extends({
    id: fid
  }, rest), options.map(o => {
    const v = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v.value,
      value: v.value
    }, v.label);
  })), help && /*#__PURE__*/React.createElement("small", null, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/ThemeSwitch.jsx
try { (() => {
function ThemeSwitch({
  options = [],
  value,
  onChange,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": label,
    style: {
      display: "inline-flex",
      gap: 4,
      padding: 4,
      borderRadius: 999,
      background: "var(--bdw-white)",
      border: "1px solid var(--border-translucent-strong)",
      boxShadow: "var(--elevation-1)"
    }
  }, options.map(o => {
    const v = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    const on = v.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v.value,
      type: "button",
      "aria-pressed": on,
      onClick: () => onChange && onChange(v.value),
      style: {
        minHeight: 48,
        padding: "0 20px",
        borderRadius: 999,
        border: 0,
        cursor: "pointer",
        font: "800 15px/1 var(--font-sans)",
        background: on ? "var(--bdw-deep-walk)" : "transparent",
        color: on ? "var(--bdw-warm-cream)" : "var(--text-body)",
        boxShadow: on ? "var(--glow-warm)" : "none",
        transition: "background var(--duration-normal) var(--ease-premium), color var(--duration-fast) var(--ease-premium), box-shadow var(--duration-normal) var(--ease-premium)"
      }
    }, v.label);
  }));
}
Object.assign(__ds_scope, { ThemeSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ThemeSwitch.jsx", error: String((e && e.message) || e) }); }

// components/graphics/Spark.jsx
try { (() => {
function Spark({
  size = 48,
  color = "var(--bdw-deep-walk)",
  glow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      fontSize: size,
      lineHeight: 1,
      color,
      filter: glow ? "var(--glow-text)" : "none",
      ...style
    }
  }, "\u2726");
}
Object.assign(__ds_scope, { Spark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/Spark.jsx", error: String((e && e.message) || e) }); }

// components/graphics/Wave.jsx
try { (() => {
function Wave({
  fill = "var(--bdw-walk-blue)",
  stroke = "var(--bdw-sunshine)",
  height = 120,
  flip = false,
  variant = "hill",
  style
}) {
  const tr = flip ? {
    transform: "scaleY(-1)"
  } : {};
  if (variant === "swoop") return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 60",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      height,
      ...tr,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H400V10C260 60 150 5 0 40Z",
    fill: fill
  }), stroke && /*#__PURE__*/React.createElement("path", {
    d: "M0 40C150 5 260 60 400 10",
    fill: "none",
    stroke: stroke,
    strokeWidth: "4",
    vectorEffect: "non-scaling-stroke"
  }));
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 180",
    preserveAspectRatio: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      width: "100%",
      height,
      ...tr,
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 90 C130 10 230 160 370 90 S530 30 600 55 V180 H0Z",
    fill: fill
  }), stroke && /*#__PURE__*/React.createElement("path", {
    d: "M0 90 C130 10 230 160 370 90 S530 30 600 55",
    fill: "none",
    stroke: stroke,
    strokeWidth: "8"
  }));
}
Object.assign(__ds_scope, { Wave });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/graphics/Wave.jsx", error: String((e && e.message) || e) }); }

// components/motion/Mascot.jsx
try { (() => {
const CSS = `.bdw-mascot{position:relative;width:100%;aspect-ratio:1;--tx:0;--ty:0;user-select:none;-webkit-tap-highlight-color:transparent}
.bdw-mascot__ring{position:absolute;inset:0;border-radius:50%;border:2px solid var(--bdw-walk-blue);transform:translate(calc(var(--tx)*-3px*var(--mi,1)),calc(var(--ty)*-3px*var(--mi,1)));transition:transform var(--duration-reset) var(--ease-spring-soft)}
.bdw-mascot__disc{position:absolute;inset:5%;border-radius:50%;background:var(--surface-tint);box-shadow:var(--light-rim),inset 0 0 0 1px rgba(255,255,255,.6),0 0 60px rgba(255,206,45,.18);transform:translate(calc(var(--tx)*2px*var(--mi,1)),calc(var(--ty)*2px*var(--mi,1)));transition:transform var(--duration-reset) var(--ease-spring-soft),box-shadow var(--duration-slow) var(--ease-premium)}
.bdw-mascot:hover .bdw-mascot__disc{box-shadow:var(--light-rim),inset 0 0 0 1px rgba(255,255,255,.6),0 0 76px rgba(255,206,45,.28)}
.bdw-mascot__shadow{position:absolute;left:27%;width:46%;top:72%;height:7%;transform:translateX(calc(var(--tx)*-5px*var(--mi,1)));transition:transform var(--duration-reset) var(--ease-spring-soft)}
.bdw-mascot__shadow i{display:block;width:100%;height:100%;border-radius:50%;background:radial-gradient(closest-side,rgba(69,32,15,.28),rgba(69,32,15,0));animation:bdw-m-shadow var(--duration-ambient) var(--ease-ambient) infinite}
.bdw-mascot__track{position:absolute;left:14%;top:6%;width:72%;transform:translate(calc(var(--tx)*8px*var(--mi,1)),calc(var(--ty)*5px*var(--mi,1))) rotate(calc(var(--tx)*2.5deg*var(--mi,1)*var(--mrot,1)));transition:transform var(--duration-reset) var(--ease-spring-soft)}
.bdw-mascot__float{animation:bdw-m-float var(--duration-ambient) var(--ease-ambient) infinite}
.bdw-mascot__breathe{transform-origin:50% 100%;animation:bdw-m-breathe 4s var(--ease-ambient) infinite}
.bdw-mascot__tilt{transform-origin:50% 92%;animation:bdw-m-tilt 9s var(--ease-premium) infinite 3s}
.bdw-mascot__hop{transform-origin:50% 100%}.bdw-mascot__hop.is-hop{animation:bdw-m-hop 640ms var(--ease-premium)}
.bdw-mascot img{display:block;width:100%;height:auto;pointer-events:none}
.bdw-mascot__spark{position:absolute;left:66%;top:4%;font-size:clamp(18px,7%,34px);color:var(--bdw-sunshine);filter:var(--glow-text);opacity:0;pointer-events:none}
.bdw-mascot__spark.is-hop{animation:bdw-m-spark 760ms var(--ease-premium)}
.bdw-mascot__front{position:absolute;inset:0;transform:translate(calc(var(--tx)*14px*var(--mi,1)),calc(var(--ty)*9px*var(--mi,1)));transition:transform var(--duration-reset) var(--ease-spring-soft);pointer-events:none}
.bdw-mascot__front>*{pointer-events:auto}
@keyframes bdw-m-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes bdw-m-shadow{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.86);opacity:.7}}
@keyframes bdw-m-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.012)}}
@keyframes bdw-m-tilt{0%,70%,100%{transform:rotate(0)}75%,83%{transform:rotate(-4deg)}89%{transform:rotate(1deg)}94%{transform:rotate(0)}}
@keyframes bdw-m-hop{0%{transform:translateY(0) scale(1)}12%{transform:translateY(2px) scale(1.01,.985)}40%{transform:translateY(-18px) rotate(-2deg)}70%{transform:translateY(0)}84%{transform:translateY(-4px)}100%{transform:translateY(0)}}
@keyframes bdw-m-spark{0%{opacity:0;transform:scale(.4) rotate(-30deg)}35%{opacity:1;transform:scale(1.1) rotate(0)}100%{opacity:0;transform:translateY(-14px) scale(.9) rotate(20deg)}}
.bdw-mascot[data-tilt=false] .bdw-mascot__tilt{animation:none}.bdw-mascot[data-tilt=false]{--mrot:0}
.bdw-mascot[data-ambient=false] .bdw-mascot__float,.bdw-mascot[data-ambient=false] .bdw-mascot__breathe,.bdw-mascot[data-ambient=false] .bdw-mascot__tilt,.bdw-mascot[data-ambient=false] .bdw-mascot__shadow i{animation:none}
@media (prefers-reduced-motion:reduce){.bdw-mascot *{animation:none!important;transition:none!important}.bdw-mascot{--tx:0!important;--ty:0!important}}
:root[data-reduce-motion] .bdw-mascot *{animation:none!important;transition:none!important}:root[data-reduce-motion] .bdw-mascot{--tx:0!important;--ty:0!important}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-mascot-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-mascot-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
const finePointer = () => !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;
function Mascot({
  base = "../../assets/logos/",
  src,
  alt = "Bruno Dog Walker mascot",
  size,
  track = true,
  ambient = true,
  hop = true,
  headTilt = true,
  intensity = 1,
  children,
  style,
  className = ""
}) {
  useCss();
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !track) return;
    let raf = 0,
      last = null;
    const apply = () => {
      raf = 0;
      if (!last) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2,
        cy = r.top + r.height / 2;
      const reach = Math.max(480, r.width * 1.4);
      const tx = Math.max(-1, Math.min(1, (last.x - cx) / reach)),
        ty = Math.max(-1, Math.min(1, (last.y - cy) / reach));
      el.style.setProperty("--tx", tx.toFixed(3));
      el.style.setProperty("--ty", ty.toFixed(3));
    };
    const move = e => {
      if (e.pointerType !== "mouse" || reduced() || !finePointer()) return;
      last = {
        x: e.clientX,
        y: e.clientY
      };
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const out = e => {
      if (!e.relatedTarget) {
        el.style.setProperty("--tx", "0");
        el.style.setProperty("--ty", "0");
      }
    };
    window.addEventListener("pointermove", move, {
      passive: true
    });
    document.addEventListener("pointerout", out);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", out);
      cancelAnimationFrame(raf);
    };
  }, [track]);
  const onClick = hop ? () => {
    if (!reduced()) setN(x => x + 1);
  } : undefined;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "bdw-mascot" + (className ? " " + className : ""),
    "data-ambient": String(ambient),
    "data-tilt": String(headTilt),
    style: {
      width: size,
      "--mi": intensity,
      ...style
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__ring"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__disc"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__shadow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__float"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__breathe"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__tilt"
  }, /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "bdw-mascot__hop" + (n ? " is-hop" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: src || base + "bdw-mascot.png",
    alt: alt
  })))))), /*#__PURE__*/React.createElement("span", {
    key: "s" + n,
    className: "bdw-mascot__spark" + (n ? " is-hop" : ""),
    "aria-hidden": "true"
  }, "\u2726"), children && /*#__PURE__*/React.createElement("div", {
    className: "bdw-mascot__front"
  }, children));
}
Object.assign(__ds_scope, { Mascot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Mascot.jsx", error: String((e && e.message) || e) }); }

// components/motion/Parallax.jsx
try { (() => {
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
function Parallax({
  speed = 0.08,
  max = 72,
  as = "div",
  children,
  style,
  className = "",
  innerStyle
}) {
  const outer = React.useRef(null),
    inner = React.useRef(null);
  React.useEffect(() => {
    const o = outer.current,
      i = inner.current;
    if (!o || !i) return;
    let raf = 0;
    const upd = () => {
      raf = 0;
      if (reduced()) {
        i.style.transform = "";
        return;
      }
      const r = o.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return;
      const off = Math.max(-max, Math.min(max, (r.top + r.height / 2 - vh / 2) * -speed));
      i.style.transform = "translate3d(0," + off.toFixed(1) + "px,0)";
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(upd);
    };
    upd();
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    const mo = new MutationObserver(on);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-reduce-motion"]
    });
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      mo.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [speed, max]);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: outer,
    className: className || undefined,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    ref: inner,
    style: {
      willChange: "transform",
      ...innerStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Parallax });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Parallax.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
function Reveal({
  children,
  delay = 0,
  as = "div",
  once = true,
  variant = "rise",
  style,
  className = ""
}) {
  const ref = React.useRef(null);
  const [phase, setPhase] = React.useState("idle"); // idle = visible (no JS opt-in) · armed = hidden · in = visible
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced() || !("IntersectionObserver" in window)) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setPhase("armed");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("in")));
      return;
    }
    setPhase("armed");
    const io = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          setPhase("in");
          if (once) io.disconnect();
        } else if (!once) setPhase("armed");
      });
    }, {
      threshold: 0.01,
      rootMargin: "0px 0px -24px 0px"
    });
    io.observe(el);
    const t = setTimeout(() => setPhase(p => p === "armed" ? "in" : p), 1500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [once]);
  const Tag = as;
  const cls = (phase === "idle" ? "" : "bdw-reveal" + (phase === "in" ? " is-in" : "")) + (className ? " " + className : "");
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: cls || undefined,
    "data-variant": variant,
    style: {
      transitionDelay: delay + "ms",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/spatial/AmbientGlow.jsx
try { (() => {
function AmbientGlow({
  size = 320,
  tone = "warm",
  intensity = 1,
  pulse = false,
  style,
  className = ""
}) {
  const color = tone === "neon" ? "rgba(239,255,0,.26)" : tone === "blue" ? "rgba(0,139,210,.18)" : "var(--glow-ambient-color)";
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "bdw-ambient-glow" + (className ? " " + className : ""),
    "data-pulse": String(pulse),
    style: {
      width: size,
      height: size,
      "--ag-color": color,
      "--ag-intensity": Math.max(0, Math.min(1.5, intensity)),
      ...style
    }
  });
}
Object.assign(__ds_scope, { AmbientGlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/AmbientGlow.jsx", error: String((e && e.message) || e) }); }

// components/spatial/AnimatedMascot.jsx
try { (() => {
function AnimatedMascot({
  base = "../../assets/logos/",
  size,
  pointer = true,
  ambient = true,
  glow = true,
  hop = true,
  children,
  style,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className || undefined,
    style: {
      position: "relative",
      width: size || "100%",
      ...style
    }
  }, glow && /*#__PURE__*/React.createElement(__ds_scope.AmbientGlow, {
    size: "118%",
    pulse: ambient,
    style: {
      left: "-9%",
      top: "-9%"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Mascot, {
    base: base,
    track: pointer,
    ambient: ambient,
    hop: hop,
    headTilt: false,
    intensity: .6,
    style: {
      position: "relative",
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { AnimatedMascot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/AnimatedMascot.jsx", error: String((e && e.message) || e) }); }

// components/spatial/FloatingElement.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
const fine = () => !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;
// One shared pointer listener for every FloatingElement: writes --px/--py (−1…1, viewport-relative) on <html>.
let users = 0,
  raf = 0,
  last = null;
const apply = () => {
  raf = 0;
  if (!last) return;
  const r = document.documentElement.style;
  r.setProperty("--px", ((last.x / window.innerWidth - .5) * 2).toFixed(3));
  r.setProperty("--py", ((last.y / window.innerHeight - .5) * 2).toFixed(3));
};
const onMove = e => {
  if (e.pointerType !== "mouse" || reduced() || !fine()) return;
  last = {
    x: e.clientX,
    y: e.clientY
  };
  if (!raf) raf = requestAnimationFrame(apply);
};
function usePointerField(on) {
  React.useEffect(() => {
    if (!on) return;
    if (users++ === 0) window.addEventListener("pointermove", onMove, {
      passive: true
    });
    return () => {
      if (--users === 0) {
        window.removeEventListener("pointermove", onMove);
        const r = document.documentElement.style;
        r.removeProperty("--px");
        r.removeProperty("--py");
      }
    };
  }, [on]);
}
let seq = 0;
function FloatingElement({
  children,
  amplitude = 6,
  duration,
  delay,
  rotate = 0,
  depth = 0,
  as = "span",
  style,
  className = "",
  ...rest
}) {
  const ref = React.useRef(null);
  const id = React.useMemo(() => seq++, []);
  const dur = duration ?? 5 + id * 1.7 % 3; // 5–8s, varied per instance so loops never sync
  const del = delay ?? -(id * 2.3 % dur);
  usePointerField(depth > 0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => {
      el.dataset.paused = String(!e.isIntersecting);
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  const d = depth ? Math.max(12, Math.min(40, depth)) : 0;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: "bdw-fe" + (className ? " " + className : ""),
    "aria-hidden": rest["aria-hidden"] ?? true,
    style: {
      "--fe-depth": d + "px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "bdw-fe__inner",
    style: {
      "--fe-amp": Math.max(2, Math.min(8, amplitude)) + "px",
      "--fe-dur": `calc(${dur.toFixed(2)}s * var(--motion-scale))`,
      "--fe-delay": del.toFixed(2) + "s",
      "--fe-rot": rotate + "deg"
    }
  }, children));
}
Object.assign(__ds_scope, { FloatingElement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/FloatingElement.jsx", error: String((e && e.message) || e) }); }

// components/spatial/GlassSurface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.bdw-gs{position:relative;isolation:isolate;color:var(--bdw-cocoa);background:rgba(255,249,233,var(--gs-alpha,.8));border:1px solid var(--glass-border);-webkit-backdrop-filter:blur(var(--gs-blur,14px)) saturate(1.15);backdrop-filter:blur(var(--gs-blur,14px)) saturate(1.15);transition:background var(--motion-standard) var(--ease-default),box-shadow var(--motion-standard) var(--ease-default),border-color var(--motion-standard) var(--ease-default)}
.bdw-gs--cocoa{background:rgba(38,20,8,calc(var(--gs-alpha,.8) - .06));border-color:rgba(255,255,255,.14);color:var(--bdw-warm-cream)}
.bdw-gs[data-elev="0"]{box-shadow:none}.bdw-gs[data-elev="1"]{box-shadow:var(--elevation-1)}.bdw-gs[data-elev="2"]{box-shadow:var(--elevation-2)}.bdw-gs[data-elev="3"]{box-shadow:var(--elevation-3)}
.bdw-gs__sheen{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:-1;background:var(--highlight-sheen);opacity:.55;box-shadow:inset 0 1px 0 rgba(255,255,255,.7)}
.bdw-gs--cocoa .bdw-gs__sheen{opacity:.12;box-shadow:inset 0 1px 0 rgba(255,255,255,.16)}
.bdw-gs.is-scrolled{--gs-alpha:.9;box-shadow:var(--elevation-3);border-color:rgba(255,255,255,.7)}
@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){.bdw-gs{background:rgba(255,249,234,.97)}.bdw-gs--cocoa{background:rgba(38,20,8,.94)}}
.bdw-gs.is-fallback{-webkit-backdrop-filter:none;backdrop-filter:none;background:rgba(255,249,234,.97)}.bdw-gs--cocoa.is-fallback{background:rgba(38,20,8,.94)}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-gs-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-gs-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
function GlassSurface({
  children,
  as = "div",
  tone = "cream",
  blur = 14,
  opacity = .8,
  elevation = 3,
  highlight = true,
  radius = 16,
  padding = "12px 16px",
  elevateOnScroll = false,
  scrollTarget,
  fallback = false,
  className = "",
  style,
  ...rest
}) {
  useCss();
  const ref = React.useRef(null);
  const [sc, setSc] = React.useState(false);
  React.useEffect(() => {
    if (!elevateOnScroll) return;
    const t = scrollTarget && scrollTarget.current ? scrollTarget.current : window;
    const read = () => setSc((t === window ? window.scrollY : t.scrollTop) > 8);
    read();
    t.addEventListener("scroll", read, {
      passive: true
    });
    return () => t.removeEventListener("scroll", read);
  }, [elevateOnScroll, scrollTarget]);
  const Tag = as;
  const cls = ["bdw-gs", tone === "cocoa" ? "bdw-gs--cocoa" : "", sc ? "is-scrolled" : "", fallback ? "is-fallback" : "", className].filter(Boolean).join(" ");
  const b = Math.max(12, Math.min(16, blur)),
    a = Math.max(.72, Math.min(.95, opacity));
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    "data-elev": String(elevateOnScroll && !sc ? Math.min(elevation, 1) : elevation),
    style: {
      "--gs-blur": b + "px",
      "--gs-alpha": sc ? undefined : a,
      borderRadius: radius,
      padding,
      ...style
    }
  }, rest), highlight && /*#__PURE__*/React.createElement("span", {
    className: "bdw-gs__sheen",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { GlassSurface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/GlassSurface.jsx", error: String((e && e.message) || e) }); }

// components/spatial/ScrollReveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
// One IntersectionObserver shared by every ScrollReveal / StaggerContainer on the page.
let io = null;
const cbs = new Map();
function shared() {
  if (!io) io = new IntersectionObserver(es => es.forEach(e => {
    const f = cbs.get(e.target);
    if (f) f(e.isIntersecting);
  }), {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
  });
  return io;
}
function useRevealPhase(ref, once = true) {
  const [phase, setPhase] = React.useState("idle"); // idle: visible, no JS yet · armed: hidden · in: revealed
  React.useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || !("IntersectionObserver" in window)) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * .92 && r.bottom > 0) {
      setPhase("armed");
      const a = requestAnimationFrame(() => requestAnimationFrame(() => setPhase("in")));
      if (once) return () => cancelAnimationFrame(a);
    } else setPhase("armed");
    const o = shared();
    cbs.set(el, v => {
      if (v) {
        setPhase("in");
        if (once) {
          o.unobserve(el);
          cbs.delete(el);
        }
      } else if (!once) setPhase("armed");
    });
    o.observe(el);
    const t = setTimeout(() => setPhase(p => p === "armed" && once ? "in" : p), 2500);
    return () => {
      o.unobserve(el);
      cbs.delete(el);
      clearTimeout(t);
    };
  }, [once]);
  return phase;
}
function ScrollReveal({
  children,
  as = "div",
  variant = "rise",
  distance = 16,
  delay = 0,
  once = true,
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const phase = useRevealPhase(ref, once);
  const Tag = as;
  const cls = [phase === "idle" ? "" : "bdw-sr", phase === "in" ? "is-in" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls || undefined,
    "data-variant": variant,
    style: {
      "--sr-distance": Math.max(12, Math.min(20, distance)) + "px",
      "--sr-delay": delay + "ms",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { useRevealPhase, ScrollReveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/ScrollReveal.jsx", error: String((e && e.message) || e) }); }

// components/spatial/SpatialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.bdw-spc{--nx:0;--ny:0;--mx:50%;--my:0%;position:relative;display:flex;flex-direction:column;background:var(--surface-card);color:var(--text-body);border:1px solid var(--border-translucent);border-radius:var(--sp-radius,16px);box-shadow:var(--shadow-ambient);transform:perspective(var(--spatial-perspective)) rotateX(0deg) rotateY(0deg) translateY(0);transform-origin:var(--spatial-origin);transition:transform var(--motion-reset) var(--ease-spring-physical),box-shadow var(--motion-standard) var(--ease-default),border-color var(--motion-standard) var(--ease-default)}
.bdw-spc__clip{position:relative;flex:1;display:flex;flex-direction:column;border-radius:inherit;overflow:hidden}
.bdw-spc.is-active{transform:perspective(var(--spatial-perspective)) rotateX(calc(var(--ny) * var(--spatial-tilt) * -1)) rotateY(calc(var(--nx) * var(--spatial-tilt))) translateY(calc(var(--spatial-lift) * -1));box-shadow:calc(var(--nx) * -10px) calc(10px + var(--ny) * -6px) 22px rgba(69,32,15,.08),calc(var(--nx) * -24px) calc(28px + var(--ny) * -14px) 56px rgba(69,32,15,.13);border-color:var(--border-translucent-strong)}
.bdw-spc.is-tracking{transition:transform 90ms linear,box-shadow 90ms linear,border-color var(--motion-standard) var(--ease-default)}
.bdw-spc__light{position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:3;background:radial-gradient(circle at var(--mx) var(--my),var(--highlight-directional),transparent 58%);opacity:0;transition:opacity var(--motion-standard) var(--ease-default)}
.bdw-spc__rim{position:absolute;inset:-1px;border-radius:inherit;pointer-events:none;z-index:4;padding:1px;background:radial-gradient(180px circle at var(--mx) var(--my),var(--border-illumination),transparent 70%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);opacity:0;transition:opacity var(--motion-standard) var(--ease-default)}
.bdw-spc.is-active .bdw-spc__light,.bdw-spc.is-active .bdw-spc__rim{opacity:calc(var(--glow-intensity) * 1)}
.bdw-spc.is-pressed{transform:perspective(var(--spatial-perspective)) scale(.985);box-shadow:var(--shadow-pressed);transition-duration:var(--motion-micro)}
.bdw-spc:focus-within{border-color:var(--border-translucent-strong)}
.bdw-spl{position:relative;z-index:2;transform:translate3d(calc(var(--nx) * var(--spl-depth)),calc(var(--ny) * var(--spl-depth)),0);transition:transform var(--motion-reset) var(--ease-spring-physical)}
.bdw-spc.is-tracking .bdw-spl{transition:transform 90ms linear}
@media (prefers-reduced-motion:reduce){.bdw-spc,.bdw-spc.is-active,.bdw-spc.is-pressed{transform:none!important;transition:box-shadow var(--motion-standard) var(--ease-default)}.bdw-spl{transform:none!important}}
:root[data-reduce-motion] .bdw-spc,:root[data-reduce-motion] .bdw-spc.is-active,:root[data-reduce-motion] .bdw-spc.is-pressed{transform:none!important;transition:box-shadow var(--motion-standard) var(--ease-default)}:root[data-reduce-motion] .bdw-spl{transform:none!important}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-spc-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-spc-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
const reduced = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
const fine = () => !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;
function SpatialCard({
  children,
  as = "div",
  radius = 16,
  light = true,
  rim = true,
  state,
  className = "",
  style,
  ...rest
}) {
  useCss();
  const ref = React.useRef(null),
    raf = React.useRef(0);
  const set = o => {
    const el = ref.current;
    if (el) for (const k in o) el.style.setProperty(k, o[k]);
  };
  const move = e => {
    if (e.pointerType !== "mouse" || !fine()) return;
    const el = ref.current;
    el.classList.add("is-active");
    if (reduced()) return;
    const x = e.clientX,
      y = e.clientY;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const r = el.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (x - r.left) / r.width)),
        py = Math.min(1, Math.max(0, (y - r.top) / r.height));
      el.classList.add("is-tracking");
      set({
        "--nx": ((px - .5) * 2).toFixed(3),
        "--ny": ((py - .5) * 2).toFixed(3),
        "--mx": (px * 100).toFixed(1) + "%",
        "--my": (py * 100).toFixed(1) + "%"
      });
    });
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    raf.current = 0;
    el.classList.remove("is-tracking", "is-active", "is-pressed");
    set({
      "--nx": "0",
      "--ny": "0"
    });
  };
  const down = e => {
    if (e.pointerType !== "mouse") ref.current.classList.add("is-pressed");
  };
  const up = () => ref.current && ref.current.classList.remove("is-pressed");
  const Tag = as;
  const cls = ["bdw-spc", state === "hover" ? "is-active" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: cls,
    style: {
      "--sp-radius": typeof radius === "number" ? radius + "px" : radius,
      ...style
    },
    onPointerMove: move,
    onPointerLeave: leave,
    onPointerDown: down,
    onPointerUp: up,
    onPointerCancel: up
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bdw-spc__clip"
  }, children), light && /*#__PURE__*/React.createElement("span", {
    className: "bdw-spc__light",
    "aria-hidden": "true"
  }), rim && /*#__PURE__*/React.createElement("span", {
    className: "bdw-spc__rim",
    "aria-hidden": "true"
  }));
}
function SpatialLayer({
  depth = 24,
  children,
  style,
  className = ""
}) {
  const d = Math.max(12, Math.min(40, depth));
  return /*#__PURE__*/React.createElement("div", {
    className: "bdw-spl" + (className ? " " + className : ""),
    style: {
      "--spl-depth": d + "px",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SpatialCard, SpatialLayer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/SpatialCard.jsx", error: String((e && e.message) || e) }); }

// components/spatial/StaggerContainer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StaggerContainer({
  children,
  as = "div",
  stagger = 80,
  variant = "rise",
  distance = 16,
  once = true,
  itemStyle,
  itemAs = "div",
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const phase = __ds_scope.useRevealPhase(ref, once);
  const Tag = as,
    Item = itemAs;
  const armed = phase !== "idle";
  const s = Math.max(70, Math.min(100, stagger));
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    className: "bdw-stagger" + (className ? " " + className : ""),
    style: {
      "--stagger": s + "ms",
      "--sr-distance": Math.max(12, Math.min(20, distance)) + "px",
      ...style
    }
  }, rest), React.Children.toArray(children).map((c, i) => /*#__PURE__*/React.createElement(Item, {
    key: c.key ?? i,
    className: "bdw-stagger__item" + (armed ? " bdw-sr" : "") + (phase === "in" ? " is-in" : ""),
    "data-variant": variant,
    style: {
      "--sr-delay": `calc(${i} * var(--stagger))`,
      ...itemStyle
    }
  }, c)));
}
Object.assign(__ds_scope, { StaggerContainer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/StaggerContainer.jsx", error: String((e && e.message) || e) }); }

// components/spatial/TactileButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.bdw-tb{--tb-bg:var(--action-primary-bg);--tb-fg:var(--action-primary-fg);--tb-lip:#D49B07;--tb-hover:var(--action-primary-bg-hover);--tb-border:transparent;--tb-glow:var(--glow-warm-dynamic);position:relative;isolation:isolate;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:0 24px;border-radius:999px;border:2px solid var(--tb-border);background:var(--tb-bg);color:var(--tb-fg);font:800 16px/1.2 var(--font-sans);text-decoration:none;white-space:nowrap;cursor:pointer;box-sizing:border-box;margin-bottom:var(--spatial-press);box-shadow:0 var(--spatial-press) 0 var(--tb-lip),0 6px 14px rgba(69,32,15,.10);transform:translateY(0);transition:transform var(--motion-fast) var(--ease-spring-physical),box-shadow var(--motion-standard) var(--ease-default),background var(--motion-micro) var(--ease-default),color var(--motion-micro) var(--ease-default)}
.bdw-tb::before{content:"";position:absolute;inset:2px 10% 50%;border-radius:999px 999px 40% 40%;background:var(--highlight-sheen);opacity:.35;z-index:-1;pointer-events:none;transition:opacity var(--motion-standard) var(--ease-default)}
.bdw-tb:hover,.bdw-tb.is-hover{background:var(--tb-hover);color:var(--tb-fg);transform:translateY(-2px);box-shadow:0 calc(var(--spatial-press) + 2px) 0 var(--tb-lip),0 12px 26px rgba(69,32,15,.14),var(--tb-glow)}
.bdw-tb:hover::before,.bdw-tb.is-hover::before{opacity:.8}
.bdw-tb:active,.bdw-tb.is-active{transform:translateY(var(--spatial-press)) scale(.985);box-shadow:0 0 0 var(--tb-lip),var(--shadow-pressed);transition-duration:90ms,var(--motion-micro),var(--motion-micro),var(--motion-micro)}
.bdw-tb:active::before,.bdw-tb.is-active::before{opacity:.15}
.bdw-tb:focus-visible,.bdw-tb.is-focus{outline:3px solid #004B75;outline-offset:4px}
.bdw-tb[data-focus-glow=true]:focus-visible,.bdw-tb[data-focus-glow=true].is-focus{box-shadow:0 var(--spatial-press) 0 var(--tb-lip),var(--tb-glow)}
.bdw-tb--secondary{--tb-bg:var(--bdw-white);--tb-fg:var(--bdw-deep-walk);--tb-lip:var(--bdw-deep-walk);--tb-hover:var(--surface-tint);--tb-border:var(--bdw-deep-walk);--tb-glow:0 0 0 transparent}
.bdw-tb--blue{--tb-bg:var(--bdw-deep-walk);--tb-fg:var(--bdw-warm-cream);--tb-lip:#003E61;--tb-hover:#00557F}
.bdw-tb--cream{--tb-bg:var(--bdw-warm-cream);--tb-fg:var(--bdw-deep-walk);--tb-lip:#CDBB9C;--tb-hover:var(--bdw-white)}
.bdw-tb--neon{--tb-glow:var(--glow-neon-dynamic)}
.bdw-tb--sm{min-height:40px;padding:0 18px;font-size:14px}
.bdw-tb--block{display:flex;width:100%}
.bdw-tb:disabled,.bdw-tb[aria-disabled=true]{--tb-bg:var(--action-disabled-bg);--tb-hover:var(--action-disabled-bg);--tb-fg:var(--action-disabled-fg);--tb-lip:#D9CBB5;--tb-border:transparent;cursor:not-allowed;transform:none;box-shadow:0 var(--spatial-press) 0 var(--tb-lip)}
.bdw-tb:disabled::before{opacity:0}
.bdw-tb[aria-busy=true]{cursor:progress;transform:translateY(1px);box-shadow:0 calc(var(--spatial-press) - 1px) 0 var(--tb-lip)}
.bdw-tb__arrow{display:inline-block;transition:transform var(--motion-standard) var(--ease-spring-physical)}
.bdw-tb:hover .bdw-tb__arrow{transform:translate(3px,-3px)}
.bdw-tb__spin{width:16px;height:16px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:bdw-tb-spin 700ms linear infinite;flex:none}
@keyframes bdw-tb-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.bdw-tb,.bdw-tb:hover,.bdw-tb:active,.bdw-tb__arrow{transform:none!important}.bdw-tb__spin{animation:none;border-right-color:currentColor;opacity:.5}}
:root[data-reduce-motion] .bdw-tb,:root[data-reduce-motion] .bdw-tb__arrow{transform:none!important}:root[data-reduce-motion] .bdw-tb__spin{animation:none;border-right-color:currentColor;opacity:.5}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-tb-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-tb-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
function TactileButton({
  variant = "primary",
  size = "md",
  href,
  arrow = false,
  block = false,
  glow = "warm",
  focusGlow = true,
  loading = false,
  loadingLabel,
  disabled,
  state,
  children,
  className = "",
  ...rest
}) {
  useCss();
  const cls = ["bdw-tb", "bdw-tb--" + variant, glow === "neon" ? "bdw-tb--neon" : "", size === "sm" ? "bdw-tb--sm" : "", block ? "bdw-tb--block" : "", state ? "is-" + state : "", className].filter(Boolean).join(" ");
  const body = loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "bdw-tb__spin",
    "aria-hidden": "true"
  }), loadingLabel || children) : /*#__PURE__*/React.createElement(React.Fragment, null, children, arrow && /*#__PURE__*/React.createElement("span", {
    className: "bdw-tb__arrow",
    "aria-hidden": "true"
  }, "\u2197"));
  const extra = {
    "data-focus-glow": String(focusGlow),
    style: glow === "none" ? {
      "--tb-glow": "0 0 0 transparent",
      ...rest.style
    } : rest.style
  };
  if (href && !disabled && !loading) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href
  }, rest, extra), body);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-busy": loading || undefined
  }, rest, extra, loading ? {
    onClick: e => e.preventDefault()
  } : {}), body);
}
Object.assign(__ds_scope, { TactileButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/spatial/TactileButton.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/GlassPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GlassPanel({
  children,
  tone = "cream",
  radius = 16,
  padding = "12px 16px",
  flat = false,
  fallback = false,
  as = "div",
  style,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["bdw-glass", tone === "cocoa" ? "bdw-glass--cocoa" : "", flat ? "bdw-glass--flat" : "", fallback ? "is-fallback" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: {
      borderRadius: radius,
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlassPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/GlassPanel.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ImageTile.jsx
try { (() => {
const CSS = `.bdw-tile{position:relative;display:block;margin:0;overflow:hidden;border-radius:var(--radius-card);box-shadow:var(--elevation-1);background:var(--surface-tint);transition:box-shadow var(--duration-normal) var(--ease-premium),transform var(--duration-normal) var(--ease-premium);outline:none}
.bdw-tile img{width:100%;height:100%;object-fit:cover;display:block;transition:transform var(--duration-slow) var(--ease-premium)}
.bdw-tile:hover,.bdw-tile:focus-visible,.bdw-tile.is-hover{box-shadow:var(--elevation-2);transform:translateY(-2px)}
.bdw-tile:hover img,.bdw-tile:focus-visible img,.bdw-tile.is-hover img{transform:scale(1.04)}
.bdw-tile:focus-visible{outline:var(--focus-ring);outline-offset:var(--focus-offset)}
.bdw-tile__label{position:absolute;left:12px;top:12px}
.bdw-tile__cap{position:absolute;left:12px;right:12px;bottom:12px;opacity:0;transform:translateY(8px);transition:opacity var(--duration-normal) var(--ease-premium),transform var(--duration-normal) var(--ease-premium);font:800 15px/1.3 var(--font-sans)}
.bdw-tile:hover .bdw-tile__cap,.bdw-tile:focus-visible .bdw-tile__cap,.bdw-tile.is-hover .bdw-tile__cap{opacity:1;transform:none}
@media (hover:none){.bdw-tile__cap{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.bdw-tile,.bdw-tile img{transform:none!important}}`;
function useCss() {
  React.useEffect(() => {
    let s = document.getElementById("bdw-tile-css");
    if (!s) {
      s = document.createElement("style");
      s.id = "bdw-tile-css";
      document.head.appendChild(s);
    }
    s.textContent = CSS;
  }, []);
}
function ImageTile({
  src,
  alt = "",
  label,
  caption,
  ratio = "4/5",
  position = "center",
  state,
  style
}) {
  useCss();
  return /*#__PURE__*/React.createElement("figure", {
    className: "bdw-tile" + (state === "hover" ? " is-hover" : ""),
    tabIndex: caption ? 0 : undefined,
    style: {
      aspectRatio: ratio,
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      objectPosition: position
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "bdw-tile__label bdw-glass bdw-glass--flat",
    style: {
      borderRadius: 999,
      padding: "6px 12px",
      font: "700 14px/1 var(--font-label)",
      textTransform: "uppercase",
      letterSpacing: ".02em"
    }
  }, label), caption && /*#__PURE__*/React.createElement("figcaption", {
    className: "bdw-tile__cap bdw-glass bdw-glass--flat",
    style: {
      borderRadius: 12,
      padding: "10px 14px"
    }
  }, caption));
}
Object.assign(__ds_scope, { ImageTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ImageTile.jsx", error: String((e && e.message) || e) }); }

// components/video/CaptionBlock.jsx
try { (() => {
function CaptionBlock({
  children,
  size = 28,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bdw-cocoa)",
      color: "var(--bdw-warm-cream)",
      borderRadius: 12,
      padding: "0.6em 1.1em",
      font: `800 ${typeof size === "number" ? size + "px" : size}/1.16 var(--font-sans)`,
      textAlign: "center",
      textWrap: "balance",
      ...style
    }
  }, children);
}
function CaptionWord({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bdw-sunshine)"
    }
  }, children);
}
Object.assign(__ds_scope, { CaptionBlock, CaptionWord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/CaptionBlock.jsx", error: String((e && e.message) || e) }); }

// components/video/NameCaption.jsx
try { (() => {
function NameCaption({
  name = "Dog name",
  context,
  size = 22,
  style
}) {
  const fs = typeof size === "number" ? size + "px" : size;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      gap: 2,
      background: "var(--bdw-warm-cream)",
      borderLeft: "6px solid var(--bdw-sunshine)",
      borderRadius: 8,
      padding: "0.5em 1.1em 0.5em 0.9em",
      color: "var(--bdw-cocoa)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `900 ${fs}/1.15 var(--font-sans)`
    }
  }, name), context && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontWeight: 700,
      fontSize: `calc(${fs} * 0.6)`,
      textTransform: "uppercase",
      letterSpacing: ".02em",
      color: "var(--bdw-deep-walk)"
    }
  }, context));
}
Object.assign(__ds_scope, { NameCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/video/NameCaption.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/FeedLayouts.jsx
try { (() => {
const T = fs => ({
  margin: 0,
  font: '900 ' + fs + '/1.0 var(--font-sans)',
  letterSpacing: '-0.035em'
});
function FeedEditorial({
  theme,
  photo = 'dark',
  safe
}) {
  const blue = theme === 'blue';
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1350",
    bg: blue ? 'var(--bdw-walk-blue)' : 'var(--bdw-warm-cream)',
    safe: safe
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      left: 0,
      right: 0,
      top: '25%',
      height: '53%',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 400 60",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      left: 0,
      top: '22%',
      width: '100%',
      height: '8%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0H400V10C260 60 150 5 0 40Z",
    fill: blue ? '#008BD2' : '#FFF9EA',
    transform: "scale(1,-1) translate(0,-60)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 20C150 55 260 0 400 50",
    fill: "none",
    stroke: "#FFD233",
    strokeWidth: "5",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '7%',
      top: '6%',
      right: '6%'
    }
  }, /*#__PURE__*/React.createElement(Lbl, null, "Walk Diaries / NYC"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...T('9cqw'),
      marginTop: '3cqw',
      color: blue ? 'var(--bdw-warm-cream)' : 'var(--bdw-cocoa)'
    }
  }, "You said walk.", /*#__PURE__*/React.createElement("br", null), "I heard ", /*#__PURE__*/React.createElement(Hi, null, "adventure."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '78%',
      height: '1.2cqw',
      background: 'var(--bdw-sunshine)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: '79.2%',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 7%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGOS + 'bdw-primary.png',
    alt: "Bruno Dog Walker",
    style: {
      width: '12%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      font: '800 3.2cqw/1.3 var(--font-sans)',
      color: 'var(--bdw-deep-walk)'
    }
  }, "UPPER EAST SIDE", /*#__PURE__*/React.createElement("br", null), "@brunodogwalkernyc")));
}
function FeedDiagonal({
  theme,
  photo = 'brown',
  safe
}) {
  const fill = theme === 'blue' ? '#008BD2' : '#FFF9EA',
    ink = theme === 'blue' ? 'var(--bdw-warm-cream)' : 'var(--bdw-cocoa)';
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1350",
    bg: "#333",
    safe: safe
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(Lbl, {
    style: {
      position: 'absolute',
      right: '5%',
      top: '5%'
    }
  }, "Small Moments / NYC"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '38%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 18 L100 0 V100 H0Z",
    fill: fill
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 16 L100 -2",
    stroke: "#FFD233",
    strokeWidth: "2.4",
    vectorEffect: "non-scaling-stroke",
    style: {
      strokeWidth: '1.2cqw'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '7%',
      bottom: '5%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...T('9cqw'),
      color: ink
    }
  }, "One more", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Hi, null, "sniff stop.")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: '2.4cqw',
      background: '#fff',
      color: 'var(--bdw-cocoa)',
      borderRadius: 999,
      padding: '.3em .8em',
      font: '800 2.8cqw/1 var(--font-sans)'
    }
  }, "@brunodogwalkernyc")), /*#__PURE__*/React.createElement("img", {
    src: LOGOS + 'bdw-primary.png',
    alt: "Bruno Dog Walker",
    style: {
      position: 'absolute',
      right: '6%',
      bottom: '6%',
      width: '16%'
    }
  }));
}
function FeedJournal({
  photo = 'crew',
  safe
}) {
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1350",
    bg: "var(--bdw-warm-cream)",
    safe: safe
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '6%',
      right: '6%',
      top: '4.5%',
      display: 'flex',
      justifyContent: 'space-between',
      font: '700 2.8cqw/1 var(--font-label)',
      color: 'var(--bdw-deep-walk)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "WALK DIARIES / NYC"), /*#__PURE__*/React.createElement("span", null, "01 / TOGETHER")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '6%',
      right: '6%',
      top: '13%',
      bottom: '25%',
      borderRadius: '2cqw',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      inset: 0,
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '6%',
      right: '6%',
      bottom: '4%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '22cqw',
      height: '.8cqw',
      background: 'var(--bdw-sunshine)',
      marginBottom: '2.4cqw'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...T('7.7cqw'),
      color: 'var(--bdw-cocoa)'
    }
  }, "Better", /*#__PURE__*/React.createElement("br", null), "together."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2cqw 0 0',
      font: '800 2.6cqw/1 var(--font-sans)',
      color: 'var(--bdw-deep-walk)'
    }
  }, "@brunodogwalkernyc")), /*#__PURE__*/React.createElement("img", {
    src: LOGOS + 'bdw-primary.png',
    alt: "Bruno Dog Walker",
    style: {
      width: '15%'
    }
  })));
}
Object.assign(window, {
  FeedEditorial,
  FeedDiagonal,
  FeedJournal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/FeedLayouts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Piece.jsx
try { (() => {
const L = '../../assets/logos/',
  P = '../../assets/photos/';
const PHOTOS = {
  dark: {
    src: P + 'park-dog.png',
    pos: '50% 35%'
  },
  brown: {
    src: P + 'brown-dog.png',
    pos: '35% 20%'
  },
  light: {
    src: P + 'fluffy-dog.png',
    pos: '60% 70%'
  },
  crew: {
    src: P + 'park-crew-portrait.png',
    pos: '50% 60%'
  },
  street: {
    src: P + 'walking-group.png',
    pos: '40% 60%'
  }
};
function Piece({
  ratio,
  bg = 'var(--bdw-walk-blue)',
  safe,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      containerType: 'inline-size',
      background: bg,
      borderRadius: 12,
      overflow: 'hidden',
      color: 'var(--bdw-warm-cream)'
    }
  }, children, safe && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '6%',
      border: '2px dashed rgba(255,255,255,.85)',
      outline: '2px dashed rgba(0,0,0,.35)',
      pointerEvents: 'none',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      left: 6,
      font: '700 11px var(--font-label)',
      color: '#fff',
      textShadow: '0 1px 2px #000'
    }
  }, "MARGEM EDITORIAL / 6%")));
}
function Photo({
  id,
  style
}) {
  const p = PHOTOS[id];
  return /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: "",
    style: {
      position: 'absolute',
      objectFit: 'cover',
      objectPosition: p.pos,
      ...style
    }
  });
}
function Lbl({
  children,
  variant = 'sunshine',
  fs = '3.4cqw',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: variant === 'cream' ? 'var(--bdw-warm-cream)' : 'var(--bdw-sunshine)',
      color: 'var(--bdw-cocoa)',
      borderRadius: 999,
      padding: '.35em .8em',
      font: '700 ' + fs + '/1 var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      ...style
    }
  }, children);
}
function Hi({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--bdw-sunshine)',
      color: 'var(--bdw-cocoa)',
      padding: '0 .06em',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone'
    }
  }, children);
}
function Avatar({
  w,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: w,
      aspectRatio: '1',
      borderRadius: '50%',
      background: 'var(--bdw-warm-cream)',
      display: 'grid',
      placeItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'bdw-mascot.png',
    alt: "Bruno Dog Walker",
    style: {
      width: '78%'
    }
  }));
}
Object.assign(window, {
  Piece,
  Photo,
  Lbl,
  Hi,
  Avatar,
  PHOTOS,
  LOGOS: L
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Piece.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/VideoLayouts.jsx
try { (() => {
const TT = fs => ({
  margin: 0,
  font: '900 ' + fs + '/1.0 var(--font-sans)',
  letterSpacing: '-0.035em'
});
function ReelsCover({
  photo = 'light',
  safe
}) {
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1920",
    bg: "#333",
    safe: safe
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '7%',
      right: '15%',
      top: '15%',
      background: 'var(--bdw-warm-cream)',
      borderLeft: '1.4cqw solid var(--bdw-sunshine)',
      borderRadius: '4cqw',
      padding: '7cqw 7cqw 6cqw'
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    fs: "4cqw"
  }, "Walk Diaries / NYC"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...TT('10.5cqw'),
      marginTop: '4cqw',
      color: 'var(--bdw-cocoa)'
    }
  }, "Small paws.", /*#__PURE__*/React.createElement("br", null), "Big city.")), /*#__PURE__*/React.createElement(Avatar, {
    w: "17%",
    style: {
      left: '7%',
      bottom: '23%'
    }
  }));
}
function YouTubeEditorial({
  theme,
  photo = 'light',
  title,
  safe
}) {
  const blue = theme === 'blue';
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1280/720",
    bg: blue ? 'var(--bdw-walk-blue)' : 'var(--bdw-warm-cream)',
    safe: safe
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '52%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      inset: 0,
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: '44%',
      width: '8%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0 H55 C30 30 30 70 45 100 H0Z",
    fill: blue ? '#008BD2' : '#FFF9EA'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '6%',
      top: '9%',
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    fs: "2.6cqw"
  }, "Dog Walking / NYC"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...TT('7cqw'),
      marginTop: '3cqw',
      color: blue ? 'var(--bdw-warm-cream)' : 'var(--bdw-cocoa)',
      textWrap: 'balance'
    }
  }, title || /*#__PURE__*/React.createElement(React.Fragment, null, "Little walks.", /*#__PURE__*/React.createElement("br", null), "Big joy."))), /*#__PURE__*/React.createElement(Avatar, {
    w: "13%",
    style: {
      left: '6%',
      bottom: '8%'
    }
  }));
}
function YouTubePhoto({
  photo = 'crew',
  safe
}) {
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1280/720",
    bg: "#333",
    safe: safe
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      left: 0,
      right: 0,
      top: 0,
      height: '77%',
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement(Lbl, {
    variant: "cream",
    fs: "2.6cqw",
    style: {
      position: 'absolute',
      left: '6%',
      top: '6%'
    }
  }, "Walk Diaries / NYC"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '23%',
      background: 'var(--bdw-walk-blue)',
      borderTop: '.8cqw solid var(--bdw-sunshine)',
      display: 'flex',
      alignItems: 'center',
      gap: '2.4cqw',
      padding: '0 16% 0 4%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '9cqw',
      aspectRatio: '1',
      borderRadius: '50%',
      background: 'var(--bdw-warm-cream)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGOS + 'bdw-mascot.png',
    alt: "",
    style: {
      width: '78%'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...TT('6cqw'),
      color: 'var(--bdw-warm-cream)'
    }
  }, "Meet the park crew.")));
}
function VideoCaption({
  photo = 'street',
  safe
}) {
  const {
    CaptionBlock,
    CaptionWord
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1920",
    bg: "#333",
    safe: safe
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    w: "12%",
    style: {
      left: '7%',
      top: '15%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '7%',
      right: '15%',
      bottom: '28%'
    }
  }, /*#__PURE__*/React.createElement(CaptionBlock, {
    size: "5.8cqw"
  }, "Every walk has", /*#__PURE__*/React.createElement("br", null), "its own ", /*#__PURE__*/React.createElement(CaptionWord, null, "rhythm."))));
}
function VideoName({
  photo = 'brown',
  safe
}) {
  const {
    NameCaption
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1920",
    bg: "#333",
    safe: safe
  }, /*#__PURE__*/React.createElement(Photo, {
    id: photo,
    style: {
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    w: "12%",
    style: {
      left: '7%',
      top: '15%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '7%',
      top: '28%',
      width: '42%'
    }
  }, /*#__PURE__*/React.createElement(NameCaption, {
    name: "Dog name",
    size: "4.8cqw",
    style: {
      width: '100%',
      boxSizing: 'border-box'
    }
  })));
}
function VideoEnd({
  safe
}) {
  return /*#__PURE__*/React.createElement(Piece, {
    ratio: "1080/1920",
    bg: "var(--bdw-walk-blue)",
    safe: safe
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6cqw',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Lbl, {
    fs: "4cqw"
  }, "Walk Diaries / NYC"), /*#__PURE__*/React.createElement("img", {
    src: LOGOS + 'bdw-primary.png',
    alt: "Bruno Dog Walker",
    style: {
      width: '48%'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...TT('9.5cqw'),
      color: 'var(--bdw-warm-cream)'
    }
  }, "See you on", /*#__PURE__*/React.createElement("br", null), "the next walk."), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fff',
      color: 'var(--bdw-deep-walk)',
      borderRadius: 999,
      padding: '.6em 1.2em',
      font: '800 3.6cqw/1 var(--font-sans)'
    }
  }, "@brunodogwalkernyc")));
}
Object.assign(window, {
  ReelsCover,
  YouTubeEditorial,
  YouTubePhoto,
  VideoCaption,
  VideoName,
  VideoEnd
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/VideoLayouts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/spatial/SpatialSections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SX = () => window.BrunoDogWalkerDesignSystem_0597c9;
const SXL = '../../assets/logos/',
  SXP = '../../assets/photos/';
function SxToggle({
  on,
  set,
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sx-toggle",
    "aria-pressed": on,
    onClick: () => set(!on)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-dot"
  }), children);
}
function SxSec({
  n,
  title,
  lede,
  children
}) {
  const {
    ScrollReveal
  } = SX();
  return /*#__PURE__*/React.createElement("section", {
    className: "sx-sec",
    "data-screen-label": n
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    className: "sx-num"
  }, n), /*#__PURE__*/React.createElement("h2", {
    className: "sx-h2"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "sx-lede"
  }, lede)), children);
}
function SxTokens() {
  const L = [['0', 'Base · 0px', 'var(--bdw-warm-cream)', 'var(--bdw-cocoa)'], ['1', 'Depth 1 · 12px', 'var(--surface-tint)', 'var(--bdw-deep-walk)'], ['2', 'Depth 2 · 24px', 'var(--bdw-white)', 'var(--bdw-cocoa)'], ['3', 'Depth 3 · 40px', 'var(--bdw-sunshine)', 'var(--bdw-cocoa)']];
  const E = [['--shadow-ambient', 'Resting'], ['--shadow-hover', 'Hover'], ['--shadow-pressed', 'Pressed'], ['--elevation-3', 'Floating / nav']];
  const T = [['--spatial-perspective', '1000px'], ['--spatial-origin', '50% 50%'], ['--spatial-tilt', '±4°'], ['--spatial-lift', '6px'], ['--spatial-press', '3px'], ['--spatial-depth-1/2/3', '12 / 24 / 40px']];
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-panel sx-grid",
    style: {
      '--min': '320px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-stack",
    "aria-label": "Exploded view of the four depth planes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-stack__rig"
  }, L.map(([z, l, bg, fg]) => /*#__PURE__*/React.createElement("div", {
    key: z,
    className: "sx-stack__l",
    "data-z": z,
    style: {
      background: bg,
      color: fg,
      boxShadow: z === '0' ? 'none' : 'var(--shadow-ambient)',
      border: '1px solid var(--border-translucent)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sx-note"
  }, "Hover the stack to explode the planes. Decorative layers live on depth 1\u20133; text and controls stay on the base plane."), /*#__PURE__*/React.createElement("div", {
    className: "sx-grid",
    style: {
      '--min': '120px',
      gap: 16
    }
  }, E.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    className: "sx-elev",
    style: {
      boxShadow: `var(${v})`
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      font: '900 15px/1.2 var(--font-sans)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    className: "sx-code"
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '8px 20px'
    }
  }, T.map(([k, v]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-code"
  }, k), /*#__PURE__*/React.createElement("span", null, v))))));
}
const SX_SERVICES = [{
  k: 'Small-group walks',
  t: 'Good company on familiar streets.',
  d: 'Friendly dogs walked together at a relaxed neighborhood pace.',
  img: 'walking-group',
  pos: '40% 60%'
}, {
  k: 'Private walks',
  t: 'One dog, full attention.',
  d: 'A walk shaped around your dog’s energy, routine and comfort.',
  img: 'park-dog',
  pos: '50% 35%'
}, {
  k: 'Puppy visits',
  t: 'Little steps first.',
  d: 'Short visits for play, potty breaks and gentle routines.',
  img: 'fluffy-dog',
  pos: '60% 70%'
}, {
  k: 'Pet care',
  t: 'Attentive care at home.',
  d: 'Feeding, fresh water and company while you’re away.',
  img: 'brown-dog',
  pos: '35% 20%'
}];
function SxServiceCard({
  s
}) {
  const {
    SpatialCard,
    SpatialLayer,
    TactileButton,
    Logo
  } = SX();
  return /*#__PURE__*/React.createElement(SpatialCard, {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/10',
      overflow: 'hidden',
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SXP + s.img + '.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.pos,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(SpatialLayer, {
    depth: 24,
    style: {
      position: 'absolute',
      right: 16,
      top: 'calc(62.5% * 0 + 16px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--bdw-warm-cream)',
      boxShadow: 'var(--elevation-2)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    width: 40,
    base: SXL
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px/1 var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, s.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '900 24px/1.2 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6
    }
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    variant: "secondary",
    arrow: true
  }, "Ask about this"))));
}
function SxCards() {
  const {
    StaggerContainer
  } = SX();
  return /*#__PURE__*/React.createElement(StaggerContainer, {
    className: "sx-grid",
    style: {
      '--min': '240px',
      marginTop: 32
    },
    itemStyle: {
      display: 'flex'
    }
  }, SX_SERVICES.map(s => /*#__PURE__*/React.createElement(SxServiceCard, {
    key: s.k,
    s: s
  })));
}
function SxButtons() {
  const {
    TactileButton
  } = SX();
  const [busy, setBusy] = React.useState(false);
  const run = () => {
    setBusy(true);
    setTimeout(() => setBusy(false), 1800);
  };
  const states = [['Default', {}], ['Hover', {
    state: 'hover'
  }], ['Pressed', {
    state: 'active'
  }], ['Focus', {
    state: 'focus'
  }], ['Disabled', {
    disabled: true
  }], ['Loading', {
    loading: true,
    loadingLabel: 'Booking…'
  }]];
  const V = [['primary', 'Book a meet & greet'], ['secondary', 'Explore services'], ['blue', 'Let’s meet']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-panel",
    style: {
      marginTop: 0,
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "sx-mt",
    style: {
      minWidth: 760
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), states.map(([l]) => /*#__PURE__*/React.createElement("th", {
    key: l
  }, l)))), /*#__PURE__*/React.createElement("tbody", null, V.map(([v, label]) => /*#__PURE__*/React.createElement("tr", {
    key: v
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sx-code"
  }, v)), states.map(([l, p]) => /*#__PURE__*/React.createElement("td", {
    key: l
  }, /*#__PURE__*/React.createElement(TactileButton, _extends({
    size: "sm",
    variant: v
  }, p, {
    tabIndex: -1
  }), l === 'Loading' ? label.split(' ')[0] : 'Go')))))))), /*#__PURE__*/React.createElement("div", {
    className: "sx-grid",
    style: {
      '--min': '320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-panel",
    style: {
      marginTop: 0,
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sx-label"
  }, "Try it"), /*#__PURE__*/React.createElement("div", {
    className: "sx-row"
  }, /*#__PURE__*/React.createElement(TactileButton, {
    arrow: true,
    loading: busy,
    loadingLabel: "Booking\u2026",
    onClick: run
  }, "Book a meet & greet"), /*#__PURE__*/React.createElement(TactileButton, {
    variant: "secondary"
  }, "Explore services")), /*#__PURE__*/React.createElement("p", {
    className: "sx-note"
  }, "Hover lifts 2px and brightens the sheen. Press travels 3px onto the lip and compresses to 0.985. Tab to see the 3px #004B75 ring; the glow is only added on top.")), /*#__PURE__*/React.createElement("div", {
    className: "sx-panel",
    style: {
      marginTop: 0,
      display: 'grid',
      gap: 16,
      background: 'var(--bdw-deep-walk)',
      borderColor: 'transparent'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sx-label",
    style: {
      color: 'var(--bdw-warm-cream)'
    }
  }, "On Deep Walk"), /*#__PURE__*/React.createElement("div", {
    className: "sx-row"
  }, /*#__PURE__*/React.createElement(TactileButton, {
    variant: "cream",
    arrow: true
  }, "Let\u2019s meet"), /*#__PURE__*/React.createElement(TactileButton, {
    glow: "neon"
  }, "Neon (experimental)")), /*#__PURE__*/React.createElement("p", {
    className: "sx-note",
    style: {
      color: 'var(--bdw-warm-cream)'
    }
  }, "Neon glow is reserved for exceptional highlights."))));
}
function SxNav() {
  const {
    GlassSurface,
    TactileButton
  } = SX();
  const ref = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "sx-frame",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(GlassSurface, {
    as: "nav",
    "aria-label": "Demo",
    elevateOnScroll: true,
    scrollTarget: ref,
    radius: 999,
    padding: "8px 8px 8px 12px",
    style: {
      position: 'sticky',
      top: 12,
      margin: 12,
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SXL + 'bdw-mascot.png',
    alt: "",
    style: {
      width: 36
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      font: '900 16px/1 var(--font-sans)'
    }
  }, "Bruno Dog Walker"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, ['Services', 'Meet & greet'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "bdw-link",
    style: {
      padding: '8px 10px',
      fontSize: 14
    },
    onClick: e => e.preventDefault()
  }, l))), /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    arrow: true
  }, "Book")), /*#__PURE__*/React.createElement("div", {
    className: "sx-grid",
    style: {
      '--min': '200px',
      gap: 12,
      padding: '0 12px 12px',
      marginTop: -68
    }
  }, ['park-dog', 'walking-group', 'fluffy-dog', 'brown-dog', 'park-crew-portrait', 'park-dog'].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 220
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "sx-photo",
    src: SXP + p + '.png',
    alt: ""
  })))));
}
function SxMascot() {
  const {
    AnimatedMascot,
    FloatingElement,
    GlassSurface,
    Logo
  } = SX();
  const [pointer, setP] = React.useState(true),
    [amb, setA] = React.useState(true),
    [glow, setG] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-panel sx-grid",
    style: {
      '--min': '300px',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center',
      width: 'min(380px,100%)',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(AnimatedMascot, {
    base: SXL,
    pointer: pointer,
    ambient: amb,
    glow: glow
  }, /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 32,
    style: {
      position: 'absolute',
      right: '-6%',
      bottom: '22%'
    }
  }, /*#__PURE__*/React.createElement(GlassSurface, {
    radius: 999,
    padding: "8px 16px 8px 8px",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: '800 14px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    avatar: true,
    width: 30,
    base: SXL
  }), "Neighborhood walks")), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 20,
    rotate: -2,
    style: {
      position: 'absolute',
      left: '-4%',
      bottom: '4%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-badge",
    style: {
      transform: 'rotate(-6deg)'
    }
  }, "MORE THAN A WALK.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sx-label"
  }, "What moves"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Container floats 8px over 6s and breathes (scale 1.012, 4s)"), /*#__PURE__*/React.createElement("li", null, "Contact shadow shrinks as the mascot rises"), /*#__PURE__*/React.createElement("li", null, "Ring, halo and chips drift independently toward the cursor (\xD70.6, desktop only)"), /*#__PURE__*/React.createElement("li", null, "Chips float on their own 5\u20138s loops, out of phase"), /*#__PURE__*/React.createElement("li", null, "Click: one hop")), /*#__PURE__*/React.createElement("p", {
    className: "sx-note"
  }, "No head tilt: the mascot is a single flat illustration with no separate head layer, so the artwork itself is never rotated or warped. A layered or 3D mascot would need a new, approved asset."), /*#__PURE__*/React.createElement("div", {
    className: "sx-row"
  }, /*#__PURE__*/React.createElement(SxToggle, {
    on: pointer,
    set: setP
  }, "Pointer response"), /*#__PURE__*/React.createElement(SxToggle, {
    on: amb,
    set: setA
  }, "Ambient"), /*#__PURE__*/React.createElement(SxToggle, {
    on: glow,
    set: setG
  }, "Glow"))));
}
Object.assign(window, {
  SX,
  SXL,
  SXP,
  SxToggle,
  SxSec,
  SxTokens,
  SxCards,
  SxButtons,
  SxNav,
  SxMascot,
  SX_SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/spatial/SpatialSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/spatial/SpatialShowcase.jsx
try { (() => {
function SxReveal() {
  const {
    StaggerContainer,
    ScrollReveal,
    ImageTile,
    TactileButton,
    Card
  } = SX();
  const [k, setK] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gap: 32,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sx-label",
    style: {
      marginBottom: 12
    }
  }, "Services \xB7 stagger 80ms, rise 16px"), /*#__PURE__*/React.createElement(StaggerContainer, {
    className: "sx-grid",
    style: {
      '--min': '200px',
      gap: 16
    },
    itemStyle: {
      display: 'flex'
    }
  }, SX_SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.k,
    style: {
      flex: 1
    },
    eyebrow: s.k,
    title: s.t
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sx-label",
    style: {
      marginBottom: 12
    }
  }, "Gallery \xB7 unmask + 1.05 \u2192 1 settle"), /*#__PURE__*/React.createElement(StaggerContainer, {
    variant: "image",
    stagger: 90,
    className: "sx-grid",
    style: {
      '--min': '180px',
      gap: 16
    }
  }, [['park-dog', '50% 35%', 'You said walk. I heard adventure.'], ['fluffy-dog', '60% 70%', 'Small paws. Big city.'], ['brown-dog', '35% 20%', 'One more sniff stop.'], ['walking-group', '40% 60%', 'Every walk has its own rhythm.']].map(([p, pos, c]) => /*#__PURE__*/React.createElement(ImageTile, {
    key: p,
    src: SXP + p + '.png',
    position: pos,
    ratio: "4/5",
    alt: "",
    caption: c
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sx-label",
    style: {
      marginBottom: 12
    }
  }, "CTA \xB7 eyebrow, title, text, then action"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bdw-deep-walk)',
      color: 'var(--bdw-warm-cream)',
      borderRadius: 24,
      padding: 'clamp(28px,5vw,48px)'
    }
  }, /*#__PURE__*/React.createElement(StaggerContainer, {
    stagger: 90,
    style: {
      display: 'grid',
      gap: 14,
      justifyItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 18px/1 var(--font-label)',
      textTransform: 'uppercase'
    }
  }, "Upper East Side / Manhattan"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '900 clamp(30px,4vw,44px)/1.05 var(--font-sans)',
      letterSpacing: '-.03em'
    }
  }, "Good care starts with a hello."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18
    }
  }, "Meet us and your dog before the first walk."), /*#__PURE__*/React.createElement(TactileButton, {
    variant: "cream",
    arrow: true
  }, "Let\u2019s meet")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    variant: "secondary",
    onClick: () => setK(k + 1)
  }, "Replay reveals")));
}
function SxPaw() {
  const c = (l, t, w, h) => /*#__PURE__*/React.createElement("i", {
    style: {
      left: l,
      top: t,
      width: w,
      height: h
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    className: "sx-paw",
    "aria-hidden": "true"
  }, c('8%', '0%', '22%', '28%'), c('39%', '-6%', '22%', '28%'), c('70%', '0%', '22%', '28%'), c('22%', '38%', '56%', '52%'));
}
function SxDecor() {
  const {
    FloatingElement,
    Spark,
    Logo,
    AmbientGlow
  } = SX();
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-decor",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,5vw,48px)',
      color: 'var(--bdw-warm-cream)',
      display: 'grid',
      alignContent: 'center',
      gap: 12,
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 18px/1 var(--font-label)',
      textTransform: 'uppercase'
    }
  }, "Reading zone"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '900 clamp(30px,4vw,44px)/1.05 var(--font-sans)',
      letterSpacing: '-.03em'
    }
  }, "Neighborhood walks. Everyday joy."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '36ch'
    }
  }, "Text keeps still. Decoration stays in the right half, each piece on its own 5\u20138s loop and depth.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 360
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(AmbientGlow, {
    size: 360,
    intensity: .9,
    pulse: true,
    style: {
      left: '10%',
      top: '0%'
    }
  }), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 12,
    style: {
      position: 'absolute',
      left: '8%',
      top: '12%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-circle",
    style: {
      width: 120,
      height: 120,
      background: 'var(--bdw-deep-walk)'
    }
  })), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 20,
    amplitude: 5,
    style: {
      position: 'absolute',
      right: '10%',
      top: '58%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-circle",
    style: {
      width: 64,
      height: 64,
      border: '3px solid var(--bdw-warm-cream)'
    }
  })), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 40,
    amplitude: 8,
    rotate: 8,
    style: {
      position: 'absolute',
      left: '56%',
      top: '14%'
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 40,
    glow: true
  })), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 28,
    rotate: -10,
    style: {
      position: 'absolute',
      left: '14%',
      bottom: '14%'
    }
  }, /*#__PURE__*/React.createElement(SxPaw, null)), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 32,
    rotate: -3,
    style: {
      position: 'absolute',
      left: '30%',
      top: '46%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-badge",
    style: {
      transform: 'rotate(-6deg)'
    }
  }, "WALK DIARIES / NYC")), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 16,
    style: {
      position: 'absolute',
      right: '14%',
      top: '10%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--bdw-warm-cream)',
      boxShadow: 'var(--elevation-2)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    width: 54,
    base: SXL
  })))));
}
function SxLight() {
  const {
    SpatialCard,
    TactileButton,
    AmbientGlow
  } = SX();
  const ref = React.useRef(null);
  const mv = e => {
    if (e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--lx', ((e.clientX - r.left) / r.width).toFixed(3));
    ref.current.style.setProperty('--ly', ((e.clientY - r.top) / r.height).toFixed(3));
  };
  const {
    Logo
  } = SX();
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-grid",
    style: {
      '--min': '320px',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "sx-light",
    onPointerMove: mv
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-light__src"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sx-light__obj"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    avatar: true,
    width: 64,
    base: SXL
  })), /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      marginTop: 12,
      font: '900 18px/1.2 var(--font-sans)'
    }
  }, "Key light"), /*#__PURE__*/React.createElement("span", {
    className: "sx-note"
  }, "Move the cursor to move the light."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SpatialCard, {
    state: "hover",
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sx-label"
  }, "Directional highlight + rim"), /*#__PURE__*/React.createElement("b", {
    style: {
      font: '900 20px/1.2 var(--font-sans)'
    }
  }, "Hover me for live light."), /*#__PURE__*/React.createElement("span", {
    className: "sx-note"
  }, "Highlight and border illumination scale with Glow intensity."))), /*#__PURE__*/React.createElement("div", {
    className: "sx-panel",
    style: {
      marginTop: 0,
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "sx-label"
  }, "Hover glow"), /*#__PURE__*/React.createElement("div", {
    className: "sx-row"
  }, /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm"
  }, "Warm"), /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    glow: "neon"
  }, "Neon"), /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    glow: "none"
  }, "None"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 120,
      borderRadius: 24,
      background: 'var(--bdw-cocoa)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(AmbientGlow, {
    size: 200,
    style: {
      left: '4%',
      top: '-40%'
    }
  }), /*#__PURE__*/React.createElement(AmbientGlow, {
    size: 200,
    tone: "blue",
    intensity: 1.4,
    style: {
      left: '36%',
      top: '-40%'
    }
  }), /*#__PURE__*/React.createElement(AmbientGlow, {
    size: 200,
    tone: "neon",
    style: {
      left: '68%',
      top: '-40%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0 12px',
      display: 'flex',
      justifyContent: 'space-around',
      font: '700 14px/1 var(--font-label)',
      textTransform: 'uppercase',
      color: 'var(--bdw-warm-cream)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Warm"), /*#__PURE__*/React.createElement("span", null, "Blue"), /*#__PURE__*/React.createElement("span", null, "Neon \xB7 rare")))));
}
const SX_MT = [['--motion-micro', '150ms', 'Color, press, toggles', 'var(--motion-micro)', 'var(--ease-default)'], ['--motion-fast', '200ms', 'Button travel', 'var(--motion-fast)', 'var(--ease-spring-physical)'], ['--motion-standard', '250ms', 'Hover, shadow, glow', 'var(--motion-standard)', 'var(--ease-default)'], ['--motion-reveal', '550ms', 'Scroll entrances', 'var(--motion-reveal)', 'var(--ease-default)'], ['--motion-reset', '700ms', 'Tilt spring back', 'var(--motion-reset)', 'var(--ease-spring-physical)'], ['--motion-ambient-min / max', '5–8s', 'Float, glow pulse', '1.6s', 'cubic-bezier(.45,0,.55,1)'], ['--ease-default', 'cubic-bezier(0.22,1,0.36,1)', 'Everything that settles', 'var(--motion-reveal)', 'var(--ease-default)'], ['--ease-spring-physical', 'linear() spring · cubic fallback', 'Physical travel and returns', 'var(--motion-reset)', 'var(--ease-spring-physical)']];
function SxMotion() {
  const [play, setPlay] = React.useState(false);
  const {
    TactileButton
  } = SX();
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-panel",
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-row",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    variant: "blue",
    onClick: () => setPlay(p => !p)
  }, play ? 'Return' : 'Play all'), /*#__PURE__*/React.createElement("span", {
    className: "sx-note"
  }, "Durations follow the Duration control in the dock.")), /*#__PURE__*/React.createElement("table", {
    className: "sx-mt",
    "data-play": String(play),
    style: {
      minWidth: 680
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Token"), /*#__PURE__*/React.createElement("th", null, "Value"), /*#__PURE__*/React.createElement("th", null, "Use"), /*#__PURE__*/React.createElement("th", null, "Demo"))), /*#__PURE__*/React.createElement("tbody", null, SX_MT.map(([t, v, u, d, e]) => /*#__PURE__*/React.createElement("tr", {
    key: t
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "sx-code"
  }, t)), /*#__PURE__*/React.createElement("td", null, v), /*#__PURE__*/React.createElement("td", null, u), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "sx-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-ball",
    style: {
      transition: 'transform ' + d + ' ' + e
    }
  }))))))));
}
const SX_RM = [['SpatialCard', 'No tilt, lift or layer drift. Shadow, rim and border still mark hover.'], ['TactileButton', 'Colour, sheen and glow change; no travel or compression.'], ['AnimatedMascot', 'Still, centred; no float, breathe, drift or hop.'], ['FloatingElement / AmbientGlow', 'Loops stop; elements rest in place.'], ['ScrollReveal / StaggerContainer', 'Content shown at once, no fade.'], ['GlassSurface', 'Unchanged: no motion to remove.'], ['Focus', 'Always the 3px #004B75 ring (Sunshine on Cocoa).'], ['Touch', 'Cursor tilt and drift are off; cards use a 0.985 press instead.']];
const SX_DEF = {
  tilt: 4,
  lift: 6,
  glow: 1,
  scale: 1,
  rm: false
};
function SxDock({
  v,
  set
}) {
  const {
    GlassSurface
  } = SX();
  const [open, setOpen] = React.useState(true);
  const R = (k, l, min, max, step, fmt) => /*#__PURE__*/React.createElement("div", {
    className: "sx-ctl"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: 'sx-' + k
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, fmt(v[k]))), /*#__PURE__*/React.createElement("input", {
    id: 'sx-' + k,
    className: "sx-range",
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v[k],
    onChange: e => set({
      ...v,
      [k]: +e.target.value
    })
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-dock"
  }, /*#__PURE__*/React.createElement(GlassSurface, {
    radius: 20,
    padding: "14px 16px",
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '900 15px/1 var(--font-sans)'
    }
  }, "Controls"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bdw-link",
    style: {
      marginLeft: 'auto',
      border: 0,
      background: 'none',
      cursor: 'pointer',
      font: '800 13px/1 var(--font-sans)'
    },
    onClick: () => set(SX_DEF)
  }, "Reset"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "bdw-link",
    "aria-expanded": open,
    style: {
      border: 0,
      background: 'none',
      cursor: 'pointer',
      font: '800 13px/1 var(--font-sans)'
    },
    onClick: () => setOpen(!open)
  }, open ? 'Hide' : 'Show')), open && /*#__PURE__*/React.createElement(React.Fragment, null, R('tilt', 'Tilt', 0, 4, .5, x => '±' + x + '°'), R('lift', 'Hover elevation', 0, 8, 1, x => x + 'px'), R('glow', 'Glow intensity', 0, 1.5, .1, x => Math.round(x * 100) + '%'), R('scale', 'Animation duration', .5, 2, .25, x => '×' + x), /*#__PURE__*/React.createElement(SxToggle, {
    on: v.rm,
    set: b => set({
      ...v,
      rm: b
    })
  }, "Reduced motion"))));
}
function SpatialShowcase() {
  const {
    GlassSurface,
    Logo,
    AnimatedMascot,
    FloatingElement
  } = SX();
  const [v, setV] = React.useState(() => {
    try {
      return {
        ...SX_DEF,
        ...JSON.parse(localStorage.getItem('bdw-sx') || '{}')
      };
    } catch (e) {
      return SX_DEF;
    }
  });
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--spatial-tilt', v.tilt + 'deg');
    r.style.setProperty('--spatial-lift', v.lift + 'px');
    r.style.setProperty('--glow-intensity', v.glow);
    r.style.setProperty('--motion-scale', v.scale);
    r.toggleAttribute('data-reduce-motion', v.rm);
    localStorage.setItem('bdw-sx', JSON.stringify(v));
  }, [v]);
  const os = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GlassSurface, {
    as: "header",
    elevateOnScroll: true,
    radius: 0,
    padding: "0",
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      borderWidth: '0 0 1px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-wrap",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingTop: 10,
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    width: 40,
    base: SXL
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      font: '900 17px/1.1 var(--font-sans)'
    }
  }, "Spatial system", /*#__PURE__*/React.createElement("small", {
    style: {
      display: 'block',
      font: '600 12px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Bruno Dog Walker \xB7 v3 Stage A \xB7 for review")))), /*#__PURE__*/React.createElement("main", {
    className: "sx-wrap",
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "sx-num"
  }, "Warm \xB7 Playful \xB7 Dimensional \xB7 Tactile \xB7 Alive"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 clamp(44px,6vw,72px)/1.02 var(--font-sans)',
      letterSpacing: '-.035em',
      margin: '16px 0 0'
    }
  }, "Alive,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bdw-deep-walk)'
    }
  }, "not animated.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 19px/1.5 var(--font-sans)',
      maxWidth: '42ch',
      margin: '20px 0 0'
    }
  }, "The spatial tokens and motion primitives for Bruno Dog Walker. Use the controls in the corner to adjust tilt, elevation, glow and timing across the whole page."), os && /*#__PURE__*/React.createElement("p", {
    className: "sx-note",
    style: {
      marginTop: 12
    }
  }, "Your system requests reduced motion, so movement is off.")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'center',
      width: 'min(300px,80%)'
    }
  }, /*#__PURE__*/React.createElement(AnimatedMascot, {
    base: SXL,
    glow: true
  }))), /*#__PURE__*/React.createElement(SxSec, {
    n: "01 / Spatial tokens",
    title: "Depth and elevation.",
    lede: "One perspective (1000px), four depth planes, and three shadow states. Everything warm and Cocoa-tinted."
  }, /*#__PURE__*/React.createElement(SxTokens, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "02 / SpatialCard",
    title: "Interactive 3D service cards.",
    lede: "Up to 4\xB0 tilt toward the cursor, 6px lift, a shadow cast away from it, a directional highlight and a warm illuminated rim. The mascot badge sits on its own depth plane. Springs back on leave."
  }, /*#__PURE__*/React.createElement(SxCards, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "03 / TactileButton",
    title: "Tactile buttons.",
    lede: "A visible 3px lip gives the button something to press into."
  }, /*#__PURE__*/React.createElement(SxButtons, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "04 / GlassSurface",
    title: "Floating glass navigation.",
    lede: "Scroll inside the frame. Warm cream at 80%, 14px blur, a top sheen. On scroll it becomes more opaque and gains elevation; it never moves."
  }, /*#__PURE__*/React.createElement(SxNav, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "05 / AnimatedMascot",
    title: "Hero mascot motion."
  }, /*#__PURE__*/React.createElement(SxMascot, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "06 / ScrollReveal \xB7 StaggerContainer",
    title: "Narrative scroll reveals.",
    lede: "One shared observer, once per element, transform and opacity only."
  }, /*#__PURE__*/React.createElement(SxReveal, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "07 / FloatingElement",
    title: "Ambient decoration.",
    lede: "Soft circles, one \u2726, a paw accent, badges and the mascot avatar. Never synchronised, never in the reading zone, paused off-screen."
  }, /*#__PURE__*/React.createElement(SxDecor, null), /*#__PURE__*/React.createElement("p", {
    className: "sx-note",
    style: {
      marginTop: 12
    }
  }, "The paw accent is a new CSS shape, not an original brand asset. It needs approval before Stage B.")), /*#__PURE__*/React.createElement(SxSec, {
    n: "08 / Light & AmbientGlow",
    title: "Dynamic lighting and glow.",
    lede: "Warm is the brand light. Neon is experimental and reserved for exceptional highlights."
  }, /*#__PURE__*/React.createElement(SxLight, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "09 / Motion tokens",
    title: "Duration and easing."
  }, /*#__PURE__*/React.createElement(SxMotion, null)), /*#__PURE__*/React.createElement(SxSec, {
    n: "10 / Accessibility",
    title: "Reduced-motion alternatives.",
    lede: "Toggle Reduced motion in the controls. The OS setting applies the same rules automatically."
  }, /*#__PURE__*/React.createElement("ul", {
    className: "sx-rm"
  }, SX_RM.map(([a, b]) => /*#__PURE__*/React.createElement("li", {
    key: a
  }, /*#__PURE__*/React.createElement("b", null, a), /*#__PURE__*/React.createElement("span", null, b)))))), /*#__PURE__*/React.createElement(SxDock, {
    v: v,
    set: setV
  }));
}
window.SpatialShowcase = SpatialShowcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/spatial/SpatialShowcase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookPage.jsx
try { (() => {
function BookPage({
  go,
  preset
}) {
  const {
    Field,
    Select,
    Checkbox,
    TactileButton: Button,
    Card,
    Tag,
    Highlight,
    ScrollReveal
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  const [v, setV] = React.useState({
    name: '',
    email: '',
    dog: '',
    service: preset || SERVICES[0].k,
    notes: ''
  });
  const [err, setErr] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const set = k => e => setV({
    ...v,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    const x = {};
    if (!v.name.trim()) x.name = 'Please add your name.';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Please enter a full email address.';
    if (!v.dog.trim()) x.dog = 'Please add your dog’s name.';
    setErr(x);
    if (!Object.keys(x).length) {
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        setSent(true);
        window.scrollTo(0, 0);
      }, 1100);
    }
  };
  const wrap = {
    maxWidth: 1080,
    margin: '0 auto',
    padding: '64px clamp(20px,5vw,80px) 0'
  };
  if (sent) return /*#__PURE__*/React.createElement("main", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: 1,
    style: {
      padding: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Meet & greet"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 clamp(36px,5vw,56px)/1.05 var(--font-sans)',
      letterSpacing: '-.035em',
      margin: '8px 0 0'
    }
  }, "Thanks, ", v.name.split(' ')[0], ".", /*#__PURE__*/React.createElement("br", null), "Say hi to ", /*#__PURE__*/React.createElement(Highlight, null, v.dog), " for us."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 20px/1.5 var(--font-sans)',
      margin: 0,
      maxWidth: '44ch'
    }
  }, "We received your request for ", v.service.toLowerCase(), " and will reply to ", v.email, " to pick a time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--feedback-success)',
      fontWeight: 700,
      margin: 0
    }
  }, "Demo only \u2014 nothing was sent or stored."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('home')
  }, "Back home"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setV({
        ...v,
        notes: ''
      });
    }
  }, "Edit request"))));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 18px/1 var(--font-label)',
      color: 'var(--bdw-deep-walk)',
      margin: 0
    }
  }, "MEET & GREET"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 clamp(40px,5vw,56px)/1.05 var(--font-sans)',
      letterSpacing: '-.035em',
      margin: '8px 0 16px'
    }
  }, "Good care starts with a hello."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 20px/1.5 var(--font-sans)',
      margin: 0
    }
  }, "Tell us about your dog. We\u2019ll set up a short visit to meet before the first walk."), /*#__PURE__*/React.createElement(ScrollReveal, {
    variant: "image",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/park-crew-portrait.png",
    alt: "Two dogs on a park walk",
    style: {
      width: '100%',
      borderRadius: 24,
      display: 'block',
      boxShadow: 'var(--shadow-ambient)'
    }
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    value: v.name,
    onChange: set('name'),
    error: err.name,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Your email",
    type: "email",
    placeholder: "you@example.com",
    value: v.email,
    onChange: set('email'),
    error: err.email,
    help: "We\u2019ll reply by email."
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Dog\u2019s name",
    value: v.dog,
    onChange: set('dog'),
    error: err.dog
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service",
    value: v.service,
    onChange: set('service'),
    options: SERVICES.map(s => s.k)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Anything we should know?",
    multiline: true,
    value: v.notes,
    onChange: set('notes'),
    help: "Routine, temperament, building access."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "My dog is comfortable around other dogs"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true,
    arrow: true,
    loading: busy,
    loadingLabel: "Sending request\u2026"
  }, "Request a meet & greet"))));
}
Object.assign(window, {
  BookPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
const PH = '../../assets/photos/';
const SERVICES = [{
  k: 'Small-group walks',
  t: 'Good company on familiar streets.',
  d: 'Friendly dogs walked together at a relaxed neighborhood pace.',
  img: 'walking-group',
  pos: '40% 60%'
}, {
  k: 'Private walks',
  t: 'One dog, full attention.',
  d: 'A walk shaped around your dog’s energy, routine and comfort.',
  img: 'park-dog',
  pos: '50% 35%'
}, {
  k: 'Puppy visits',
  t: 'Little steps first.',
  d: 'Short visits for play, potty breaks and gentle routines.',
  img: 'fluffy-dog',
  pos: '60% 70%'
}, {
  k: 'Pet care',
  t: 'Attentive care at home.',
  d: 'Feeding, fresh water and company while you’re away.',
  img: 'brown-dog',
  pos: '35% 20%'
}];
const wrap = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 clamp(20px,5vw,80px)'
};
const h2 = {
  font: '900 clamp(31px,4vw,40px)/1.1 var(--font-sans)',
  letterSpacing: '-.03em',
  margin: '8px 0 0'
};
const eyebrow = {
  font: '700 18px/1 var(--font-label)',
  textTransform: 'uppercase',
  color: 'var(--bdw-deep-walk)',
  margin: 0
};
function Hero({
  go
}) {
  const {
    Tag,
    TactileButton,
    GlassSurface,
    Spark,
    Logo,
    AnimatedMascot,
    FloatingElement
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 48,
      alignItems: 'center',
      padding: '72px clamp(20px,5vw,80px) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    style: {
      fontFamily: 'var(--font-sans)',
      textTransform: 'none',
      fontWeight: 800,
      fontSize: 14,
      letterSpacing: 0
    }
  }, "Upper East Side \xB7 Manhattan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '900 clamp(46px,6.4vw,80px)/1.02 var(--font-sans)',
      letterSpacing: '-.035em',
      margin: '20px 0 0',
      color: 'var(--bdw-cocoa)'
    }
  }, "Good walks.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bdw-deep-walk)'
    }
  }, "Happy dogs.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '600 20px/1.5 var(--font-sans)',
      maxWidth: '34ch',
      margin: '24px 0 0'
    }
  }, "Personal dog walking and attentive pet care for the neighborhood we call home."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(TactileButton, {
    arrow: true,
    onClick: () => go('book')
  }, "Book a meet & greet"), /*#__PURE__*/React.createElement(TactileButton, {
    variant: "secondary",
    onClick: () => go('services')
  }, "Explore services"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-art"
  }, /*#__PURE__*/React.createElement(AnimatedMascot, {
    base: SITE_LOGOS
  }, /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 40,
    amplitude: 7,
    rotate: 6,
    className: "hero-float hero-spark"
  }, /*#__PURE__*/React.createElement(GlassSurface, {
    radius: "50%",
    padding: "0",
    style: {
      width: 64,
      height: 64,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 34,
    glow: true
  }))), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 28,
    className: "hero-float hero-chip"
  }, /*#__PURE__*/React.createElement(GlassSurface, {
    radius: 999,
    padding: "8px 16px 8px 8px",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    avatar: true,
    width: 34,
    base: SITE_LOGOS
  }), /*#__PURE__*/React.createElement("span", null, "Neighborhood walks"))), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 16,
    rotate: -2,
    className: "hero-label-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-label"
  }, "MORE THAN A WALK.")))));
}
function Banner() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bdw-walk-blue)',
      color: 'var(--bdw-warm-cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '18px clamp(20px,5vw,80px)',
      font: '900 22px/1.2 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, "Neighborhood walks. Everyday joy."));
}
function Services({
  go,
  compact
}) {
  const {
    SpatialCard,
    SpatialLayer,
    TactileButton,
    ScrollReveal,
    StaggerContainer,
    Logo
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: compact ? 48 : 104
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Services"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Care shaped around your dog.")), /*#__PURE__*/React.createElement(StaggerContainer, {
    stagger: 80,
    itemStyle: {
      display: 'flex'
    },
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
      gap: 24,
      marginTop: 32
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(SpatialCard, {
    key: s.k,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      overflow: 'hidden',
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PH + s.img + '.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.pos,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement(SpatialLayer, {
    depth: 24,
    style: {
      position: 'absolute',
      right: 16,
      top: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--bdw-warm-cream)',
      boxShadow: 'var(--elevation-2)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mascot",
    width: 40,
    base: SITE_LOGOS
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 16px/1 var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.02em'
    }
  }, s.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: '900 24px/1.2 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6
    }
  }, s.d), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    variant: "secondary",
    arrow: true,
    onClick: () => go('book', s.k)
  }, "Ask about this")))))));
}
const GALLERY = [['park-dog', '50% 35%', 'You said walk. I heard adventure.'], ['fluffy-dog', '60% 70%', 'Small paws. Big city.'], ['brown-dog', '35% 20%', 'One more sniff stop.'], ['walking-group', '40% 60%', 'Every walk has its own rhythm.']];
function Photos() {
  const {
    ImageTile,
    ScrollReveal,
    StaggerContainer,
    Parallax
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 104
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: eyebrow
  }, "Walk Diaries / NYC"), /*#__PURE__*/React.createElement("h2", {
    style: h2
  }, "Real dogs. Local stories.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '44ch',
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "Every walk has a story. Familiar streets, curious noses and a little more joy along the way.")), /*#__PURE__*/React.createElement(StaggerContainer, {
    variant: "image",
    stagger: 90,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,200px),1fr))',
      gap: 20,
      marginTop: 32
    }
  }, GALLERY.map(([p, pos, c], i) => /*#__PURE__*/React.createElement(Parallax, {
    key: p,
    speed: i % 2 ? 0.03 : -0.02,
    max: 20
  }, /*#__PURE__*/React.createElement(ImageTile, {
    src: PH + p + '.png',
    position: pos,
    alt: "",
    caption: c
  })))));
}
function HomePage({
  go
}) {
  const {
    TactileButton,
    StaggerContainer,
    ScrollReveal,
    FloatingElement,
    Spark
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Banner, null), /*#__PURE__*/React.createElement(Services, {
    go: go
  }), /*#__PURE__*/React.createElement(Photos, null), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      marginTop: 104
    }
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    variant: "scale"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bdw-deep-walk)',
      color: 'var(--bdw-warm-cream)',
      borderRadius: 24,
      padding: 'clamp(32px,5vw,56px)',
      boxShadow: 'var(--shadow-ambient)'
    }
  }, /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 20,
    rotate: 8,
    style: {
      position: 'absolute',
      right: '8%',
      top: '18%'
    }
  }, /*#__PURE__*/React.createElement(Spark, {
    size: 36,
    glow: true
  })), /*#__PURE__*/React.createElement(FloatingElement, {
    depth: 12,
    amplitude: 4,
    style: {
      position: 'absolute',
      right: '-40px',
      bottom: '-60px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'var(--bdw-walk-blue)'
    }
  })), /*#__PURE__*/React.createElement(StaggerContainer, {
    stagger: 90,
    style: {
      position: 'relative',
      display: 'grid',
      gap: 14,
      justifyItems: 'start',
      maxWidth: '34ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 18px/1 var(--font-label)',
      textTransform: 'uppercase'
    }
  }, "Upper East Side / Manhattan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2,
      margin: 0
    }
  }, "Good care starts with a hello."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18
    }
  }, "Meet us and your dog before the first walk."), /*#__PURE__*/React.createElement(TactileButton, {
    arrow: true,
    onClick: () => go('book')
  }, "Let\u2019s meet"))))));
}
Object.assign(window, {
  HomePage,
  Services,
  SERVICES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const L = '../../assets/logos/';
function SiteHeader({
  page,
  go
}) {
  const {
    TactileButton,
    GlassSurface
  } = window.BrunoDogWalkerDesignSystem_0597c9;
  const link = (id, label) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: 'site-link' + (page === id ? ' is-active' : ''),
    "aria-current": page === id ? 'page' : undefined,
    onClick: e => {
      e.preventDefault();
      go(id);
    }
  }, label);
  return /*#__PURE__*/React.createElement(GlassSurface, {
    as: "header",
    className: "site-header",
    elevateOnScroll: true,
    radius: 0,
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '10px clamp(20px,5vw,80px)',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "site-brand",
    onClick: e => {
      e.preventDefault();
      go('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'bdw-mascot.png',
    alt: "",
    style: {
      width: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '900 18px/1 var(--font-sans)',
      letterSpacing: '-.02em'
    }
  }, "Bruno Dog Walker", /*#__PURE__*/React.createElement("small", {
    style: {
      display: 'block',
      font: '600 12px/1.4 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Upper East Side \xB7 NYC"))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 'auto',
      flexWrap: 'wrap'
    }
  }, link('home', 'Home'), link('services', 'Services'), link('book', 'Meet & greet')), /*#__PURE__*/React.createElement(TactileButton, {
    size: "sm",
    arrow: true,
    onClick: () => go('book')
  }, "Book")));
}
function SiteFooter({
  go
}) {
  const f = (id, l) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "foot-link",
    onClick: e => {
      e.preventDefault();
      go(id);
    }
  }, l);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bdw-cocoa)',
      color: 'var(--bdw-warm-cream)',
      marginTop: 112
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '56px clamp(20px,5vw,80px) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--bdw-walk-blue)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: '0 0 0 4px rgba(255,249,234,.08)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: L + 'bdw-mascot.png',
    alt: "",
    style: {
      width: '78%'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      font: '900 20px/1.2 var(--font-sans)'
    }
  }, "Bruno Dog Walker"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Dog walking & pet care \xB7 Upper East Side, Manhattan"))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Footer",
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, f('services', 'Services'), f('book', 'Meet & greet'), /*#__PURE__*/React.createElement("span", {
    className: "foot-link",
    style: {
      cursor: 'default'
    }
  }, "@brunodogwalkernyc"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,249,234,.14)',
      marginTop: 32,
      paddingTop: 20,
      fontSize: 13,
      color: 'rgba(255,249,234,.82)'
    }
  }, "Neighborhood walks. Everyday joy.")));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  SITE_LOGOS: L
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CtaStrip = __ds_scope.CtaStrip;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ThemeSwitch = __ds_scope.ThemeSwitch;

__ds_ns.Spark = __ds_scope.Spark;

__ds_ns.Wave = __ds_scope.Wave;

__ds_ns.Mascot = __ds_scope.Mascot;

__ds_ns.Parallax = __ds_scope.Parallax;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.AmbientGlow = __ds_scope.AmbientGlow;

__ds_ns.AnimatedMascot = __ds_scope.AnimatedMascot;

__ds_ns.FloatingElement = __ds_scope.FloatingElement;

__ds_ns.GlassSurface = __ds_scope.GlassSurface;

__ds_ns.ScrollReveal = __ds_scope.ScrollReveal;

__ds_ns.SpatialCard = __ds_scope.SpatialCard;

__ds_ns.SpatialLayer = __ds_scope.SpatialLayer;

__ds_ns.StaggerContainer = __ds_scope.StaggerContainer;

__ds_ns.TactileButton = __ds_scope.TactileButton;

__ds_ns.GlassPanel = __ds_scope.GlassPanel;

__ds_ns.ImageTile = __ds_scope.ImageTile;

__ds_ns.CaptionBlock = __ds_scope.CaptionBlock;

__ds_ns.CaptionWord = __ds_scope.CaptionWord;

__ds_ns.NameCaption = __ds_scope.NameCaption;

})();
