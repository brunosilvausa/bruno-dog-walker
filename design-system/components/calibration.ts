import type { CSSProperties } from "react";

export const calibrationAxes = ["tilt", "lift", "glow", "duration"] as const;
export type CalibrationAxis = typeof calibrationAxes[number];
export type Calibration = Record<CalibrationAxis, number> & { reduced: boolean };

export const calibrationFields = {
  tilt: { label: "Tilt", min: 0, max: 4, step: 0.5, unit: "degrees" },
  lift: { label: "Hover lift", min: 0, max: 6, step: 1, unit: "pixels" },
  glow: { label: "Glow intensity", min: 0, max: 100, step: 5, unit: "percent" },
  duration: { label: "Duration multiplier", min: 0.5, max: 2, step: 0.1, unit: "times" },
} as const;

export const calibrationDefaults: Calibration = Object.freeze({ tilt: 4, lift: 4, glow: 100, duration: 1, reduced: false });

export function updateCalibration(current: Calibration, axis: CalibrationAxis, value: number): Calibration {
  if (!Number.isFinite(value)) return current;
  const { min, max, step } = calibrationFields[axis];
  const clamped = Math.min(max, Math.max(min, value));
  const snapped = Number((min + Math.round((clamped - min) / step) * step).toFixed(2));
  return { ...current, [axis]: snapped };
}

export function calibrationStyle(settings: Calibration): CSSProperties & Record<`--ds-${string}`, string | number> {
  return {
    "--ds-tilt": `${settings.tilt}deg`,
    "--ds-card-lift": `${-settings.lift}px`,
    "--ds-glow-scale": settings.glow / 100,
    "--ds-duration-scale": settings.duration,
  };
}
