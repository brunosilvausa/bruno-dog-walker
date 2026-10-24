"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { Button } from "@/design-system/components/action";
import { TextField } from "@/design-system/components/field";
import { contactSchema, type ContactDetails } from "@/lib/contact-schema";

const subscribe = () => () => {};

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactDetails, string>>>({});
  const [checked, setChecked] = useState(false);
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const errorCount = Object.values(errors).filter(Boolean).length;

  function edit(event: FormEvent<HTMLFormElement>) {
    const field = event.target;
    if (!(field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement)) return;
    const name = field.name as keyof ContactDetails;
    setChecked(false);
    if (errors[name]) setErrors(previous => ({ ...previous, [name]: undefined }));
  }

  function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setChecked(false);
    const form = event.currentTarget;
    const result = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!result.success) {
      const next: Partial<Record<keyof ContactDetails, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactDetails;
        next[field] ??= issue.message;
      }
      setErrors(next);
      const first = form.elements.namedItem(result.error.issues[0].path[0] as string);
      if (first instanceof HTMLElement) {
        const group = first.closest("details");
        if (group) group.open = true;
        first.focus();
      }
      return;
    }
    setErrors({});
    setChecked(true);
  }

  return <form className="lp-contact-form" onSubmit={review} onInput={edit} noValidate aria-labelledby="form-heading">
    <fieldset disabled={!ready}>
    <div className="lp-form-heading"><span className="lp-eyebrow">A good place to start</span><h3 id="form-heading">Tell us about your best friend.</h3><p>Four quick details. A little hello.</p></div>
    <p className="lp-form-notice" id="delivery-notice">Preview only — you can try the form, but nothing will be sent.</p>
    <div className="lp-form-grid">
      <TextField id="contact-owner" name="owner" label="Your name" autoComplete="name" maxLength={100} required error={errors.owner} />
      <TextField id="contact-email" name="email" type="email" label="Email address" autoComplete="email" autoCapitalize="none" spellCheck={false} inputMode="email" maxLength={254} required error={errors.email} />
      <TextField id="contact-dog" name="dog" label="Dog’s name" autoComplete="off" maxLength={100} required error={errors.dog} />
      <TextField id="contact-location" name="location" label="Cross streets" autoComplete="off" maxLength={120} helper="For example: E 80th & 2nd Ave." required error={errors.location} />
    </div>
    <details className="lp-form-extra">
    <summary>Add a note <span>(optional)</span></summary>
    <div className="ds-field">
      <label htmlFor="contact-message">Anything else? <span>(optional)</span></label>
      <textarea className="ds-input" id="contact-message" name="message" autoComplete="off" rows={3} maxLength={1500}
        aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-help message-error" : "message-help"} />
      <p className="ds-field-help" id="message-help">Their personality, your routine, or what care you’re looking for.</p>
      {errors.message ? <p className="ds-field-error" id="message-error">{errors.message}</p> : null}
    </div>
    </details>
    <p role="status" className="lp-form-result">{errorCount
      ? `Please check ${errorCount === 1 ? "the highlighted field" : `the ${errorCount} highlighted fields`}.`
      : checked ? "Details checked. Nothing was sent. Your details remain here while delivery is being set up." : ""}</p>
    <Button type="submit" block tactile arrow aria-describedby="delivery-notice">Review request</Button>
    <p className="lp-form-footnote">No reservation is made by completing this form.</p>
    </fieldset>
    <noscript><p>This preview needs JavaScript to check your details. Nothing will be sent.</p></noscript>
  </form>;
}
