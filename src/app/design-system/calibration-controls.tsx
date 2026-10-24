"use client";

import { Button } from "@/design-system/components/action";
import { calibrationAxes, calibrationFields, updateCalibration, type Calibration } from "@/design-system/components/calibration";

export function CalibrationControls({ settings, onChange, onReset }: {
  settings: Calibration; onChange: (settings: Calibration) => void; onReset: () => void;
}) {
  return <details className="ds-calibration w-full" open>
    <summary className="ds-title-small">Calibration controls</summary>
    <div className="ds-calibration-body ds-stack">
      <p className="ds-muted">Temporary settings for this laboratory. Reload or Reset restores the defaults.</p>
      <div className="ds-calibration-fields w-full">
        {calibrationAxes.map((axis) => {
          const field = calibrationFields[axis];
          return <div className="ds-stack" key={axis}>
            <div className="ds-row"><label htmlFor={`lab-${axis}`}>{field.label}</label>
              <output htmlFor={`lab-${axis}`} aria-hidden="true">{axis === "tilt" ? `±${settings[axis]}°` : axis === "lift" ? `${settings[axis]} px` : axis === "glow" ? `${settings[axis]}%` : `×${settings[axis]}`}</output></div>
            <input id={`lab-${axis}`} type="range" min={field.min} max={field.max} step={field.step}
              value={settings[axis]} aria-valuetext={`${settings[axis]} ${field.unit}`}
              onChange={(event) => onChange(updateCalibration(settings, axis, event.currentTarget.valueAsNumber))} />
          </div>;
        })}
      </div>
      <div className="ds-row">
        <Button variant="secondary" aria-pressed={settings.reduced} onClick={() => onChange({ ...settings, reduced: !settings.reduced })}>Simulate reduced motion</Button>
        <Button variant="cream" onClick={onReset}>Reset calibration</Button>
      </div>
    </div>
  </details>;
}
