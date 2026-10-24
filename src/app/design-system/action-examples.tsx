"use client";

import { useState } from "react";
import { Button } from "@/design-system/components/action";

export function ActionExamples() {
  const [selected, setSelected] = useState(false);
  const [status, setStatus] = useState("Ready to try.");
  return <div className="ds-stack">
    <div className="ds-row">
      <Button arrow onClick={() => setStatus("Example action completed. Nothing was sent.")}>Try an action</Button>
      <Button variant="secondary" aria-pressed={selected} onClick={() => setSelected(!selected)}>
        Select example
      </Button>
      <Button glow="none" arrow onClick={() => setStatus("Halo-free example completed. Nothing was sent.")}>Without a halo</Button>
      <Button disabled>Unavailable</Button>
      <Button loading loadingLabel="Preparing…">Continue</Button>
    </div>
    <p role="status">{status} {selected ? "Example selected." : "Example not selected."}</p>
  </div>;
}
