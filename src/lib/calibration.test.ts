import { describe, expect, it } from "vitest";
import { calibrationDefaults, calibrationStyle, updateCalibration } from "@/design-system/components/calibration";

describe("showcase calibration boundaries", () => {
  it("clamps and snaps values to the supported range", () => {
    const tilted = updateCalibration(calibrationDefaults, "tilt", 9);
    expect(tilted.tilt).toBe(4);
    expect(updateCalibration(tilted, "lift", -2).lift).toBe(0);
    expect(updateCalibration(tilted, "duration", 1.27).duration).toBe(1.3);
    expect(updateCalibration(tilted, "glow", 59).glow).toBe(60);
  });
  it.each([NaN, Infinity, -Infinity])("preserves valid settings for invalid input %s", (value) => {
    expect(updateCalibration(calibrationDefaults, "tilt", value)).toBe(calibrationDefaults);
  });
  it("maps settings to scoped token overrides without mutating defaults", () => {
    const updated = updateCalibration(calibrationDefaults, "glow", 25);
    expect(calibrationStyle(updated)).toEqual({
      "--ds-tilt": "4deg", "--ds-card-lift": "-4px", "--ds-glow-scale": 0.25, "--ds-duration-scale": 1,
    });
    expect(calibrationDefaults.glow).toBe(100);
  });
});
